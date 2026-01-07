import { BookOpen, Layers, Package, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export async function getServerSideProps() {
  const cards = [
    { id: 'introduction', title: 'Introduction & Overview', desc: 'Quick intro about WidgetKraft and platform features', icon: 'BookOpen' },
    { id: 'platform-concepts', title: 'Platform Concepts', desc: 'Understanding widgets, instances, credits, and dashboard', icon: 'Layers' },
    { id: 'available-widgets', title: 'Available Widgets', desc: 'Explore all available widget types and their features', icon: 'Package' },
    { id: 'best-practices', title: 'Best Practices', desc: 'Tips and strategies for optimal widget usage', icon: 'Lightbulb' }
  ];

  return {
    props: {
      cards,
    },
  };
}

const HomePage = ({ cards = [] }) => {  // Add default value for cards
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'BookOpen': return BookOpen;
      case 'Layers': return Layers;
      case 'Package': return Package;
      case 'Lightbulb': return Lightbulb;
      default: return BookOpen;
    }
  };
  
  // Optional: Add a safety check before rendering
  if (!cards || cards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            WidgetKraft Documentation
          </h1>
          <p className="text-lg text-gray-300">Loading documentation...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          WidgetKraft Documentation
        </h1>
        <p className="text-lg text-gray-300">
          Learn how to capture conversations, leads, and visitor insights with WidgetKraft — 
          <span className="font-semibold"> qualify leads, boost engagement, automate responses</span>, and 
          <span className="font-semibold"> streamline your customer interactions</span>.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(card => {
          const Icon = getIcon(card.icon);
          return (
            <Link
              key={card.id}
              href={`/${card.id}`}
              className="bg-gray-800 p-6 rounded-lg transition-all hover:shadow-lg text-left hover:bg-gray-700 block"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;