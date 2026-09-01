import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rongbao.yick.cc'),
  title: '茸宝｜Ai宠物专家｜健康咨询 - 营养建议 - 行为分析',
  description: '茸宝知识库海量诊疗信息，帮助万千主人准确迅速诊断。',
  icons: { icon: '/rongbao.png' },
  openGraph: {
    title: '茸宝｜Ai宠物专家｜健康咨询 - 营养建议 - 行为分析',
    description: '茸宝知识库海量诊疗信息，帮助万千主人准确迅速诊断。',
    images: [{ url: '/og.png', width: 1728, height: 920 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '茸宝｜Ai宠物专家｜健康咨询 - 营养建议 - 行为分析',
    description: '茸宝知识库海量诊疗信息，帮助万千主人准确迅速诊断。',
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
