"use client"; // Ensure this is a client component

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // Social media icons
import Image from "next/image";

// Team member data
const teamMembers = [
  {
    name: "Serhat Onay",
    title: "CEO",
    description: "Marketing and growth specialist, international business advisor.",
    linkedin: "https://www.linkedin.com/in/serhatonay-kadeshchain/",
    twitter: "#",
    image: "/members/first.png", // Use relative paths from /public
  },
  {
    name: "Vytautas Kaseta",
    title: "CIO",
    description: "Web3 & Metaverse builder, Blockchain architect, Cryptoeconomy guru, DeFi analyst.",
    linkedin: "https://www.linkedin.com/in/ministras/",
    twitter: "#",
    image: "/members/second.png",
  },
  {
    name: "Emrah Kozan",
    title: "COO",
    description: "Educator, professional speaker, Digital transformation specialist.",
    linkedin: "https://www.linkedin.com/in/emrahkozan/",
    twitter: "#",
    image: "/members/third.png",
  },
  {
    name: "Linas Butenas",
    title: "CSO",
    description: "Blockchain architect, Scientist, AI and Data mining expert.",
    linkedin: "https://www.linkedin.com/in/linas-butenas/",
    twitter: "#",
    image: "/members/fourth.png",
  },
  {
    name: "Volkan Celiktepe",
    title: "CGO",
    description: "Localization expert, international relations and business specialist.",
    linkedin: "https://www.linkedin.com/in/volkan-celiktepe/",
    twitter: "#",
    image: "/members/five.png",
  },
  {
    name: "Ali Okcu",
    title: "CLO",
    description: "Lawyer, mathematician, educator, consulting on blockchain law.",
    linkedin: "#",
    twitter: "#",
    image: "/members/six.png",
  },
];

export const Team = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="relative bg-black py-16 sm:py-24 overflow-hidden transition-all duration-300 ease-in-out">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-gray-900 opacity-30 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-black opacity-20 blur-3xl bottom-10 right-10"></div>
      </div>

      {/* Title Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center text-white"
      >
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight">Meet The Team</h2>
        <p className="mt-4 text-lg text-white/70">
          Our team is composed of highly skilled professionals with diverse backgrounds and expertise.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-black p-6 rounded-xl border border-slate-700 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 relative"
          >
            <div className="flex flex-col items-center text-center">
              {isClient && (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover border-4 border-gradient-to-r from-blue-600 to-green-500 mb-6 transition-all duration-300 ease-in-out"
                />
              )}
              <h3 className="text-2xl font-semibold text-blue-600">{member.name}</h3>
              <p className="text-gray-300">{member.title}</p>
              <p className="mt-3 text-white/70">{member.description}</p>
              <div className="flex mt-5 space-x-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
                >
                  <FaLinkedin className="w-7 h-7 text-blue-500 hover:text-blue-600" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
                >
                  <FaTwitter className="w-7 h-7 text-blue-500 hover:text-blue-600" />
                </a>
              </div>

              {/* Connecting line between cards
              {index < teamMembers.length - 1 && (
                <div className="absolute top-0 left-[100%] h-full w-[2px] bg-blue-500 transform translate-x-[10px]"></div>
              )} */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
