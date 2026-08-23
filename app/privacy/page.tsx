import Link from 'next/link';

export const metadata = { title: '隐私政策｜茸宝' };

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/">
          <span className="brand-mark">茸</span>
          <span>茸宝</span>
        </Link>
        <Link className="back-link" href="/">返回首页</Link>
      </header>
      <article className="legal-content">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>隐私政策</h1>
        <p className="legal-date">更新日期：2026 年 8 月 23 日</p>
        <h2>我们收集的信息</h2>
        <p>为提供账号登录、宠物档案、对话记录和 AI 咨询服务，茸宝可能处理你的邮箱或手机号码、宠物资料，以及你主动提交的咨询内容。</p>
        <h2>信息的使用</h2>
        <p>相关信息仅用于身份验证、保存和恢复你的记录、改善产品体验，以及完成你主动发起的服务请求。</p>
        <h2>信息安全</h2>
        <p>我们采用合理的技术和管理措施保护数据，并限制未经授权的访问。请避免在咨询中提交不必要的敏感个人信息。</p>
        <h2>你的选择</h2>
        <p>如需咨询、更正或删除相关信息，请联系 <a href="mailto:luanjianjie@163.com">luanjianjie@163.com</a>。</p>
        <p className="legal-note">本页面为内测阶段政策说明，正式发布前将根据实际产品能力进一步完善。</p>
      </article>
    </main>
  );
}
