import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';

const SecurityPage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  
  return (
    <div className="max-w-4xl">
      <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>Security & Data Privacy</h1>
      <p className={`text-lg ${textColor} mb-8`}>
        WidgetKraft respects your data and takes security seriously.
      </p>
      
      <div className={`${cardBg} p-6 rounded-lg mb-6`}>
        <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>Our Commitments</h2>
        <div className="space-y-4">
          <div>
            <h3 className={`font-semibold ${titleColor} mb-2`}>Your Data Belongs to You</h3>
            <p className={textColor}>
              All data collected through your widgets is entirely yours. We never claim ownership of customer data.
            </p>
          </div>
          
          <div>
            <h3 className={`font-semibold ${titleColor} mb-2`}>No Data Selling or Reuse</h3>
            <p className={textColor}>
              We do not sell, share, or reuse customer data for any purpose outside of providing our service to you.
            </p>
          </div>
          
          <div>
            <h3 className={`font-semibold ${titleColor} mb-2`}>Isolated Accounts</h3>
            <p className={textColor}>
              All interactions are isolated per account. Your customers' data never mixes with other accounts.
            </p>
          </div>
          
          <div>
            <h3 className={`font-semibold ${titleColor} mb-2`}>Secure Storage</h3>
            <p className={textColor}>
              Industry-standard encryption and access controls protect your data at rest and in transit.
            </p>
          </div>
        </div>
      </div>
      
      <div className={`${cardBg} p-6 rounded-lg mb-8`}>
        <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>Learn More</h2>
        <p className={textColor}>
          For detailed information about how we handle data, please review our Privacy Policy and Terms of Service.
        </p>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={() => navigate('best-practices')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded-lg transition-colors`}
        >
          ← Previous
        </button>
        <button
          onClick={() => navigate('home')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors`}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SecurityPage;