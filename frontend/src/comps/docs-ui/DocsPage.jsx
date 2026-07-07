import TableOfContents from './TableOfContents';

export default function DocsPage({
  children,
  showToc = true,
  className = '',
  articleClassName = '',
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="flex gap-10 xl:gap-12">
        <article
          data-docs-article
          className={`docs-prose min-w-0 flex-1 max-w-[var(--docs-prose-max)] pb-12 ${articleClassName}`}
        >
          {children}
        </article>
        {showToc && <TableOfContents />}
      </div>
    </div>
  );
}
