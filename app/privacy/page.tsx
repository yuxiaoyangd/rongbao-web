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
        <p className="legal-date">更新日期：2026 年 9 月 3 日</p>
        <p className="legal-lead">
          茸宝是一款面向受邀用户的宠物 AI 伴侣。我们只在提供账号、宠物档案、对话、知识资料引用、产品反馈和稳定性保障所需的范围内处理数据。
        </p>

        <h2>一、我们处理的信息</h2>
        <ul>
          <li>账号信息：受邀邮箱或手机号码、登录状态及内测资格。</li>
          <li>内测申请：你主动提交的邮箱或手机号码、申请类别、提交来源和提交时间。</li>
          <li>宠物档案：名字、种类、性别，以及你选择填写的生日、品种和体重。</li>
          <li>对话信息：对话标题、你提交的问题、AI 回答和相关时间。</li>
          <li>知识资料引用：回答关联的资料标题、来源机构、链接、摘要和风险等级。</li>
          <li>回答反馈：点赞或点踩、改进原因、可选补充说明、对应消息和 App 版本。</li>
          <li>稳定性数据：错误类型、错误堆栈、App 版本、设备平台、请求时间和限流计数。诊断记录不重复保存对话正文。</li>
        </ul>

        <h2>二、信息的使用</h2>
        <p>我们使用这些信息处理内测申请、发送内测码，验证内测资格，保存和恢复你的记录，结合宠物档案与已发布知识资料生成回答，分析回答质量和安全风险，并防止接口滥用。</p>

        <h2>三、第三方服务</h2>
        <p>茸宝使用 Supabase 提供账号、数据库和后端服务，并通过服务端调用 AI 模型生成回答。为完成你主动发起的咨询，相关问题和必要的宠物档案上下文会被发送给模型服务。请不要在对话中提交与宠物咨询无关的敏感个人信息。</p>

        <h2>四、宠物健康信息边界</h2>
        <p>茸宝提供的信息不能替代兽医检查、诊断或治疗。出现呼吸困难、持续抽搐、昏迷、严重出血、疑似中毒、无法排尿等紧急情况时，应立即联系兽医或宠物急诊医院。</p>

        <h2>五、保存与删除</h2>
        <p>宠物档案和对话会保存到你主动删除对应内容或删除账号为止。删除消息时，其资料引用和反馈会一并删除。内测申请联系方式会在完成审核和内测联络所需期间保存；稳定性与滥用防护数据仅在完成内测分析和安全保障所需期间保存。</p>
        <p>你可以在 App 的“个人中心 → 删除账号和数据”中完成永久删除，也可以查看 <Link href="/account-deletion">账号与数据删除说明</Link>。</p>

        <h2>六、信息安全与访问控制</h2>
        <p>模型密钥和后端管理密钥不会放入客户端。业务数据使用行级访问控制，登录用户只能访问自己的宠物档案、对话、消息和反馈。</p>

        <h2>七、联系我们</h2>
        <p>如需查询、更正或删除信息，或对回答安全存在疑问，请联系 <a href="mailto:jianjieluan@163.com">jianjieluan@163.com</a>。</p>
        <p className="legal-note">本政策适用于茸宝受邀内测版本。产品数据范围或服务方式发生重要变化时，我们会同步更新本页面。</p>
      </article>
    </main>
  );
}
