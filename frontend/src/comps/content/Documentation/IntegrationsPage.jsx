import { Link2, Zap, CheckCircle, AlertCircle, Settings, Bell, MessageSquare } from 'lucide-react';
import { FaSlack } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { TbPlugConnected  } from "react-icons/tb";

// Server-side data fetching
const getIntegrationsData = async () => {
  return {
    availableIntegrations: [
      {
        id: 1,
        name: 'Slack',
        description: 'Get widget notifications directly in Slack',
        icon: <FaSlack />,
        status: 'available',
        category: 'Communication',
        features: [
          'Real-time notifications',
          'Channel routing',
          'Thread replies',
          'Custom alerts'
        ],
        useCase: 'Perfect for teams that live in Slack. Get instant notifications when users submit feedback, start live chats, or fill out forms.'
      },
      {
        id: 2,
        name: 'Google Calendar',
        description: 'Automatically sync events and schedules with Google Calendar',
        icon: <SiGooglecalendar />,
        status: 'coming-soon',
        category: 'Productivity & Scheduling',
        features: [
            'Two-way event sync',
            'Automatic reminders',
            'Real-time updates',
            'Multi-calendar support'
        ],
        useCase: 'Sync widget-generated events directly to Google Calendar. Ideal for managing bookings, reminders, meetings, and schedules in one place.'
      },
      //   {
    //     id: 5,
    //     name: 'Webhook',
    //     description: 'Send widget events to any endpoint via webhooks',
    //     icon: '🔗',
    //     status: 'coming-soon',
    //     category: 'Developer Tools',
    //     features: [
    //       'Custom endpoints',
    //       'Event filtering',
    //       'Payload customization',
    //       'Retry logic'
    //     ],
    //     useCase: 'Build custom integrations with your own systems. Receive widget events in real-time to any URL.'
    //   },
    //   {
    //     id: 6,
    //     name: 'Email',
    //     description: 'Get email notifications for widget activities',
    //     icon: '📧',
    //     status: 'coming-soon',
    //     category: 'Communication',
    //     features: [
    //       'Instant alerts',
    //       'Digest mode',
    //       'Custom templates',
    //       'Multiple recipients'
    //     ],
    //     useCase: 'Stay informed via email. Get notified about new feedback, chat requests, or form submissions.'
    //   },
    //   {
    //     id: 2,
    //     name: 'Discord',
    //     description: 'Send widget activity updates to Discord channels',
    //     icon: '🎮',
    //     status: 'coming-soon',
    //     category: 'Communication',
    //     features: [
    //       'Webhook integration',
    //       'Role mentions',
    //       'Embed messages',
    //       'Activity logs'
    //     ],
    //     useCase: 'Ideal for community-driven projects. Keep your Discord community informed about feedback and user interactions.'
    //   },
    //   {
    //     id: 3,
    //     name: 'Zapier',
    //     description: 'Connect your widgets to 5,000+ apps via Zapier',
    //     icon: '⚡',
    //     status: 'coming-soon',
    //     category: 'Automation',
    //     features: [
    //       'Multi-step workflows',
    //       'App connections',
    //       'Conditional logic',
    //       'Data transformation'
    //     ],
    //     useCase: 'Automate everything. Connect widgets to CRMs, email tools, databases, and more without writing code.'
    //   },
    ],
    summary: {
      totalIntegrations: 2,
      availableNow: 1,
      comingSoon: 1,
      categories: 2
    }
  };
};

