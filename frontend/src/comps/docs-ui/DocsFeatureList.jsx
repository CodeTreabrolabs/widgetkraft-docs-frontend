import { CheckCircle } from 'lucide-react';

export default function DocsFeatureList({ items, columns = 1 }) {
  return (
    <ul
      className={`grid gap-2 ${columns === 2 ? 'md:grid-cols-2' : ''} list-none !pl-0`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[var(--docs-steel)]">
          <CheckCircle size={18} className="mt-0.5 shrink-0 text-[var(--docs-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
