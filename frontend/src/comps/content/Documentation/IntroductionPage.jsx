import Link from 'next/link';

// This runs on the server
const getPageData = async () => {
  // You can replace this with actual API/database call
  const data = {
    title: 'Introduction',
    description: 'WidgetKraft is a unified widget platform that helps businesses capture conversations, leads, and visitor insights directly from their website—without juggling multiple tools.',
  };

  return data;
};

export default async function IntroductionPage() {
  const data = await getPageData();
  
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">{data.title}</h1>
      <p className="text-lg text-gray-300 mb-8">{data.description}</p>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Why WidgetKraft?</h2>
        <p className="text-gray-300 mb-4">
          Instead of managing separate tools for live chat, forms, comments, visitor tracking, and chatbots, 
          WidgetKraft provides a single, lightweight widget layer that works across use cases while keeping 
          setup and management simple.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Built For</h2>
      <ul className="text-gray-300 space-y-2 mb-8">
        <li>• Startups and SMBs looking to capture leads efficiently</li>
        <li>• Agencies managing multiple client sites</li>
        <li>• Content-driven websites that need engagement tools</li>
        <li>• SaaS and service businesses that care about lead capture and response speed</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Getting Started</h2>
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3 text-white">Basic Setup Flow</h3>
        <ol className="text-gray-300 space-y-2">
          <li>1. Create a WidgetKraft account</li>
          <li>2. Create your first widget</li>
          <li>3. Copy the embed script</li>
          <li>4. Paste it into your website</li>
          <li>5. Start receiving interactions</li>
        </ol>
        <p className="text-gray-300 mt-4 italic">
          No complex configuration or backend changes required.
        </p>
      </div>
      
      <div className="flex gap-4">
        <Link
          href="/platform-concepts"
          className="px-6 py-3 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          Next: Platform Concepts →
        </Link>
      </div>
    </div>
  );
}