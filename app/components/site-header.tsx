'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      setCompact((prev) => {
        if (y < 12) return false;
        if (delta > 3) return prev || y > 260;
        if (delta < -3) return false;
        return prev;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={compact ? 'site-header is-compact' : 'site-header'}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="茸宝首页">
          <Image
            className="brand-mark"
            src="/rongbao.png"
            alt=""
            width={32}
            height={32}
          />
          <span>茸宝</span>
        </a>
        <nav className="site-nav" aria-label="主要导航">
          <a className="nav-link" href="#features">产品功能</a>
          <a className="nav-link" href="#about">关于茸宝</a>
        </nav>
        <a className="nav-download" href="#download" aria-label="下载 App">
          <svg
            className="nav-download-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span className="nav-download-label">下载 App</span>
        </a>
      </div>
    </header>
  );
}
