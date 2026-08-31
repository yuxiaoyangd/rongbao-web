import type { ReactNode } from 'react';

type DownloadButtonProps = {
  children: ReactNode;
  className?: string;
};

export function DownloadButton({ children, className }: DownloadButtonProps) {
  return (
    <a className={className} href="/download">
      {children}
    </a>
  );
}
