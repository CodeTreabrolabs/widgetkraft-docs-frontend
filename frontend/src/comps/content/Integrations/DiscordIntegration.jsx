import { MessageSquare, Hash, Shield, Settings, AlertCircle } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
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

const connectSteps = [
  'Open the Integrations page and click Connect on Discord',
  'Authorize your Discord account',
  'Choose the guild you want to connect',
  'Authorize the WidgetKraft bot for that guild',
  'Return to WidgetKraft and confirm the guild connection',
];

export default function DiscordIntegrationGuidePage() {
  return (
    <ToolPage>
      <p style={{ display: 'none' }}>{`Current Page URL: https://docs.widgetkraft.com/integrations/connect-discord`}</p>
      <ToolHeader
        icon={FaDiscord}
        title="Discord Integration Guide"
        description="Connect your tools to Discord and route notifications into the guild and channels your team already uses."
      />

      <section className="mb-10">
        <SectionHeading title="Connecting Discord" description="Five steps to connect your account and guild." />
        <StepList steps={connectSteps} />
        <Screenshot src="/images/integrations/discord/discord-1.png" alt="Discord connect card" caption="Integrations page showing the Discord Connect button" />
        <Screenshot src="/images/integrations/discord/discord-2.png" alt="Discord OAuth" caption="Discord account authorization" />
        <Screenshot src="/images/integrations/discord/discord-3.png" alt="Connect guild action" caption="Connected account with Connect Guild action" />
        <Screenshot src="/images/integrations/discord/discord-3.1.png" alt="Guild selector" caption="Guild selector popup" />
        <Screenshot src="/images/integrations/discord/discord-4.png" alt="Bot authorization" caption="Authorize the WidgetKraft bot for the selected guild" />
        <Screenshot src="/images/integrations/discord/discord-5.png" alt="Guild connected" caption="Connected account and guild status" />
        <Callout icon={AlertCircle} title="First-time setup">
          Bot authorization only happens the first time you connect a given guild. Connecting a new guild later repeats that step for the new server.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading title="Switching guilds" description="Move notifications to a different Discord server when needed." />
        <InfoCard title="How to switch" className="mb-4">
          <ol className="space-y-2.5">
            {[
              'Click Connect Another Guild on the Discord card',
              'Pick the new guild from the selector',
              'Authorize the bot for that guild if prompted',
              'Reconnect any channel-level tool integrations in the new guild',
            ].map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] text-[var(--docs-steel)] border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]">{idx + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </InfoCard>
        <Screenshot src="/images/integrations/discord/discord-6.1.png" alt="Connect another guild" caption="Open the guild switcher" />
        <Screenshot src="/images/integrations/discord/discord-6.2.png" alt="Guild switcher popup" caption="Guild switcher with current and available options" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Connecting a tool to a Discord channel" description="Route each tool into the right channel within the connected guild." />
        <InfoCard title="Channel connection flow" className="mb-4">
          <ol className="space-y-2.5">
            {[
              'Open the tool you want to connect',
              'Open its configuration panel',
              'Click Connect Discord Channel',
              'Choose the target text channel',
              'Confirm the connection and start receiving notifications',
            ].map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] text-[var(--docs-steel)] border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]">{idx + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </InfoCard>
        <Screenshot src="/images/integrations/discord/discord-7.1.png" alt="Connect Discord channel action" caption="Tool configuration with Connect Discord Channel" />
        <Screenshot src="/images/integrations/discord/discord-7.2.png" alt="Discord channel picker" caption="Channel picker for the connected guild" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Managing the Discord integration" description="Keep account, guild, and tool-level routing under control." />
        <div className="grid gap-2.5 sm:grid-cols-2">
          <InfoCard icon={Shield} title="Guild permissions">
            You need the right guild permissions to authorize the bot and let it post inside channels.
          </InfoCard>
          <InfoCard icon={Hash} title="Channel routing">
            Different tools can be connected to different channels in the same guild for clearer team workflows.
          </InfoCard>
          <InfoCard icon={Settings} title="Reconnect or switch">
            You can disconnect the current guild and connect another one whenever your routing needs change.
          </InfoCard>
          <InfoCard icon={AlertCircle} title="Troubleshooting">
            If a channel button is disabled, finish the account plus guild connection first before configuring tool-level channels.
          </InfoCard>
        </div>
      </section>

      <SummaryCard
        intro="The Discord integration helps you:"
        points={[
          'Receive tool notifications in your Discord guild',
          'Connect the WidgetKraft bot to the right server',
          'Route each tool to a specific channel',
          'Switch guilds when your setup changes',
          'Keep support, feedback, and lead alerts organized',
          'Operate entirely from a familiar Discord workflow',
        ]}
      />
    </ToolPage>
  );
}