import Link from 'next/link';

const variants = {
  primary: 'docs-btn docs-btn-primary',
  secondary: 'docs-btn docs-btn-secondary',
  ghost: 'docs-btn docs-btn-ghost',
};

export default function DocsButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
