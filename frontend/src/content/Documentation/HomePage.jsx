import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '../../context/NavigationContext';
import { BookOpen, Layers, Package, Lightbulb } from 'lucide-react';

const HomePage = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  
  const cards = [
    { id: 'introduction', title: 'Introduction & Overview', desc: 'Quick intro about WidgetKraft and platform features', icon: BookOpen },
    { id: 'platform-concepts', title: 'Platform Concepts', desc: 'Understanding widgets, instances, credits, and dashboard', icon: Layers },
    { id: 'available-widgets', title: 'Available Widgets', desc: 'Explore all available widget types and their features', icon: Package },
    { id: 'best-practices', title: 'Best Practices', desc: 'Tips and strategies for optimal widget usage', icon: Lightbulb }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 ${titleColor}`}>
          WidgetKraft Documentation
        </h1>
        <p className={`text-lg ${textColor}`}>
          Learn how to capture conversations, leads, and visitor insights with WidgetKraft — 
          <span className="font-semibold"> qualify leads, boost engagement, automate responses</span>, and 
          <span className="font-semibold"> streamline your customer interactions</span>.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(card => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => navigate(card.id)}
              className={`${cardBg} p-6 rounded-lg transition-all hover:shadow-lg text-left`}
            >
              <div className={`${theme === 'dark' ? 'bg-orange-600' : 'bg-orange-500'} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>{card.title}</h3>
              <p className={textColor}>{card.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;