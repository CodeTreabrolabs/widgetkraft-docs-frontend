export default function DocsCallout({ title, children, icon: Icon }) {
  return (
    <div className="docs-callout mb-6">
      {(title || Icon) && (
        <div className="mb-2 flex items-center gap-2">
          {Icon && <Icon size={18} className="text-[var(--docs-accent)] shrink-0" />}
          {title && <p className="font-medium text-[var(--docs-ink)]">{title}</p>}
        </div>
      )}
      <div className="text-sm text-[var(--docs-steel)]">{children}</div>
    </div>
  );
}
