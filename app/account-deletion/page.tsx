import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '账号与数据删除｜茸宝',
  description: '了解如何永久删除茸宝账号及其关联数据。',
};

export default function AccountDeletionPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/">
          <Image
            className="brand-mark"
            src="/rongbao.png"
            alt=""
            width={34}
            height={34}
          />
          <span>茸宝</span>
        </Link>
        <Link className="back-link" href="/">返回首页</Link>
      </header>
      <article className="legal-content">
        <p className="eyebrow">ACCOUNT &amp; DATA DELETION</p>
        <h1>账号与数据删除</h1>
        <p className="legal-date">更新日期：2026 年 8 月 25 日</p>
        <p className="legal-lead">你可以直接在茸宝 App 内永久删除账号，无需额外提交申请。</p>

        <h2>在 App 内删除</h2>
        <ol>
          <li>登录茸宝并打开左侧边栏。</li>
          <li>点击底部账号信息进入“个人中心”。</li>
          <li>点击“删除账号和数据”。</li>
          <li>阅读删除范围，输入“删除”并确认。</li>
        </ol>

        <h2>会被删除的数据</h2>
        <ul>
          <li>账号及内测邀请标识。</li>
          <li>宠物档案和相关资料。</li>
          <li>全部对话、消息和知识资料引用。</li>
          <li>回答反馈、错误诊断和限流记录。</li>
        </ul>

        <h2>删除后的影响</h2>
        <p>删除操作不可撤销，历史数据无法恢复。由于内测邀请标识也会一并删除，如需再次参加内测，需要重新获得邀请。</p>

        <h2>无法登录时</h2>
        <p>如果你无法进入 App，可以使用注册时的邮箱发送删除请求至 <a href="mailto:jianjieluan@163.com">jianjieluan@163.com</a>。为防止他人冒用，我们会在完成必要的账号验证后处理。</p>

        <p className="legal-note">删除请求完成后，当前登录会话会立即失效。为安全起见，请勿把登录验证码或密码通过邮件发送给我们。</p>
      </article>
    </main>
  );
}
