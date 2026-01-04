import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';

const PlatformConceptsPage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  
  return (
    <div className="max-w-4xl">
      <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>Platform Concepts</h1>
      <p className={`text-lg ${textColor} mb-8`}>
        Understanding these core concepts will help you use WidgetKraft efficiently.
      </p>
      
      <div className={`${cardBg} p-6 rounded-lg mb-6 border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'}`}>
        <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Widgets</h2>
        <p className={`${textColor} mb-4`}>
          Widgets are embeddable components you place on your website. Each widget solves a specific interaction use case.
        </p>
        <h3 className={`font-semibold ${titleColor} mb-2`}>Available Widget Types:</h3>
        <ul className={`${textColor} space-y-1`}>
          <li>• Live Conversation</li>
          <li>• AI Chatbot</li>
          <li>• Contact Form</li>
          <li>• Comment Box</li>
          <li>• Visitor Tracker</li>
          <li>• AI Meet Scheduler (paid plans)</li>
        </ul>
      </div>
      
      <div className={`${cardBg} p-6 rounded-lg mb-6 border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'}`}>
        <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Widget Instances</h2>
        <p className={`${textColor} mb-4`}>
          A widget instance is a deployed version of a widget on your website.
        </p>
        <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} p-4 rounded border ${borderColor}`}>
          <p className={`${textColor} text-sm mb-2`}>Example:</p>
          <ul className={`${textColor} text-sm space-y-1`}>
            <li>• 1 Live Chat on Homepage</li>
            <li>• 1 Contact Form on Contact Page</li>
          </ul>
        </div>
        <p className={`${textColor} mt-3 text-sm`}>
          Plans control how many widget instances of each type you can deploy.
        </p>
      </div>
      
      <div className={`${cardBg} p-6 rounded-lg mb-6 border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'}`}>
        <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Credits</h2>
        <p className={`${textColor} mb-4`}>
          WidgetKraft uses a credit-based usage system to keep pricing fair and predictable.
        </p>
        <h3 className={`font-semibold ${titleColor} mb-2`}>Credits are consumed when:</h3>
        <ul className={`${textColor} space-y-1 mb-3`}>
          <li>• A chat message is sent</li>
          <li>• A form submission occurs</li>
          <li>• A meeting is booked</li>
          <li>• A visitor event is tracked</li>
        </ul>
        <p className={`${textColor} text-sm italic`}>
          Credits reset every billing cycle based on your plan.
        </p>
      </div>
      
      <div className={`${cardBg} p-6 rounded-lg mb-8 border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'}`}>
        <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Dashboard</h2>
        <p className={`${textColor} mb-3`}>
          The dashboard is your control center where you can:
        </p>
        <ul className={`${textColor} space-y-1`}>
          <li>• View all widget activity</li>
          <li>• Respond to conversations</li>
          <li>• Export leads and submissions</li>
          <li>• Track credit usage</li>
          <li>• Manage plans and billing</li>
        </ul>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={() => navigate('introduction')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded-lg transition-colors`}
        >
          ← Previous
        </button>
        <button
          onClick={() => navigate('widget-types')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors`}
        >
          Next: Widget Types →
        </button>
      </div>
    </div>
  );
};

export default PlatformConceptsPage;