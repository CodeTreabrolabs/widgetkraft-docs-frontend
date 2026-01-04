import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';

const WidgetTypesPage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  
  const widgets = [
    {
      name: 'Live Conversation Widget',
      desc: 'Allows real-time chat between visitors and your team.',
      useCases: ['Sales inquiries', 'Support questions', 'Pre-purchase clarifications'],
      features: ['Real-time chat', 'Email capture (paid plans)', 'Conversation history', 'Team responses from dashboard']
    },
    {
      name: 'AI Chatbot Widget',
      desc: 'Automates responses to common questions using AI.',
      useCases: ['FAQs', 'Basic lead qualification', 'After-hours support'],
      features: ['Custom instructions', 'Controlled AI usage via credits', 'Human takeover when needed']
    },
    {
      name: 'Contact Form Widget',
      desc: 'Collect structured leads directly from your site.',
      useCases: ['Contact requests', 'Demo inquiries', 'Service quotations'],
      features: ['Custom fields', 'CSV export (paid plans)', 'Email notifications (paid plans)']
    },
    {
      name: 'Comment Box Widget',
      desc: 'Embed comments directly into blog posts or content pages.',
      useCases: ['Blog engagement', 'Community discussions', 'Feedback collection'],
      features: ['Moderation controls', 'Spam reduction', 'Centralized comment management']
    },
    {
      name: 'Visitor Tracker Widget',
      desc: 'Track website visitors without complex analytics dashboards.',
      useCases: ['Traffic awareness', 'Basic visitor insights', 'Activity monitoring'],
      features: ['Lightweight tracking', 'No setup complexity', 'Credit-efficient events']
    },
    {
      name: 'AI Meet Scheduler (Paid)',
      desc: 'Allows visitors to book meetings directly from your website.',
      useCases: ['Sales calls', 'Consultations', 'Support scheduling'],
      features: ['Calendar integration', 'AI-assisted scheduling', 'High-intent lead capture']
    }
  ];
  
  return (
    <div className="max-w-4xl">
      <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>Available Widget Types</h1>
      <p className={`text-lg ${textColor} mb-8`}>
        Explore all available widget types and choose the right ones for your needs.
      </p>
      
      <div className="space-y-6">
        {widgets.map((widget, idx) => (
          <div key={idx} className={`${cardBg} p-6 rounded-lg`}>
            <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>{widget.name}</h2>
            <p className={`${textColor} mb-4`}>{widget.desc}</p>
            
            <div className="mb-4">
              <h3 className={`font-semibold ${titleColor} mb-2`}>Use Cases:</h3>
              <ul className={`${textColor} space-y-1`}>
                {widget.useCases.map((useCase, i) => (
                  <li key={i}>• {useCase}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className={`font-semibold ${titleColor} mb-2`}>Key Features:</h3>
              <ul className={`${textColor} space-y-1`}>
                {widget.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate('platform-concepts')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded-lg transition-colors`}
        >
          ← Previous
        </button>
        <button
          onClick={() => navigate('plans-usage')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors`}
        >
          Next: Plans & Usage →
        </button>
      </div>
    </div>
  );
};

export default WidgetTypesPage;