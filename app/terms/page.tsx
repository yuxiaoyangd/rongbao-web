import Link from 'next/link';

export const metadata = { title: '用户协议｜茸宝' };

export default function TermsPage() {
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
        <p className="eyebrow">TERMS OF SERVICE</p>
        <h1>用户协议</h1>
        <p className="legal-date">更新日期：2026 年 8 月 25 日</p>
        <h2>服务说明</h2>
        <p>茸宝提供宠物健康信息整理、日常照护建议、宠物档案和对话记录等辅助功能。内测期间，部分功能可能持续调整。</p>
        <h2>健康信息边界</h2>
        <p>茸宝提供的内容仅用于一般信息参考，不能替代执业兽医的检查、诊断和治疗，也不应作为自行使用处方药或人用药的依据。宠物出现紧急症状时，请立即就医。</p>
        <h2>合理使用</h2>
        <p>请勿利用本服务从事违法、侵权、干扰系统运行或危害他人的活动，也不要尝试绕过产品的安全限制。</p>
        <h2>服务调整</h2>
        <p>为改善体验和保障安全，我们可能更新功能、修复问题或调整内测范围，并会在必要时通过应用或官网提示。</p>
        <h2>联系我们</h2>
        <p>你可以随时删除单条对话、宠物档案或整个账号。账号删除方式请查看 <Link href="/account-deletion">账号与数据删除说明</Link>。</p>
        <h2>账号与数据</h2>
        <p>对本协议有任何问题，请联系 <a href="mailto:jianjieluan@163.com">jianjieluan@163.com</a>。</p>
        <p className="legal-note">本协议适用于茸宝受邀内测版本。继续使用更新后的服务前，请留意 App 或官网中的重要变更提示。</p>
      </article>
    </main>
  );
}
