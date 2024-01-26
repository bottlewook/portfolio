import type { Metadata } from 'next';

import localFont from 'next/font/local';
import './globals.css';

const omyu = localFont({ src: './font/omyu-pretty.ttf' });

export const metadata: Metadata = {
  title: 'bottle wook\'s portfolio',
  description: '임병욱의 포트폴리오입니다!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={omyu.className}>{children}</body>
    </html>
  );
}
