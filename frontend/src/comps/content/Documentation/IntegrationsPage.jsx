import { CheckCircle, Zap, Bell, MessageSquare } from 'lucide-react';
import { FaSlack, FaDiscord } from 'react-icons/fa';
import { SiGooglecalendar } from 'react-icons/si';
import { TbPlugConnected } from 'react-icons/tb';
import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsStatCard,
  DocsScreenshot,
  DocsCallout,
  DocsButton,
} from '@/comps/docs-ui';
import ConnectButton from './ConnectButton';

const getIntegrationsData = async () => ({
  availableIntegrations: [
    {
      id: 1,
      name: 'Slack',
      description: 'Get widget notifications directly in Slack',
      icon: <FaSlack />,
      status: 'available',
      category: 'Communication',
      features: ['Real-time notifications', 'Channel routing', 'Thread replies', 'Custom alerts'],
      useCase:
        'Perfect for teams that live in Slack. Get instant notifications when users submit feedback, start live chats, or fill out forms.',
    },
    {
      id: 2,
      name: 'Discord',
      description: 'Send widget activity updates to Discord channels',
      icon: <FaDiscord />,
      status: 'available',
      category: 'Communication',
      features: ['Real-time notifications', 'Thread replies', 'Embed messages', 'Activity logs'],
      useCase:
        'Ideal for community-driven projects. Keep your Discord community informed about feedback and user interactions in real-time.',
    },
    {
      id: 3,
      name: 'Google Calendar',
      description: 'Automatically sync events and schedules with Google Calendar',
      icon: <SiGooglecalendar />,
      status: 'coming-soon',
      category: 'Productivity & Scheduling',
      features: ['Two-way event sync', 'Automatic reminders', 'Real-time updates', 'Multi-calendar support'],
      useCase:
        'Sync widget-generated events directly to Google Calendar. Ideal for managing bookings, reminders, meetings, and schedules in one place.',
    },
  ],
  summary: {
    totalIntegrations: 3,
    availableNow: 2,
    comingSoon: 1,
    categories: 2,
  },
});

export default async function IntegrationsPage() {
  const integrationsData = await getIntegrationsData();

  return (
    <DocsPage>
      <DocsArticleHeader
        icon={TbPlugConnected}
        title="Integrations"
        description="Manage and configure your integrations"
      />

      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        <DocsStatCard label="Total" value={integrationsData.summary.totalIntegrations} hint="Integrations" />
        <DocsStatCard label="Available" value={integrationsData.summary.availableNow} hint="Ready to use" accent />
        <DocsStatCard label="Coming Soon" value={integrationsData.summary.comingSoon} hint="In development" />
        <DocsStatCard label="Categories" value={integrationsData.summary.categories} hint="Integration types" />
      </div>

      <DocsScreenshot
        src="/images/integrations/slack/image.png"
        alt="WidgetKraft Integrations Dashboard"
        caption="Integrations dashboard showing available connections"
      />

      <DocsSection id="available-integrations" title="Available Integrations">
        <div className="grid gap-4 md:grid-cols-2">
          {integrationsData.availableIntegrations.map((integration) => (
            <DocsCard key={integration.id}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{integration.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--docs-ink)]">{integration.name}</h3>
                    <p className="text-sm text-[var(--docs-stone)]">{integration.category}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    integration.status === 'available'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                      : 'bg-[var(--docs-accent-soft)] text-blue-300 border border-[var(--docs-accent-border)]'
                  }`}
                >
                  {integration.status === 'available' ? 'Available' : 'Coming Soon'}
                </span>
              </div>

              <p className="mb-4 text-sm">{integration.description}</p>

              <p className="mb-2 text-sm font-medium text-[var(--docs-ink)]">Features</p>
              <ul className="mb-4 space-y-1 !pl-0 list-none">
                {integration.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="shrink-0 text-[var(--docs-accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <DocsCard className="!p-3 mb-4 bg-[var(--docs-surface-soft)]">
                <p className="text-xs italic !mb-0">
                  <strong className="text-[var(--docs-ink)]">Use Case:</strong> {integration.useCase}
                </p>
              </DocsCard>

              {integration.status === 'available' ? (
                <ConnectButton integrationName={integration.name} />
              ) : (
                <DocsButton variant="secondary" className="w-full justify-center opacity-60 cursor-not-allowed" disabled>
                  <Bell size={16} />
                  Notify Me When Available
                </DocsButton>
              )}
            </DocsCard>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="about-integrations" title="About Integrations">
        <DocsCard>
          <p className="mb-4">
            <strong className="text-[var(--docs-ink)]">Purpose:</strong> Connect your WidgetKraft widgets with
            your favorite tools and platforms to automate workflows and streamline your operations.
          </p>

          <h3 className="docs-h3 !mt-0">What you can do here</h3>
          <ul className="mb-4">
            <li>Connect apps like Slack and Discord</li>
            <li>Sync schedules to Google Calendar</li>
            <li>Get real-time alerts when users interact with your widgets</li>
            <li>Automate workflows and team collaboration</li>
          </ul>

          <DocsCallout title="How Integrations Work" icon={Zap}>
            <ol className="!mb-0 list-decimal pl-4">
              <li>Choose an integration from the available options</li>
              <li>Click Connect and authenticate with the platform</li>
              <li>Configure what events trigger notifications or actions</li>
              <li>Test the integration to ensure it is working correctly</li>
              <li>Your widgets will now automatically sync with the connected service</li>
            </ol>
          </DocsCallout>
        </DocsCard>
      </DocsSection>

      <DocsCallout title="Need a Specific Integration?" icon={MessageSquare}>
        <p className="!mb-3">
          Do not see the integration you need? Let us know and we will consider adding it to our roadmap.
        </p>
        <DocsButton variant="primary">
          <MessageSquare size={16} />
          Use Feedback Widget to Request
        </DocsButton>
      </DocsCallout>
    </DocsPage>
  );
}
