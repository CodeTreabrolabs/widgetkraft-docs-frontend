'use client';

import { Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const getBreadcrumb = (pathname) => {
  if (pathname === '/') return 'Home';
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[segments.length - 1];
  return last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const Header = ({ onMenuClick }) => {
  const pathname = usePathname();
  const breadcrumb = getBreadcrumb(pathname);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 flex h-[var(--docs-header-height)] items-center justify-between border-b border-[var(--docs-hairline)] bg-[var(--docs-canvas-elevated)]/95 px-4 backdrop-blur-sm sm:px-6 lg:left-[var(--docs-sidebar-width)]">
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-[var(--docs-radius-md)] p-2 text-[var(--docs-steel)] hover:bg-[var(--docs-surface)] hover:text-[var(--docs-ink)] lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-sm text-[var(--docs-stone)]">Documentation</p>
          <p className="truncate text-sm font-medium text-[var(--docs-ink)]">{breadcrumb}</p>
        </div>
      </div>


      <div className="flex items-center gap-2">
        <Link
          href="https://www.widgetkraft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="docs-btn docs-btn-primary !py-2 !text-sm"
        >
          Platform →
        </Link>
      </div>
    </header>
  );
};

export default Header;
