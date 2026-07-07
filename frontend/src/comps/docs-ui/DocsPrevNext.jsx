import DocsButton from './DocsButton';

export default function DocsPrevNext({ prev, next }) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-10 flex flex-wrap gap-3 border-t border-[var(--docs-hairline)] pt-6">
      {prev && (
        <DocsButton href={prev.href} variant="secondary">
          ← {prev.label}
        </DocsButton>
      )}
      {next && (
        <DocsButton href={next.href} variant="primary" className="ml-auto">
          {next.label} →
        </DocsButton>
      )}
    </nav>
  );
}
