import { BarChart3, MessageSquareText, Package, Sparkles, Users } from 'lucide-react';
import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsStatCard,
  DocsCallout,
} from '@/comps/docs-ui';

const getDashboardData = async () => ({
  replyChannels: [
    {
      name: 'Dashboard',
      description: 'Replies handled directly inside the WidgetKraft dashboard.',
    },
    {
      name: 'Slack',
      description: 'Conversations responded to through your connected Slack workflow.',
    },
    {
      name: 'Discord',
      description: 'Messages and replies routed through your Discord setup.',
    },
  ],
  visitorWidgets: [
    {
      name: 'WidgetKraft visitor tracker',
      summary: 'See how visitors moved across the selected time window for this installed tracker.',
    },
    {
      name: 'Treabrolabs visitor tracker',
      summary: 'Compare another tracker instance to quickly spot quieter or more active periods.',
    },
  ],
});

function Screenshot({ src, alt, caption }) {
  return (
    <figure className="docs-screenshot my-5">
      <img src={src} alt={alt} className="shadow-lg" />
      {caption && <figcaption className="mt-3 text-center text-sm text-[var(--docs-stone)]">{caption}</figcaption>}
    </figure>
  );
}

export default async function DashboardPage() {
  const dashboardData = await getDashboardData();

  return (
    <DocsPage articleClassName="tool-article">
      <DocsArticleHeader
        title="Analytics Dashboard"
        description="A guided overview of the key screens, trends, and activity summaries you can review from your WidgetKraft dashboard."
      />

      <DocsSection id="dashboard-overview" title="Dashboard Overview">
        <p className="mb-4 text-[15px] leading-7 text-[var(--docs-steel)]">
          The main dashboard gives you a quick introduction to how your widgets are performing at a
          glance. Instead of digging through every widget one by one, you can immediately see how
          many are active, how many are inactive, and which widget categories are deployed most
          often.
        </p>
        <Screenshot
          src="/images/dashboard/dashboard-overview.png"
          alt="Dashboard overview"
          caption="WidgetKraft Dashboard Overview"
        />

        <div className="space-y-3">
          <DocsCard>
            <div className="mb-4 flex items-start gap-3">
              <Package className="mt-0.5 text-[var(--docs-accent)]" size={18} />
              <div>
                <h3 className="font-medium text-[var(--docs-ink)]">Active Tools</h3>
                <p className="text-sm text-[var(--docs-stone)]">Tools currently deployed</p>
              </div>
            </div>

            <ul className="space-y-2 pl-5 text-sm leading-6 text-[var(--docs-steel)]" style={{ listStyle: 'disc' }}>
              <li>See how many widgets are currently active and deployed.</li>
              <li>Identify inactive widgets that are installed but not live.</li>
              <li>Get a quick top-level view before drilling into individual widget performance.</li>
            </ul>
          </DocsCard>

          <DocsCard>
            <div className="mb-4 flex items-start gap-3">
              <BarChart3 className="mt-0.5 text-[var(--docs-accent)]" size={18} />
              <div>
                <h3 className="font-medium text-[var(--docs-ink)]">Deployments by category</h3>
                <p className="text-sm leading-6 text-[var(--docs-stone)]">
                  The category graph gives you a visual breakdown of which widget types are used the
                  most, helping you understand the mix of tools currently deployed across your
                  workspace.
                </p>
              </div>
            </div>

            <ul className="space-y-2 pl-5 text-sm leading-6 text-[var(--docs-steel)]" style={{ listStyle: 'disc' }}>
              <li>Compare deployment volume across different widget categories.</li>
              <li>Understand which widget types are being used most often.</li>
              <li>Spot the overall distribution of tools across your workspace.</li>
            </ul>
          </DocsCard>
          <Screenshot
            src="/images/dashboard/active-depbytype.png"
            alt="Active, inactive and deployed widgets by type"
            caption="Active, inactive and deployed widgets by type"
          />
        </div>
      </DocsSection>

      <DocsSection id="live-conversation" title="Live Conversation Snapshot">
        <p className="mb-4 text-[15px] leading-7 text-[var(--docs-steel)]">
          The live conversation panel gives you a quick analytics view of chatbot replies over time.
          It helps you understand how conversations are distributed across channels and how reply
          volume changes when you switch between daily, weekly, monthly, or yearly views.
        </p>

        <DocsCard>
          <div className="mb-4 flex items-start gap-3">
            <MessageSquareText className="mt-0.5 text-[var(--docs-accent)]" size={18} />
            <div>
              <h3 className="font-medium text-[var(--docs-ink)]">Replies across channels</h3>
              <p className="text-sm leading-6 text-[var(--docs-stone)]">
                This chart gives users a fast way to compare reply activity from the dashboard
                itself as well as connected communication channels like Slack and Discord.
              </p>
            </div>
          </div>
          <Screenshot
            src="/images/dashboard/live-conv-analytics.png"
            alt="Live conversation analytics"
            caption="WidgetKraft Live Conversation Analytics"
          />

          <ul className="mb-5 space-y-2 pl-5 text-sm leading-6 text-[var(--docs-steel)]" style={{ listStyle: 'disc' }}>
            <li>Review reply activity in a bar graph format over a selected time range.</li>
            <li>Switch between daily, weekly, monthly, and yearly views for a broader trend check.</li>
            <li>Compare responses coming from the dashboard and connected channels.</li>
          </ul>

          <div className="space-y-2">
            {dashboardData.replyChannels.map((channel) => (
              <div key={channel.name} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--docs-accent)]" />
                <p className="text-sm leading-6 text-[var(--docs-steel)]">
                  <span className="font-medium text-[var(--docs-ink)]">{channel.name}:</span>{' '}
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </DocsCard>
      </DocsSection>

      <DocsSection id="visitor-tracker-overview" title="Visitor Tracker Overview">
        <p className="mb-4 text-[15px] leading-7 text-[var(--docs-steel)]">
          The visitor tracker cards give you a simple glimpse of how people have been appearing over
          a recent time range. When you have multiple widgets of the same type installed, this view
          helps you compare activity patterns and understand where visitor attention is happening.
        </p>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {dashboardData.visitorWidgets.map((widget) => (
            <DocsCard key={widget.name}>
              <div className="mb-3 flex items-start gap-3">
                <Users className="mt-0.5 text-[var(--docs-accent)]" size={18} />
                <div>
                  <h3 className="font-medium text-[var(--docs-ink)]">{widget.name}</h3>
                  <p className="text-sm text-[var(--docs-stone)]">Visitor tracker</p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-6 text-[var(--docs-steel)]">{widget.summary}</p>

              <ul className="space-y-2 pl-5 text-sm leading-6 text-[var(--docs-steel)]" style={{ listStyle: 'disc' }}>
                <li>Get a glimpse of recent visitor activity for this widget type.</li>
                <li>View changes over a selected time period such as the last 30 minutes or 24 hours.</li>
                <li>Compare multiple installed visitor tracker widgets side by side.</li>
              </ul>
            </DocsCard>
          ))}
        </div>
        <Screenshot
          src="/images/dashboard/KYV-overview.png"
          alt="Visitor tracker overview"
          caption="WidgetKraft Visitor Tracker Overview"
        />
      </DocsSection>

      <DocsSection id="what-this-page-helps-with" title="What This Page Helps You Spot">
        <DocsCallout title="Use the dashboard as a first-look overview" icon={Sparkles}>
          <ul className="space-y-2 pl-5" style={{ listStyle: 'disc' }}>
            <li>Check how many widgets are active versus inactive.</li>
            <li>Understand which widget categories are most widely deployed.</li>
            <li>Review live conversation reply patterns across connected channels.</li>
            <li>Compare short-term visitor activity across installed visitor tracker widgets.</li>
          </ul>
        </DocsCallout>
      </DocsSection>
    </DocsPage>
  );
}
