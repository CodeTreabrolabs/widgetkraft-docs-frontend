import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsPrevNext,
} from '@/comps/docs-ui';

const getPageData = async () => ({
  title: 'Introduction',
  description:
    'WidgetKraft is a unified widget platform that helps businesses capture conversations, leads, and visitor insights directly from their website without juggling multiple tools.',
});

export default async function IntroductionPage() {
  const data = await getPageData();

  return (
    <DocsPage>
      <DocsArticleHeader title={data.title} description={data.description} />

      <DocsSection id="why-widgetkraft" title="Why WidgetKraft?">
        <DocsCard>
          <p>
            Instead of managing separate tools for live chat, forms, comments, visitor tracking, and
            chatbots, WidgetKraft provides a single, lightweight widget layer that works across use
            cases while keeping setup and management simple.
          </p>
        </DocsCard>
      </DocsSection>

      <DocsSection id="built-for" title="Built For">
        <ul>
          <li>Startups and SMBs looking to capture leads efficiently</li>
          <li>Agencies managing multiple client sites</li>
          <li>Content-driven websites that need engagement tools</li>
          <li>SaaS and service businesses that care about lead capture and response speed</li>
        </ul>
      </DocsSection>

      <DocsSection id="getting-started" title="Getting Started">
        <DocsCard>
          <h3 className="docs-h3 !mt-0">Basic Setup Flow</h3>
          <ol>
            <li>Create a WidgetKraft account</li>
            <li>Create your first widget</li>
            <li>Copy the embed script</li>
            <li>Paste it into your website</li>
            <li>Start receiving interactions</li>
          </ol>
          <p className="!mb-0 italic text-[var(--docs-stone)]">
            No complex configuration or backend changes required.
          </p>
        </DocsCard>
      </DocsSection>

      <DocsPrevNext next={{ href: '/platform-concepts', label: 'Platform Concepts' }} />
    </DocsPage>
  );
}
