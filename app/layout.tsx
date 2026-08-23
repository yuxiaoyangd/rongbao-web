import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rongbao.yick.cc'),
  title: '茸宝｜更专业的宠物 AI 伴侣',
  description:
    '茸宝是一位专业、温暖的宠物 AI 伴侣，陪你关注宠物健康，记录每一次成长。',
  icons: { icon: '/rongbao.png' },
  openGraph: {
    title: '茸宝｜更专业的宠物 AI 伴侣',
    description:
      '更懂宠物，也更懂你的牵挂。专业、温暖的宠物 AI 伴侣。',
    images: [{ url: '/og.png', width: 1728, height: 920 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '茸宝｜更专业的宠物 AI 伴侣',
    description: '更懂宠物，也更懂你的牵挂。',
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
