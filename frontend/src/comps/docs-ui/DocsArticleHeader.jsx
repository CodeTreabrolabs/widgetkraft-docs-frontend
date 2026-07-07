export default function DocsArticleHeader({ eyebrow, title, description, icon: Icon, actions }) {
  return (
    <header className="mb-8 pb-6 border-b border-[var(--docs-hairline)]">
      {eyebrow && <p className="docs-eyebrow mb-2">{eyebrow}</p>}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--docs-radius-md)] border border-[var(--docs-hairline)] bg-[var(--docs-surface)]">
            <Icon size={20} className="text-[var(--docs-accent)]" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="docs-h1 !mb-2">{title}</h1>
          {description && <p className="docs-lead !mb-0">{description}</p>}
        </div>
      </div>
      {actions && <div className="mt-4 flex flex-wrap items-center gap-3">{actions}</div>}
    </header>
  );
}
