export default function DocsSteps({ steps }) {
  return (
    <ol className="space-y-3 list-none !pl-0">
      {steps.map((step, idx) => (
        <li key={step} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--docs-accent)] text-xs font-medium text-white">
            {idx + 1}
          </span>
          <span className="text-[var(--docs-steel)]">{step}</span>
        </li>
      ))}
    </ol>
  );
}
