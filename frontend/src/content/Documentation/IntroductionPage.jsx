import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';

const IntroductionPage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  
  return (
    <div className="max-w-4xl">
      <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>Introduction</h1>
      <p className={`text-lg ${textColor} mb-8`}>
        WidgetKraft is a unified widget platform that helps businesses capture conversations, leads, and visitor insights 
        directly from their website—without juggling multiple tools.
      </p>
      
      <div className={`${cardBg} p-6 rounded-lg mb-8`}>
        <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>Why WidgetKraft?</h2>
        <p className={`${textColor} mb-4`}>
          Instead of managing separate tools for live chat, forms, comments, visitor tracking, and chatbots, 
          WidgetKraft provides a single, lightweight widget layer that works across use cases while keeping 
          setup and management simple.
        </p>
      </div>
      
      <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>Built For</h2>
      <ul className={`${textColor} space-y-2 mb-8`}>
        <li>• Startups and SMBs looking to capture leads efficiently</li>
        <li>• Agencies managing multiple client sites</li>
        <li>• Content-driven websites that need engagement tools</li>
        <li>• SaaS and service businesses that care about lead capture and response speed</li>
      </ul>
      
      <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>Getting Started</h2>
      <div className={`${cardBg} p-6 rounded-lg mb-8`}>
        <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>Basic Setup Flow</h3>
        <ol className={`${textColor} space-y-2`}>
          <li>1. Create a WidgetKraft account</li>
          <li>2. Create your first widget</li>
          <li>3. Copy the embed script</li>
          <li>4. Paste it into your website</li>
          <li>5. Start receiving interactions</li>
        </ol>
        <p className={`${textColor} mt-4 italic`}>
          No complex configuration or backend changes required.
        </p>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={() => navigate('platform-concepts')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors`}
        >
          Next: Platform Concepts →
        </button>
      </div>
    </div>
  );
};

export default IntroductionPage;