import Image from 'next/image';
import Link from 'next/link';
import { BetaApplicationForm } from './components/beta-application-form';
import { DownloadButton } from './components/download-button';

const features = [
  {
    number: '01',
    title: '专业健康咨询',
    description:
      '用清晰易懂的方式梳理宠物健康问题，帮你了解风险、观察重点和下一步行动。',
  },
  {
    number: '02',
    title: '专属宠物档案',
    description:
      '集中记录宠物资料与成长信息，让每一次咨询都建立在更完整的了解之上。',
  },
  {
    number: '03',
    title: '持续温暖陪伴',
    description:
      '从日常照护到突发担忧，茸宝随时倾听，也始终保持专业、谨慎和有边界。',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="茸宝首页">
          <Image
            className="brand-mark"
            src="/rongbao.png"
            alt="茸宝狗狗 Logo"
            width={38}
            height={38}
          />
          <span>茸宝</span>
        </a>
        <nav aria-label="主要导航">
          <a href="#features">产品功能</a>
          <a href="#about">关于茸宝</a>
          <Link href="/privacy">隐私政策</Link>
          <a href="#contact">联系我们</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">RONGBAO · PET AI COMPANION</p>
          <h1>
            更懂宠物，
            <span>也更懂你的牵挂。</span>
          </h1>
          <p className="hero-description">
            茸宝是一位专业、温暖的宠物 AI
            伴侣，陪你记录成长、理解健康信号，也照顾每一次不放心。
          </p>
          <div className="hero-actions">
            <DownloadButton className="download-button" fileName="rongbao.apk">
              下载 Android 版 <span aria-hidden="true">↗</span>
            </DownloadButton>
            <a className="beta-apply-link" href="#beta-apply">申请内测码</a>
            <span>v1.0.0 · ARM64</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="茸宝品牌形象">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <div className="mascot-halo">
            <Image
              src="/rongbao.png"
              alt="佩戴绿色围巾的茸宝"
              width={560}
              height={560}
              priority
            />
          </div>
          <div className="floating-note note-one">健康咨询</div>
          <div className="floating-note note-two">成长记录</div>
        </div>
      </section>

      <BetaApplicationForm />

      <section className="principles" aria-label="茸宝产品原则">
        <span>专业但不冰冷</span>
        <span>谨慎但不制造焦虑</span>
        <span>陪伴但不替代诊疗</span>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading">
          <p className="eyebrow">WHAT RONGBAO DOES</p>
          <h2>把复杂的宠物问题，变成清楚的下一步。</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-item" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="care-section section-shell" id="about">
        <div className="care-copy">
          <p className="eyebrow">DESIGNED WITH CARE</p>
          <h2>对健康保持敬畏，对陪伴保持耐心。</h2>
          <p>
            茸宝会提供风险提示和观察建议，但不会给出确定诊断。遇到呼吸困难、抽搐、昏迷、大出血或中毒等紧急情况，我们始终建议立即联系专业兽医。
          </p>
        </div>
        <div className="care-quote">
          <span>“</span>
          <p>真正好的陪伴，不是替你做决定，而是让你更有把握地照顾它。</p>
        </div>
      </section>

      <section className="coming-soon section-shell" id="contact">
        <div className="download-emblem">
          <Image
            src="/rongbao.png"
            alt="茸宝狗狗形象"
            width={116}
            height={116}
          />
        </div>
        <div className="download-copy">
          <p className="eyebrow">ANDROID · NOW AVAILABLE</p>
          <h2>把茸宝带在身边。</h2>
          <p>
            当前提供 Android ARM64 内测版，适用于大多数近年发布的 Android 手机。下载后打开安装包即可开始使用。
          </p>
        </div>
        <div className="download-card">
          <div className="download-card-top">
            <span className="status-dot" />
            <span>下载入口已开放</span>
          </div>
          <strong>app-arm64-v8a-release.apk</strong>
          <span className="download-meta">Android · ARM64-v8a · v1.0.0</span>
          <DownloadButton className="download-button light" fileName="app-arm64-v8a-release.apk">
            立即下载 <span aria-hidden="true">↓</span>
          </DownloadButton>
          <small>若未自动开始，请点击按钮重试</small>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image
            className="brand-mark"
            src="/rongbao.png"
            alt="茸宝狗狗 Logo"
            width={38}
            height={38}
          />
          <div>
            <strong>茸宝 Rongbao</strong>
            <p>更专业的宠物 AI 伴侣</p>
          </div>
        </div>
        <div className="footer-links">
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
