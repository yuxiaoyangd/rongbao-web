'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const compactRef = useRef(false);

  useEffect(() => {
    // Deterministic hide-on-scroll-down / show-on-scroll-up. Direction is
    // decided by cumulative travel since the last direction change (not by
    // speed), so behaviour is identical for fast wheel flicks, slow trackpad
    // glides and inertia scrolling. Micro-jitter flips direction constantly,
    // so it never accumulates enough travel to trigger anything.
    const AT_TOP = 48; // px from the top that forces the header open
    const MIN_DEPTH = 280; // page depth required before it may collapse
    const COLLAPSE_DIST = 48; // px of downward travel that collapses it
    const EXPAND_DIST = 32; // px of upward travel that re-opens it
    const IDLE_MS = 180; // stop sampling after this much stillness
    const LOCK_MS = 420; // let a morph (420ms CSS transition) finish before another starts

    let raf = 0;
    let running = false;
    let lastY = window.scrollY;
    let lastScrollT = performance.now();
    let lastChangeT = -Infinity;
    let dir = 0; // 1 = scrolling down, -1 = scrolling up, 0 = initial
    let travel = 0; // px moved within the current direction
    let anchorScroll = false; // true while a nav-clicked scroll is in flight
    let anchorMoved = false;
    let anchorTimer = 0;

    const applyCompact = (next: boolean, now: number) => {
      if (next === compactRef.current) return;
      compactRef.current = next;
      lastChangeT = now;
      setCompact(next);
    };

    const decide = (y: number, now: number) => {
      if (now - lastChangeT < LOCK_MS) return;
      if (y < AT_TOP) {
        applyCompact(false, now);
      } else if (compactRef.current) {
        if (dir < 0 && travel <= -EXPAND_DIST) applyCompact(false, now);
      } else if (dir > 0 && travel >= COLLAPSE_DIST && y > MIN_DEPTH) {
        applyCompact(true, now);
      }
    };

    const finishAnchorScroll = (now: number) => {
      anchorScroll = false;
      window.clearTimeout(anchorTimer);
      // The nav-clicked scroll never collapses the header while moving; once
      // it has settled, restore the canonical expanded state near the top.
      if (window.scrollY < AT_TOP && compactRef.current) {
        applyCompact(false, now);
      }
    };

    const frame = () => {
      const y = window.scrollY;
      const now = performance.now();
      const dy = y - lastY;
      lastY = y;
      if (dy !== 0) {
        if (anchorScroll) anchorMoved = true;
        if (dir === 0 || (dy > 0) !== (dir > 0)) {
          dir = dy > 0 ? 1 : -1; // direction reversed: restart the counter
          travel = 0;
        }
        travel += dy;
      }

      const idle = now - lastScrollT > IDLE_MS;
      if (anchorScroll && anchorMoved && idle) {
        running = false;
        finishAnchorScroll(now);
        return;
      }
      if (idle) {
        running = false;
        return; // no further scheduling until the next scroll event
      }
      if (!anchorScroll) decide(y, now);
      raf = requestAnimationFrame(frame);
    };

    const onNavClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      if (href.length < 2) return;
      // Suppress collapse/expand for the whole programmatic scroll that
      // follows; reset travel so it cannot fire after the jump settles.
      anchorScroll = true;
      anchorMoved = false;
      window.clearTimeout(anchorTimer);
      anchorTimer = window.setTimeout(() => {
        if (!anchorMoved) anchorScroll = false; // click landed where we were
      }, 2000);
      dir = 0;
      travel = 0;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame); // observe the programmatic scroll
      }
    };

    const onScroll = () => {
      lastScrollT = performance.now();
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onNavClick, { capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onNavClick, true);
      window.clearTimeout(anchorTimer);
      cancelAnimationFrame(raf);
    };
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
