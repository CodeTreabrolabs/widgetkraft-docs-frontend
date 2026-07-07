export default function DocsScreenshot({ src, alt, caption }) {
  return (
    <figure className="docs-screenshot mb-6">
      <img src={src} alt={alt} className="shadow-lg" />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[var(--docs-stone)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
