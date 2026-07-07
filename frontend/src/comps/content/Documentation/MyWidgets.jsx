import { Package, Settings, BarChart3, LayoutPanelTop } from 'lucide-react';
import {
  ToolPage,
  ToolHeader,
  SectionHeading,
  Screenshot,
  InfoCard,
  SummaryCard,
  Callout,
} from '../Widgets/ToolArticle';

const summaryPoints = [
  'See all deployed tools in one place',
  'Review status, IDs, and tool types quickly',
  'Open configuration for any tool instance',
  'Jump into detailed dashboard views when needed',
  'Monitor performance and engagement across tools',
  'Manage multiple instances for different pages or use cases',
];

export default async function MyWidgetsPage() {
  return (
    <ToolPage>
      <ToolHeader
        icon={Package}
        title="My Tools"
        description="Manage and monitor your active tools from one central view."
      />

      <section className="mb-10">
        <SectionHeading title="What this section is for" description="A single place to review deployed tools." />
        <InfoCard title="What you can do here">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>View active tools and their current status</li>
            <li>Check IDs, types, and quick performance context</li>
            <li>Open Configure to update behavior or appearance</li>
            <li>Open View Dashboard for tool-specific analytics</li>
          </ul>
        </InfoCard>
      </section>

      <section className="mb-10">
        <SectionHeading title="Overview of the My Tools screen" description="The main management view for deployed tool instances." />
        <Screenshot
          src="/images/captures/my-widgets.png"
          alt="My Tools dashboard"
          caption="My Tools management interface"
        />
        <Callout title="Why this matters">
          Each tool instance can serve a different page, audience, or workflow, so this screen helps you keep those deployments organized without jumping between separate dashboards.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading title="What information is shown" description="The most useful details are visible at a glance." />
        <div className="grid gap-2.5 sm:grid-cols-2">
          <InfoCard icon={LayoutPanelTop} title="Tool identity">
            Name, current status, tool ID, and tool type.
          </InfoCard>
          <InfoCard icon={Settings} title="Configuration access">
            Open Configure to adjust settings, text, visuals, or connected integrations.
          </InfoCard>
          <InfoCard icon={BarChart3} title="Performance context">
            Review high-level engagement or activity before opening the detailed dashboard.
          </InfoCard>
          <InfoCard icon={Package} title="Multiple instances">
            Use separate tool instances for different pages, funnels, or customer journeys.
          </InfoCard>
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading title="How to use this section" description="A simple workflow for managing deployed tools." />
        <InfoCard title="Recommended workflow">
          <ol className="space-y-2.5">
            {[
              'Scan the list to see which tools are active',
              'Open Configure when you need to change behavior or appearance',
              'Use View Dashboard to inspect detailed analytics',
              'Compare different tool instances across pages or use cases',
            ].map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] text-[var(--docs-steel)] border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </InfoCard>
      </section>

      <SummaryCard intro="The My Tools section helps you:" points={summaryPoints} />
    </ToolPage>
  );
}
