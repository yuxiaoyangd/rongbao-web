import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-brand-name">茸宝 APP</span>
          </div>
          <address className="footer-info">
            <p>白色天汉科技公司</p>
            <p>合肥市蜀山区蜀山经济开发区花峰路1201号</p>
            <p>
              <a href="mailto:jianjieluan@163.com">jianjieluan@163.com</a>
            </p>
          </address>
        </div>
        <div className="footer-right">
          <nav className="footer-links" aria-label="页脚导航">
            <a
              href="https://app.rongbao.yick.cc/"
              target="_blank"
              rel="noreferrer"
            >
              进入网页版
            </a>
            <Link href="/knowledge">茸宝知识库</Link>
            <Link href="/privacy">隐私政策</Link>
            <Link href="/terms">用户协议</Link>
            <Link href="/account-deletion">账号删除</Link>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2026 Rongbao</p>
      </div>
    </footer>
  );
}
