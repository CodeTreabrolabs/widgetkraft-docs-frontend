import Link from 'next/link';

// This runs on the server
const getCommitmentsData = async () => {
  const commitments = [
    {
      title: 'Your Data Belongs to You',
      description:
        'All data collected through your widgets is entirely yours. We never claim ownership of customer data.',
    },
    {
      title: 'No Data Selling or Reuse',
      description:
        'We do not sell, share, or reuse customer data for any purpose outside of providing our service to you.',
    },
    {
      title: 'Isolated Accounts',
      description:
        "All interactions are isolated per account. Your customers' data never mixes with other accounts.",
    },
    {
      title: 'Secure Storage',
      description:
        'Industry-standard encryption and access controls protect your data at rest and in transit.',
    },
  ];

  return commitments;
};

export default async function SecurityPage() {
  const commitments = await getCommitmentsData();
  
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Security & Data Privacy</h1>
      <p className="text-lg text-gray-300 mb-8">
        WidgetKraft respects your data and takes security seriously.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Commitments</h2>
        <div className="space-y-4">
          {commitments.map((commitment, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-white mb-2">{commitment.title}</h3>
              <p className="text-gray-300">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-white">Learn More</h2>
        <p className="text-gray-300">
          For detailed information about how we handle data, please review our Privacy Policy and Terms of Service.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/best-practices"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}