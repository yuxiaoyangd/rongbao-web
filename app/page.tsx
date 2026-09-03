import Image from 'next/image';
import Link from 'next/link';
import { BetaApplicationForm } from './components/beta-application-form';
import { DownloadButton } from './components/download-button';
import { Reveal } from './components/reveal';

const features = [
  {
    number: '01',
    title: '健康咨询',
    description:
      '围绕常见症状、日常护理与就医时机，先帮你理清该观察什么、怎么应对。',
  },
  {
    number: '02',
    title: '营养建议',
    description:
      '不同年龄与体况该吃什么、吃多少，把喂养和换粮讲得明明白白。',
  },
  {
    number: '03',
    title: '行为分析',
    description:
      '拆解叫声、肢体与习惯变化背后的信号，看懂它想表达什么。',
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="茸宝首页">
            <Image
              className="brand-mark"
              src="/rongbao.png"
              alt=""
              width={34}
              height={34}
            />
            <span>茸宝</span>
          </a>
          <nav className="site-nav" aria-label="主要导航">
            <a href="#features">产品功能</a>
            <a href="#about">关于茸宝</a>
            <a className="nav-download" href="#download">下载 App</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-label="茸宝简介">
        <div className="hero-copy">
          <h1>
            口袋里的 AI 宠物管家，
            <br />
            <span>随时问，随时懂。</span>
          </h1>
          <p className="hero-description">
            健康咨询、营养建议、行为分析——
            每次回答都来自可靠宠物知识库，快速而有依据。
          </p>
          <div className="hero-actions">
            <DownloadButton className="download-button" fileName="rongbao.apk">
              下载 Android 版
            </DownloadButton>
            <BetaApplicationForm />
          </div>
        </div>

        <div className="hero-visual" aria-label="茸宝品牌形象">
          <div className="mascot-halo">
            <Image
              src="/rongbao.png"
              alt="佩戴绿色围巾的茸宝"
              width={560}
              height={560}
              priority
            />
          </div>
          <span className="float-chip chip-one" aria-hidden="true">
            可靠知识库
          </span>
          <span className="float-chip chip-two" aria-hidden="true">
            快速响应
          </span>
        </div>
      </section>

      <section className="features section-shell" id="features">
        <Reveal>
          <h2 className="features-heading">
            让专业资料，变成主人听得懂的下一步。
          </h2>
        </Reveal>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.number} delay={90 + index * 100}>
              <article className="feature-item">
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="care-section section-shell" id="about">
          <div className="care-copy">
            <h2>
              对健康保持敬畏，
              <br />
              对陪伴保持耐心。
            </h2>
            <ul className="care-points">
              <li>提供风险提示与观察建议，但不替代兽医诊疗</li>
              <li>遇紧急情况，请立即联系专业兽医</li>
            </ul>
          </div>
          <figure className="care-quote">
            <p>
              真正好的陪伴，不是替你做决定，
              而是让你更有把握地照顾它。
            </p>
          </figure>
        </section>
      </Reveal>

      <Reveal>
        <section className="download section-shell" id="download">
          <div className="download-emblem">
            <Image
              src="/rongbao.png"
              alt=""
              width={116}
              height={116}
            />
          </div>
          <div className="download-copy">
            <h2>把茸宝带在身边。</h2>
            <p>Android 内测版现已开放，下载安装包即可开始使用。</p>
          </div>
          <div className="download-card">
            <div className="download-card-top">
              <span className="status-dot" aria-hidden="true" />
              <span>内测版已开放</span>
            </div>
            <p className="download-meta">Android · ARM64 · v1.0.0</p>
            <DownloadButton
              className="download-button card-button"
              fileName="app-arm64-v8a-release.apk"
            >
              立即下载
            </DownloadButton>
          </div>
        </section>
      </Reveal>

      <footer>
        <div className="footer-links">
          <Link href="/knowledge">茸宝知识库</Link>
          <Link href="/privacy">隐私政策</Link>
          <Link href="/terms">用户协议</Link>
          <Link href="/account-deletion">账号删除</Link>
          <a href="mailto:jianjieluan@163.com">联系我们</a>
        </div>
        <p className="copyright">© 2026 Rongbao</p>
      </footer>
    </main>
  );
}
