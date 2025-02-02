"use client"; // Mark as a client component to allow useState and client-side behavior

import { FaCalendar, FaCheckCircle } from "react-icons/fa";

// Define the structure of roadmap data for TypeScript
interface RoadmapItem {
  quarter: string;
  items: string[];
}

const roadmapData: RoadmapItem[] = [
  {
    quarter: "Q3 2024",
    items: [
      'Blueprint preparation',
      'Organizing the team',
      'Planing of token allocation',
      'Planning of tokenmetrics',
      'Marketing strategy development'
    ],
  },
  {
    quarter: "Q4 2024",
    items: [
      'Building the website',
      'Opening social media accounts',
      'Marketing and advertising',
      'Partnership Agreements',
      'Press release'
    ],
  },
  {
    quarter: "Q1 2025",
    items: [
      'Kadesh Development Start',
      'Kadesh Chain Testnet',
      'Kadesh Chain Devnet',
      'Kadesh Chain Explorer',
      'Kadesh Wallet Beta'
    ],
  },
  {
    quarter: "Q2 2025",
    items: [
      'Auditing & Marketing',
      'Presale',
      'DEX listing',
      'CMC & Coingecko listing'
    ],
  },
  {
    quarter: "Q3 2025",
    items: [
      'IEO & CEX Listings',
      'Marketing Agreements',
      'Kadesh App Beta Version',
      'Press Release',
      'Kadesh Chan Manate'
    ],
  },
  {
    quarter: "Q4 2025",
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
    <section id="roadmap">
    <div className="min-h-screen bg-black via-slate-900 to-black text-white py-[72px] sm:py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Our Roadmap
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Discover the milestones we aim to achieve in the upcoming quarters as we build our ecosystem.
          </p>
        </div>

        {/* Horizontal Scrollable Roadmap */}
        <div className="mt-16 flex gap-8 overflow-x-auto py-4 scroll-smooth relative scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-700">
          {roadmapData.map((phase, index) => (
            <div
              key={phase.quarter}
              className="bg-black p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 w-[300px] flex-shrink-0 relative"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center">
                  <FaCalendar className=" text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold ">{phase.quarter}</h3>
              </div>

              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 mt-1 text-blue-600" />
                    <p className="">{item}</p>
                  </div>
                ))}
              </div>

              {/* Connecting line between cards horizontally */}
              {index < roadmapData.length - 1 && (
                <div className="absolute top-[50%] left-full w-full h-[2px] bg-blue-600 transform translate-x-[0px]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};
