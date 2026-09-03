'use client';

import type { MouseEvent, ReactNode } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { apkDownloadUrl } from '../download-url';

type DownloadButtonProps = {
  children: ReactNode;
  className?: string;
  fileName: string;
};

const isWechat = () =>
  typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent);

export function DownloadButton({ children, className, fileName }: DownloadButtonProps) {
  const [guideVisible, setGuideVisible] = useState(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isWechat()) {
      event.preventDefault();
      setGuideVisible(true);
    }
  };

  return (
    <>
      <a className={className} href={apkDownloadUrl} download={fileName} onClick={handleClick}>
        {children}
      </a>
      {guideVisible &&
        createPortal(
          <div
            className="wechat-download-overlay"
            role="presentation"
            onClick={() => setGuideVisible(false)}
          >
            <div
              className="wechat-download-guide"
              role="dialog"
              aria-modal="true"
              aria-labelledby="wechat-download-guide-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="wechat-download-close"
                type="button"
                aria-label="关闭提示"
                onClick={() => setGuideVisible(false)}
              >
                ×
              </button>
              <div className="wechat-download-dots" aria-hidden="true">···</div>
              <h2 id="wechat-download-guide-title">请在浏览器中打开</h2>
              <p>点击右上角「···」菜单，选择「在浏览器中打开」。</p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
