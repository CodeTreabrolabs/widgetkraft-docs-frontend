import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsBadge,
  DocsFeatureList,
  DocsSteps,
  DocsScreenshot,
  DocsCallout,
  DocsButton,
} from '@/comps/docs-ui';

export default function WidgetDocLayout({
  icon: Icon,
  title,
  description,
  pricing,
  currentPageUrl,
  customizableFeatures,
  customizationNote,
  creationSteps,
  creationTitle,
  creationIntro,
  creationScreenshots = [],
  creationNote,
  callout,
  codeSection,
  extraSections,
  actions,
}) {
  return (
    <DocsPage articleClassName="tool-article">
      {currentPageUrl && (
        <p style={{ display: 'none' }}>{`Current Page URL: ${currentPageUrl}`}</p>
      )}

      <DocsArticleHeader
        icon={Icon}
        title={title}
        description={description}
        actions={
          <>
            {pricing && (
              <DocsBadge>
                <span className="text-blue-300">Pricing:</span> {pricing}
              </DocsBadge>
            )}
            {actions}
          </>
        }
      />

      {customizableFeatures && (
        <DocsSection id="customization" title="You Can Fully Customize">
          <DocsCard>
            <DocsFeatureList items={customizableFeatures} columns={2} />
            {customizationNote && (
              <p className="mt-4 !mb-0 italic text-[var(--docs-stone)]">{customizationNote}</p>
            )}
          </DocsCard>
        </DocsSection>
      )}

      {codeSection}

      {creationTitle && (
        <DocsSection id="creating-widget" title={creationTitle}>
          {creationIntro && <p>{creationIntro}</p>}
          {creationSteps && <DocsSteps steps={creationSteps} />}
          {creationScreenshots.map((shot) => (
            <DocsScreenshot key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} />
          ))}
          {creationNote && <p>{creationNote}</p>}
          {callout && (
            <DocsCallout title={callout.title} icon={callout.icon}>
              {callout.content}
            </DocsCallout>
          )}
        </DocsSection>
      )}

      {extraSections}
    </DocsPage>
  );
}
