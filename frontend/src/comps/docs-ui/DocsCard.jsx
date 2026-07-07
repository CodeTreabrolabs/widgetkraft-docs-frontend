export default function DocsCard({ children, className = '', hover = false }) {
  return (
    <div className={`docs-card ${hover ? 'docs-card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}
