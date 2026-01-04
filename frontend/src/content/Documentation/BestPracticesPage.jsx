import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';

const BestPracticesPage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  
  const practices = [
    {
      title: 'Start Small',
      desc: 'Begin with one widget, not all at once. Test and understand its impact before adding more.'
    },
    {
      title: 'Strategic Placement',
      desc: 'Place widgets where intent is highest — pricing pages, blog posts, contact pages.'
    },
    {
      title: 'Monitor Usage',
      desc: 'Keep an eye on credit usage before upgrading. Understand your patterns first.'
    },
    {
      title: 'Smart AI Usage',
      desc: 'Use AI chatbots only where automation adds real value, not everywhere.'
    },
    {
      title: 'Test Before Scaling',
      desc: 'Run experiments with different widget types to find what works for your audience.'
    },
    {
      title: 'Optimize Responses',
      desc: 'Review conversations regularly and improve your widget configurations based on feedback.'
    }
  ];
  
  return (
    <div className="max-w-4xl">
      <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>Best Practices</h1>
      <p className={`text-lg ${textColor} mb-8`}>
        Tips and strategies to get the most out of WidgetKraft.
      </p>
      
      <div className="space-y-4 mb-8">
        {practices.map((practice, idx) => (
          <div key={idx} className={`${cardBg} p-6 rounded-lg`}>
            <h2 className={`text-xl font-semibold mb-2 ${titleColor}`}>{practice.title}</h2>
            <p className={textColor}>{practice.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={() => navigate('plans-usage')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded-lg transition-colors`}
        >
          ← Previous
        </button>
        <button
          onClick={() => navigate('security')}
          className={`px-6 py-3 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors`}
        >
          Next: Security & Privacy →
        </button>
      </div>
    </div>
  );
};

export default BestPracticesPage;