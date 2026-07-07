export default function DocsStatCard({ label, value, hint, accent }) {
  return (
    <div className={`docs-stat-card ${accent ? 'border-[var(--docs-accent-border)]' : ''}`}>
      <p className={`docs-eyebrow mb-1 ${accent ? 'text-blue-400' : ''}`}>{label}</p>
      <p className="text-2xl font-semibold text-[var(--docs-ink)]">{value}</p>
      {hint && <p className="mt-1 text-xs text-[var(--docs-stone)]">{hint}</p>}
    </div>
  );
}
