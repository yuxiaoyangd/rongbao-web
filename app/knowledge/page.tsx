import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BetaApplicationForm } from '../components/beta-application-form';
import { knowledgeArticles } from './data';

export const metadata: Metadata = {
  title: '宠物知识库｜猫狗健康、饮食与行为建议｜茸宝',
  description:
    '茸宝宠物知识库整理猫狗健康、饮食、行为、预防和日常护理资料，帮助主人看懂观察重点与就医边界。',
  alternates: { canonical: '/knowledge' },
  openGraph: {
    title: '宠物知识库｜猫狗健康、饮食与行为建议｜茸宝',
    description:
      '整理可靠的猫狗健康、饮食、行为与日常护理知识，帮助主人做好下一步。',
    url: '/knowledge',
  },
};

export default function KnowledgeIndexPage() {
  return (
    <main className="knowledge-page" id="top">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="茸宝首页">
            <Image className="brand-mark" src="/rongbao.png" alt="" width={34} height={34} />
            <span>茸宝</span>
          </Link>
          <nav className="site-nav" aria-label="知识库导航">
            <Link href="/">返回首页</Link>
            <Link className="nav-download" href="/#download">下载 App</Link>
          </nav>
        </div>
      </header>

      <section className="knowledge-hero section-shell">
        <p className="eyebrow">RONGBAO KNOWLEDGE BASE</p>
        <h1>把宠物问题，拆成清楚的下一步。</h1>
        <p>
          从健康信号、饮食选择到行为变化，茸宝整理可靠资料，帮助你先观察、再判断，知道什么时候该联系兽医。
        </p>
      </section>

      <section className="knowledge-list section-shell" aria-label="宠物知识文章">
        <div className="knowledge-list-heading">
          <h2>宠物照护指南</h2>
          <span>{knowledgeArticles.length} 篇</span>
        </div>
        <div className="knowledge-grid">
          {knowledgeArticles.map((article) => (
            <article className="knowledge-card" key={article.slug}>
              <div className="knowledge-card-meta">
                <span>{article.categoryLabel}</span>
                <span>{article.readingTime}</span>
              </div>
              <h3>
                <Link href={`/knowledge/${article.slug}`}>{article.title}</Link>
              </h3>
              <p>{article.description}</p>
              <Link className="knowledge-card-link" href={`/knowledge/${article.slug}`}>
                阅读指南 <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-cta section-shell">
        <div>
          <p className="eyebrow">PET CARE, WITH MORE CONFIDENCE</p>
          <h2>遇到具体问题，让茸宝陪你一起梳理。</h2>
          <p>下载 Android 内测版，记录宠物情况，获得更有依据的交流方向。</p>
        </div>
        <div className="knowledge-cta-actions">
          <BetaApplicationForm />
          <Link className="text-link" href="/#download">了解下载方式 →</Link>
        </div>
      </section>

      <footer>
        <div className="footer-links">
          <Link href="/">首页</Link>
          <Link href="/knowledge">茸宝知识库</Link>
          <Link href="/privacy">隐私政策</Link>
          <Link href="/terms">用户协议</Link>
        </div>
        <p className="copyright">© 2026 Rongbao</p>
      </footer>
    </main>
  );
}
