"use client";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

// Dummy Data for Roadmap Phases
const roadmapData = [
  {
    title: "Phase 1",
    description: "Initial Planning & Research",
    date: "Q2 2024",
  },
  { title: "Phase 2", description: "Design & Development", date: "Q2 2025" },
  { title: "Phase 3", description: "Testing & Optimization", date: "Q3 2025" },
  { title: "Phase 4", description: "Launch & Feedback", date: "Q4 2025" },
  { title: "Phase 5", description: "Growth & Expansion", date: "Q1 2026" },
  { title: "Phase 6", description: "Post-Launch Support", date: "Q2 2026" },
];

export const Roadmap = () => {
  const [hovered, setHovered] = useState(null);

  // Spring animation for each roadmap step
  const animation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    reset: true,
    reverse: hovered === null,
  });

  return (
    <div className="bg-black text-white py-24 sm:py-32 bg-gradient-to-b from-black to-[#315BA7]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">
          Our Roadmap
        </h2>
        <p className="text-lg sm:text-xl text-white/70 mb-12">
          We work around the clock for our project, our investors, and our
          users.
        </p>

        <div className="relative overflow-hidden">
          {/* Infinite Horizontal Scroll Container */}
          <div className="flex space-x-24 animate-scroll">
            {/* Map through roadmap data and render phases */}
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Circle for Phase */}
                <animated.div
                  style={animation}
                  className="w-16 h-16 bg-[#315BA7] text-white rounded-full flex justify-center items-center border-4 cursor-pointer z-10"
                >
                  <span className="font-bold text-lg">{index + 1}</span>
                </animated.div>

                {/* Phase Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg mb-4">{item.description}</p>
                  <p className="text-sm text-gray-300">{item.date}</p>
                </div>

                {/* Connecting Line for All Phases (except last one) */}
                {index < roadmapData.length - 1 && (
                  <div className="absolute top-1/2 left-full w-16 h-[2px] bg-white/20"></div>
                )}
              </div>
            ))}

            {/* Clone the items for continuous loop */}
            {roadmapData.map((item, index) => (
              <div
                key={`clone-${index}`}
                className="relative flex-shrink-0"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Circle for Phase */}
                <animated.div
                  style={animation}
                  className="w-16 h-16 bg-[#315BA7] text-white rounded-full flex justify-center items-center border-4 cursor-pointer z-10"
                >
                  <span className="font-bold text-lg">{index + 1}</span>
                </animated.div>

                {/* Phase Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg mb-4">{item.description}</p>
                  <p className="text-sm text-gray-300">{item.date}</p>
                </div>

                {/* Connecting Line for Cloned Phases */}
                {index < roadmapData.length - 1 && (
                  <div className="absolute top-1/2 left-full w-16 h-[2px] bg-white/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for infinite scrolling effect */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 9s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-25%);
          }
          50% {
            transform: translateX(-50%);
          }
          75% {
            transform: translateX(-75%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        /* Adjusting text size for larger description */
        .description {
          font-size: 18px; /* You can adjust the size here */
          line-height: 1.5; /* Adjust line height for readability */
        }

        /* Ensure the clone phases are seamlessly connected */
        .animate-scroll {
          display: flex;
          flex-direction: row;
        }

        .animate-scroll > div {
          margin-right: 50px;
        }
      `}</style>
    </div>
  );
};
