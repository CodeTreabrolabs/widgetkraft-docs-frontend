import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';

const PlansUsagePage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  
  return (
    <div className="max-w-4xl">
      <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>Plans & Usage</h1>
      <p className={`text-lg ${textColor} mb-8`}>
        Choose the plan that fits your needs and scale as you grow.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className={`${cardBg} p-6 rounded-lg border-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Free Plan</h2>
          <ul className={`${textColor} space-y-2 mb-4`}>
            <li>• Limited widgets</li>
            <li>• Limited monthly credits</li>
            <li>• Ideal for testing and low-traffic sites</li>
            <li>• Basic features</li>
          </ul>
          <p className={`${textColor} text-sm italic`}>
            Perfect for getting started and exploring the platform.
          </p>
        </div>
        
        <div className={`${cardBg} p-6 rounded-lg border-2 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'}`}>
          <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Paid Plans</h2>
          <ul className={`${textColor} space-y-2 mb-4`}>
            <li>• Higher widget limits</li>
            <li>• More credits</li>
            <li>• Advanced features like exports and notifications</li>
            <li>• AI Meet Scheduler access</li>
          </ul>
          <p className={`${textColor} text-sm italic`}>
            Credits reset monthly and do not roll over unless specified.
          </p>
        </div>
      </div>
      
      <div className={`${cardBg} p-6 rounded-lg mb-8`}>
        <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>Understanding Credits</h2>
        <p className={`${textColor} mb-4`}>
          Credits ensure you only pay for what you use. Each interaction consumes credits based on the action type:
        </p>
        <ul className={`${textColor} space-y-2`}>
          <li>• <span className="font-semibold">Chat messages:</span> 1 credit per message</li>
          <li>• <span className="font-semibold">Form submissions:</span> Credits based on complexity</li>
          <li>• <span className="font-semibold">Meeting bookings:</span> Higher credit consumption</li>
          <li>• <span className="font-semibold">Visitor events:</span> Minimal credit usage</li>
        </ul>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={() => navigate('widget-types')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded-lg transition-colors`}
        >
          ← Previous
        </button>
        <button
          onClick={() => navigate('best-practices')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors`}
        >
          Next: Best Practices →
        </button>
      </div>
    </div>
  );
};

export default PlansUsagePage;