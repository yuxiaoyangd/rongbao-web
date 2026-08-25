import Image from 'next/image';
import Link from 'next/link';

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
          <span className="brand-mark">茸</span>
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
            <button className="download-button" type="button" disabled>
              Android 版敬请期待
            </button>
            <span>茸宝 1.0.0 内测版</span>
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
        <Image src="/rongbao.png" alt="茸宝" width={160} height={160} />
        <div>
          <p className="eyebrow">COMING SOON</p>
          <h2>茸宝正在认真准备与你见面。</h2>
          <p>
            Android 版本仍在内测完善中。产品建议与合作沟通，请发送邮件至
            <a href="mailto:jianjieluan@163.com"> jianjieluan@163.com</a>。
          </p>
        </div>
        <button className="download-button light" type="button" disabled>
          下载入口暂未开放
        </button>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">茸</span>
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
