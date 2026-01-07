import Link from 'next/link';

// This runs on the server
const getPlansData = async () => {
  const plans = {
    free: {
      title: 'Free Plan',
      features: [
        'Limited widgets',
        'Limited monthly credits',
        'Ideal for testing and low-traffic sites',
        'Basic features',
      ],
      note: 'Perfect for getting started and exploring the platform.',
    },
    paid: {
      title: 'Paid Plans',
      features: [
        'Higher widget limits',
        'More credits',
        'Advanced features like exports and notifications',
        'AI Meet Scheduler access',
      ],
      note: 'Credits reset monthly and do not roll over unless specified.',
    },
    credits: [
      { type: 'Chat messages', usage: '1 credit per message' },
      { type: 'Form submissions', usage: 'Credits based on complexity' },
      { type: 'Meeting bookings', usage: 'Higher credit consumption' },
      { type: 'Visitor events', usage: 'Minimal credit usage' },
    ],
  };

  return plans;
};

export default async function PlansUsagePage() {
  const plans = await getPlansData();
  
  // Convert plans object to array for the grid
  const planEntries = [
    { key: 'free', plan: plans.free },
    { key: 'paid', plan: plans.paid }
  ];
  
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Plans & Usage</h1>
      <p className="text-lg text-gray-300 mb-8">
        Choose the plan that fits your needs and scale as you grow.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {planEntries.map(({ key, plan }) => (
          <div
            key={key}
            className={`bg-gray-800 p-6 rounded-lg border-2 ${
              key === 'paid' ? 'border-orange-600' : 'border-gray-700'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-3 text-white">{plan.title}</h2>
            <ul className="text-gray-300 space-y-2 mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <p className="text-gray-300 text-sm italic">{plan.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Understanding Credits</h2>
        <p className="text-gray-300 mb-4">
          Credits ensure you only pay for what you use. Each interaction consumes credits based on the action type:
        </p>
        <ul className="text-gray-300 space-y-2">
          {plans.credits.map((credit, idx) => (
            <li key={idx}>
              • <span className="font-semibold">{credit.type}:</span> {credit.usage}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <Link
          href="/available-widgets"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/best-practices"
          className="px-6 py-3 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          Next: Best Practices →
        </Link>
      </div>
    </div>
  );
}