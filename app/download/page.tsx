import Link from 'next/link';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { apkDownloadUrl } from '../download-url';

export default async function DownloadPage() {
  const userAgent = (await headers()).get('user-agent') ?? '';

  if (!/MicroMessenger/i.test(userAgent)) {
    redirect(apkDownloadUrl);
  }

  return (
    <main className="download-guide-page">
      <section className="download-guide-card" aria-labelledby="download-guide-title">
        <div className="download-guide-icon" aria-hidden="true">↓</div>
        <p className="eyebrow">ANDROID · DOWNLOAD</p>
        <h1 id="download-guide-title">请在外部浏览器中下载</h1>
        <p>
          微信内无法直接下载 Android 安装包。请点击右上角「···」，选择「在浏览器中打开」，打开后将自动开始下载。
        </p>
        <Link className="download-guide-back" href="/">
          返回首页
        </Link>
      </section>
    </main>
  );
}
