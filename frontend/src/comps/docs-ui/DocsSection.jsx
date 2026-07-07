export default function DocsSection({ id, title, level = 2, children, className = '' }) {
  const Tag = level === 3 ? 'h3' : 'h2';
  const headingClass = level === 3 ? 'docs-h3' : 'docs-h2';

  return (
    <section className={`mb-8 ${className}`}>
      {title && (
        <Tag id={id} className={headingClass}>
          {title}
        </Tag>
      )}
      {children}
    </section>
  );
}
