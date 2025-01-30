"use client"; // Place this at the top of the file

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // For social media icons
import Image from "next/image";
import first from "../assets/members/first.png";
import second from "../assets/members/second.png";
import third from "../assets/members/third.png";
import fourth from "../assets/members/fourth.png";
import five from "../assets/members/five.png";
import six from "../assets/members/six.png";

// Team member data (dummy data)
const teamMembers = [
  {
    name: "Serhat Onay",
    title: "CEO",
    description: "Marketing and growth specialist, international business advisor.",
    linkedin: "#",
    twitter: "#",
    image: first, // Corrected here
  },
  {
    name: "Vytautas Kaseta",
    title: "CIO",
    description: "Web3 & Metaverse builder, Blockchain architect, Cryptoeconomy guru, DeFi analyst.",
    linkedin: "#",
    twitter: "#",
    image: second, // Corrected here
  },
  {
    name: "Emrah Kozan",
    title: "COO",
    description: "Educator, professional speaker, Digital transformation specialist.",
    linkedin: "#",
    twitter: "#",
    image: third, // Corrected here
  },
  {
    name: "Linas Butenas",
    title: "CSO",
    description: "Blockchain architect, Scientist, AI and Data mining expert.",
    linkedin: "#",
    twitter: "#",
    image: fourth, // Corrected here
  },
  {
    name: "Volkan Celiktepe",
    title: "CGO",
    description: "Localization expert, international relations and business specialist.",
    linkedin: "#",
    twitter: "#",
    image: five, // Corrected here
  },
  {
    name: "Ali Okcu",
    title: "CLO",
    description: "Lawyer, mathematician, educator, consulting on blockchain law.",
    linkedin: "#",
    twitter: "#",
    image: six, // Corrected here
  },
];

export const Team = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="relative bg-black py-16 sm:py-24 overflow-hidden transition-all duration-300 ease-in-out">
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
        <h2 className="text-4xl font-bold tracking-wide leading-tight">Meet the Team</h2>
        <p className="mt-4 text-lg opacity-80">
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
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-100 border-4 border-transparent hover:border-gradient-to-r hover:border-blue-500 hover:border-opacity-60"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-green-500 mb-6 transition-all duration-300 ease-in-out"
              />
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.title}</p>
              <p className="mt-3 text-gray-300">{member.description}</p>
              <div className="flex mt-5 space-x-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
                >
                  <FaLinkedin className="w-7 h-7 text-blue-400 hover:text-blue-600" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
                >
                  <FaTwitter className="w-7 h-7 text-blue-300 hover:text-blue-500" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
