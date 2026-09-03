import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BetaApplicationForm } from '../../components/beta-application-form';
import { knowledgeArticleMap, knowledgeArticles } from '../data';

type KnowledgeArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: KnowledgeArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = knowledgeArticleMap.get(slug);
  if (!article) return {};

  return {
    title: `${article.title}｜茸宝`,
    description: article.description,
    alternates: { canonical: `/knowledge/${article.slug}` },
    openGraph: {
      title: `${article.title}｜茸宝宠物知识库`,
      description: article.description,
      url: `/knowledge/${article.slug}`,
      type: 'article',
    },
  };
}

export default async function KnowledgeArticlePage({ params }: KnowledgeArticlePageProps) {
  const { slug } = await params;
  const article = knowledgeArticleMap.get(slug);
  if (!article) notFound();

  const relatedArticles = article.relatedSlugs
    .map((relatedSlug) => knowledgeArticleMap.get(relatedSlug))
    .filter((relatedArticle) => relatedArticle !== undefined);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    dateModified: '2026-09-03',
    inLanguage: 'zh-CN',
    author: {
      '@type': 'Organization',
      name: '茸宝知识库',
      url: 'https://rongbao.yick.cc/knowledge',
    },
    publisher: {
      '@type': 'Organization',
      name: '茸宝',
      url: 'https://rongbao.yick.cc/',
    },
    mainEntityOfPage: `https://rongbao.yick.cc/knowledge/${article.slug}`,
  };

  return (
    <main className="knowledge-page" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="茸宝首页">
            <Image className="brand-mark" src="/rongbao.png" alt="" width={34} height={34} />
            <span>茸宝</span>
          </Link>
          <nav className="site-nav" aria-label="知识库导航">
            <Link className="nav-download" href="/#download">下载 App</Link>
          </nav>
        </div>
      </header>

      <article className="knowledge-article section-shell">
        <nav className="knowledge-breadcrumbs" aria-label="面包屑导航">
          <Link href="/">首页</Link>
          <span aria-hidden="true">/</span>
          <Link href="/knowledge">茸宝知识库</Link>
          <span aria-hidden="true">/</span>
          <span>{article.categoryLabel}</span>
        </nav>

        <header className="knowledge-article-header">
          <div className="knowledge-card-meta">
            <span>{article.categoryLabel}</span>
            <span>阅读约 {article.readingTime}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="knowledge-article-intro">{article.intro}</p>
        </header>

        <div className="knowledge-article-layout">
          <div className="knowledge-article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body && <p>{section.body}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <aside className="knowledge-note">
              <strong>茸宝提醒</strong>
              <p>{article.note}</p>
            </aside>

            <div className="knowledge-source">
              <span>参考资料</span>
              <a href={article.source.url} target="_blank" rel="noreferrer">
                {article.source.name} ↗
              </a>
            </div>
          </div>

          <aside className="knowledge-article-cta">
            <p className="eyebrow">RONGBAO</p>
            <h2>把问题带给茸宝。</h2>
            <p>记录宠物情况，获得更清楚的观察方向。</p>
            <BetaApplicationForm />
            <Link className="text-link" href="/#download">下载 Android 版 →</Link>
          </aside>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="knowledge-related section-shell" aria-label="相关阅读">
          <div className="knowledge-list-heading">
            <h2>继续了解</h2>
            <Link className="text-link" href="/knowledge">查看全部 →</Link>
          </div>
          <div className="knowledge-related-grid">
            {relatedArticles.map((relatedArticle) => (
              <Link className="knowledge-related-card" href={`/knowledge/${relatedArticle.slug}`} key={relatedArticle.slug}>
                <span>{relatedArticle.categoryLabel}</span>
                <strong>{relatedArticle.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer>
        <div className="footer-links">
          <Link href="/">首页</Link>
          <Link href="/knowledge">茸宝知识库</Link>
          <Link href="/privacy">隐私政策</Link>
          <Link href="/terms">用户协议</Link>
        </div>
        <p className="copyright">© 2026 Rongbao</p>
        <p className="footer-meta">
          白色天汉科技公司 · 合肥市蜀山区蜀山经济开发区花峰路1201号 ·{" "}
          <a href="mailto:jianjieluan@163.com">jianjieluan@163.com</a>
        </p>
      </footer>
    </main>
  );
}
