'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const article = document.querySelector('[data-docs-article]');
    if (!article) return;

    let observer;

    const syncHeadings = () => {
      const elements = Array.from(article.querySelectorAll('h2[id], h3[id]')).map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));

      setHeadings(elements);
      observer?.disconnect();
      elements.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    };

    const frame = requestAnimationFrame(syncHeadings);

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    const mutationObserver = new MutationObserver(() => {
      syncHeadings();
    });

    mutationObserver.observe(article, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  if (headings.length < 2) return null;

  return (
    <aside className="hidden xl:block w-[var(--docs-toc-width)] shrink-0">
      <nav className="sticky top-[calc(var(--docs-header-height)+1.5rem)] max-h-[calc(100vh-var(--docs-header-height)-3rem)] overflow-y-auto">
        <p className="docs-eyebrow mb-3">On this page</p>
        <ul className="space-y-1 border-l border-[var(--docs-hairline)]">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block border-l-2 py-1 text-sm transition-colors ${
                  heading.level === 3 ? 'pl-5' : 'pl-3'
                } ${
                  activeId === heading.id
                    ? 'border-[var(--docs-accent)] text-[var(--docs-ink)] font-medium'
                    : 'border-transparent text-[var(--docs-stone)] hover:text-[var(--docs-charcoal)]'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
