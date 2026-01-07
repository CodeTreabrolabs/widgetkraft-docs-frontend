import Link from 'next/link';

// This runs on the server
const getPracticesData = async () => {
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

  return practices;
};

export default async function BestPracticesPage() {
  const practices = await getPracticesData();
  
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Best Practices</h1>
      <p className="text-lg text-gray-300 mb-8">
        Tips and strategies to get the most out of WidgetKraft.
      </p>
      
      <div className="space-y-4 mb-8">
        {practices.map((practice, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">{practice.title}</h2>
            <p className="text-gray-300">{practice.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Link
          href="/plans-usage"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/security-privacy"
          className="px-6 py-3 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          Next: Security & Privacy →
        </Link>
      </div>
    </div>
  );
}