export default async function IntegrationsPage() {
  const integrationsData = await getIntegrationsData();
  
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <TbPlugConnected size={32} className="text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-white">Integrations</h1>
            <p className="text-gray-400">Manage and configure your integrations</p>
          </div>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-xs mb-1">TOTAL</p>
            <p className="text-2xl font-bold text-white">{integrationsData.summary.totalIntegrations}</p>
            <p className="text-gray-500 text-xs mt-1">Integrations</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-green-900/50">
            <p className="text-green-400 text-xs mb-1">AVAILABLE</p>
            <p className="text-2xl font-bold text-white">{integrationsData.summary.availableNow}</p>
            <p className="text-gray-500 text-xs mt-1">Ready to use</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-blue-900/50">
            <p className="text-blue-600 text-xs mb-1">COMING SOON</p>
            <p className="text-2xl font-bold text-white">{integrationsData.summary.comingSoon}</p>
            <p className="text-gray-500 text-xs mt-1">In development</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-purple-900/50">
            <p className="text-purple-400 text-xs mb-1">CATEGORIES</p>
            <p className="text-2xl font-bold text-white">{integrationsData.summary.categories}</p>
            <p className="text-gray-500 text-xs mt-1">Integration types</p>
          </div>
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-10">
        <div className="text-center">
          <img 
            src="/images/integrations/slack/image.png" 
            alt="WidgetKraft Integrations Dashboard" 
            className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" 
          />
          <p className="text-gray-300 text-sm">Integrations dashboard showing available connections</p>
        </div>
      </div>

      {/* Available Integrations */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Available Integrations</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {integrationsData.availableIntegrations.map((integration) => (
            <div 
              key={integration.id}
              className={`bg-gray-800 border rounded-lg p-6 transition-all hover:border-purple-500 ${
                integration.status === 'available' 
                  ? 'border-green-700' 
                  : 'border-gray-700'
              }`}
            >
              {/* Integration Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{integration.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{integration.name}</h3>
                    <p className="text-sm text-gray-400">{integration.category}</p>
                  </div>
                </div>
                {integration.status === 'available' ? (
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-medium rounded-full border border-green-700">
                    Available
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-600 text-xs font-medium rounded-full border border-blue-700">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{integration.description}</p>

              {/* Features */}
              <div className="mb-4">
                <p className="text-white font-medium text-sm mb-2">Features:</p>
                <ul className="space-y-1">
                  {integration.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                      <CheckCircle size={14} className="text-purple-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Case */}
              <div className="bg-gray-900 p-3 rounded-lg mb-4 border border-gray-700">
                <p className="text-gray-300 text-xs italic">
                  <strong className="text-white">Use Case:</strong> {integration.useCase}
                </p>
              </div>

              {/* Action Button */}
              {integration.status === 'available' ? (
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                  <Zap size={16} />
                  Connect {integration.name}
                </button>
              ) : (
                <button className="w-full bg-gray-700 text-gray-400 font-medium py-2 px-4 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                  <Bell size={16} />
                  Notify Me When Available
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Explanation Section */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">About Integrations</h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            <strong>Purpose:</strong> Connect your WidgetKraft widgets with your favorite tools and platforms to automate workflows and streamline your operations.
          </p>
          
          <div>
            <p className="font-medium text-white mb-2">What you can do here:</p>
            <ul className="space-y-2 ml-5 list-disc">
              <li><strong>Connect Apps:</strong> Link your widgets to communication tools like Slack</li>
              <li><strong>Sync Schedules:</strong> Automatically sync widget events to Google Calendar</li>
              <li><strong>Stay Informed:</strong> Get real-time alerts when users interact with your widgets</li>
              <li><strong>Automate Workflows:</strong> Set up automatic notifications and event tracking</li>
              <li><strong>Team Collaboration:</strong> Keep your team in sync with centralized notifications</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium text-white mb-2">Integration Categories:</p>
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <div className="bg-gray-900 p-3 rounded-lg border border-gray-700">
                <p className="font-medium text-white text-sm mb-1">💬 Communication</p>
                <p className="text-gray-400 text-xs">Slack - Stay connected with your team through real-time notifications</p>
              </div>
              <div className="bg-gray-900 p-3 rounded-lg border border-gray-700">
                <p className="font-medium text-white text-sm mb-1">📅 Productivity & Scheduling</p>
                <p className="text-gray-400 text-xs">Google Calendar - Manage events and schedules seamlessly</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-4 rounded-lg border border-purple-700/50">
            <p className="font-medium text-white mb-2 flex items-center gap-2">
              <Zap size={20} className="text-purple-400" />
              How Integrations Work:
            </p>
            <ol className="space-y-2 ml-5 list-decimal text-sm">
              <li>Choose an integration from the available options</li>
              <li>Click "Connect" and authenticate with the platform</li>
              <li>Configure what events trigger notifications or actions</li>
              <li>Test the integration to ensure it's working correctly</li>
              <li>Your widgets will now automatically sync with the connected service</li>
            </ol>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="font-medium text-white mb-2">💡 Example Use Cases:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Slack Integration:</strong> Get instant Slack messages when someone starts a live chat or submits feedback. Perfect for support teams that need immediate notifications.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Google Calendar Sync:</strong> Automatically create calendar events when users book appointments through your widgets. Keep your schedule organized without manual entry.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Team Coordination:</strong> Route different widget interactions to specific Slack channels. For example, send bug reports to #engineering and feature requests to #product.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Meeting Reminders:</strong> Sync Google Calendar with your booking widgets to send automatic reminders to both you and your clients before scheduled meetings.</span>
              </li>
            </ul>
          </div>
          
          <p className="text-gray-400 text-sm italic">
            More integrations are being added regularly. If you need a specific integration, please reach out to our support team or submit a feature request through the button below.
          </p>
        </div>
      </div>

      {/* Request Integration Section */}
      <div className="mt-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-700">
        <h3 className="text-xl font-bold text-white mb-2">Need a Specific Integration?</h3>
        <p className="text-gray-300 text-sm mb-4">
          Don't see the integration you need? Let us know and we'll consider adding it to our roadmap. We're always looking to expand our integration ecosystem.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition flex items-center gap-2">
          <MessageSquare size={18} />
          Use Feedback Widget to Request
        </button>
      </div>
    </div>
  );
}