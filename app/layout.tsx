import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rongbao.yick.cc'),
  title: '茸宝｜宠物健康、饮食与行为 AI 助手',
  description:
    '茸宝帮助宠物主人了解健康、饮食和行为问题，整理观察重点与就医沟通方向。',
  icons: { icon: '/rongbao.png' },
  openGraph: {
    title: '茸宝｜宠物健康、饮食与行为 AI 助手',
    description:
      '了解宠物的健康信号，整理观察重点与下一步行动。当前开放 Android 内测申请。',
    images: [{ url: '/og.png', width: 1728, height: 920 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '茸宝｜宠物健康、饮食与行为 AI 助手',
    description:
      '了解宠物的健康信号，整理观察重点与下一步行动。当前开放 Android 内测申请。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
