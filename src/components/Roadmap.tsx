import { FaCalendar, FaCheckCircle } from "react-icons/fa";

const roadmapData = [
  {
    quarter: "Q3 2023",
    items: [
      'Blueprint preparation',
    'Organizing the team',
    'Planing of token allocation',
    'Planning of tokenmetrics',
    'Marketing strategy development'
    ],
  },
  {
    quarter: "Q4 2023",
    items: [
    'Building the website',
    'Opening social media accounts',
    'Marketing and advertising',
    'Partnership Agreements',
    'Press release'
    ],
  },
  {
    quarter: "Q1 2024",
    items: [
    'Kadesh Development Start',
    'Kadesh Chain Testnet',
    'Kadesh Chain Devnet',
    'Kadesh Chain Explorer',
    'Kadesh Wallet Beta'
    ],
  },
  {
    quarter: "Q2 2024",
    items: [
      'Auditing & Marketing',
      'Presale',
      'DEX listing',
      'CMC & Coingecko listing'
    ],
  },
  {
    quarter: "Q3 2024",
    items: [
    'IEO & CEX Listings',
    'Marketing Agreements',
    'Kadesh App Beta Version',
    'Press Release',
    'Kadesh Chan Manate'
    ],
  },
  {
    quarter: "Q4 2024",
    items: [
     'CEX Listings',
    'Marketing campaign',
    'Kadesh App V2',
    'Kadesh Chan Manate',
    'Kadesh BioSmart API Release',
    'Kadesh Will Release'
    ],
  },
];

export const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-[72px] sm:py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Our Roadmap
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Discover the milestones we aim to achieve in the upcoming quarters as we build our ecosystem.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.map((phase, index) => (
            <div
              key={phase.quarter}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <FaCalendar className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">{phase.quarter}</h3>
              </div>

              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 mt-1 text-blue-400" />
                    <p className="text-blue-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
