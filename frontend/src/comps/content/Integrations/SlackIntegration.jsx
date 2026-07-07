import { MessageSquare, Hash, Lock, Settings, AlertCircle } from 'lucide-react';
import { FaSlack } from 'react-icons/fa';
import {
  ToolPage,
  ToolHeader,
  SectionHeading,
  Screenshot,
  InfoCard,
  StepList,
  SummaryCard,
  Callout,
} from '../Widgets/ToolArticle';

const introSteps = [
  'Open the Integrations page from the sidebar',
  'Find the Slack card and click Connect',
  'Choose your Slack workspace and allow access',
  'Return to WidgetKraft and confirm the connection',
];

export default function SlackIntegrationGuidePage() {
  return (
    <ToolPage>
      <p style={{ display: 'none' }}>{`Current Page URL: https://docs.widgetkraft.com/integrations/connect-slack`}</p>
      <ToolHeader
        icon={FaSlack}
        title="Slack Integration Guide"
        description="Connect your tools to Slack and receive real-time notifications in the channels your team already uses."
      />

      <section className="mb-10">
        <SectionHeading title="Connecting Slack" description="Four steps to authorize your workspace." />
        <StepList steps={introSteps} />
        <Screenshot src="/images/integrations/slack/slack-1.png" alt="Slack connect card" caption="Integrations page showing the Slack Connect button" />
        <Screenshot src="/images/integrations/slack/slack-2.png" alt="Slack authorization" caption="Slack workspace authorization and permissions" />
        <Screenshot src="/images/integrations/slack/slack-3.png" alt="Slack connected" caption="Connected Slack workspace status" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Connecting a tool to a Slack channel" description="Route a tool's activity into the right channel." />
        <InfoCard title="How it works" className="mb-4">
          <ol className="space-y-2.5">
            {[
              'Open the tool you want to connect',
              'Open its configuration panel',
              'Click Connect Slack Channel',
              'Choose the Slack channel for that tool',
              'Save the connection and start receiving notifications',
            ].map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] text-[var(--docs-steel)] border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]">{idx + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </InfoCard>
        <Screenshot src="/images/integrations/slack/slack-4.png" alt="Slack channel picker" caption="Modal showing available Slack channels" />
        <Screenshot src="/images/integrations/slack/slack-5.png" alt="Tool configuration with Slack button" caption="Tool configuration panel with Connect Slack Channel" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Managing the Slack integration" description="Change channels, disconnect, or troubleshoot." />
        <div className="grid gap-2.5 sm:grid-cols-2">
          <InfoCard icon={Settings} title="Change the connected channel">
            Open the tool configuration, disconnect the current channel, then choose a new Slack channel and reconnect.
          </InfoCard>
          <InfoCard icon={Lock} title="Private channels">
            Invite the WidgetKraft app into the private channel first, then reopen the Slack channel picker so it appears in the list.
          </InfoCard>
          <InfoCard icon={Hash} title="Multiple tools, different channels">
            Route each tool to a different Slack channel so support, product, and sales notifications stay separated.
          </InfoCard>
          <InfoCard icon={AlertCircle} title="Troubleshooting">
            If the channel button is disabled, Slack is not connected yet. Finish the workspace authorization steps first.
          </InfoCard>
        </div>
      </section>

      <SummaryCard
        intro="The Slack integration helps you:"
        points={[
          'Receive real-time tool notifications in Slack',
          'Route different tools to different channels',
          'Keep your team informed without switching dashboards',
          'Handle private and public channel setups',
          'Manage or update connections per tool',
          'Move faster on support, feedback, and lead activity',
        ]}
      />
    </ToolPage>
  );
}