"use client"; // Place this at the top of the file

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import appScreen from "../assets/images/img.png";

export const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-black py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-[black] opacity-30 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-[black] opacity-20 blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-12">
          {/* Left Side - Image with Hover Animation */}
          <motion.div
            style={{ opacity, rotateX, transformPerspective: "800px" }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ y: expanded ? 0 : [0, 20, 0] }}
              transition={{ repeat: expanded ? 0 : Infinity, duration: 1.2 }}


            >
              <Image
                ref={imageRef}
                src={appScreen}
                alt="Kadesh Image"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Text with Animated Fade-in */}
          <motion.div
            className="flex-1 text-center sm:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Kadesh
            </h2>
            <motion.h3
              className="text-xl sm:text-2xl font-semibold text-[#4671D5] mt-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Why Choose Kadesh?
            </motion.h3>
            <p
              className={`text-lg mt-4 leading-relaxed transition-all ${
                isHovered ? "text-gray-300" : "text-gray-300"
              }`}
            >
              Welcome to <span className="font-bold text-[#4671D5]">Kadesh Chain</span> – a cutting-edge blockchain project revolutionizing the world of secure digital contracts.
            </p>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Kadesh Chain, we believe in simplifying the contract signing process while ensuring the highest levels of security and authenticity.
                  By integrating biometric authentication with blockchain technology, we are setting a new standard for trust and transparency in contract agreements.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  Our mission is to provide a seamless platform where users can confidently sign contracts, knowing their identities are verified through unique biometric characteristics.
                </p>
              </motion.div>
            )}

            {/* Button & Animated Arrow */}
            <div className="mt-8 flex flex-col items-center sm:items-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full text-lg font-semibold bg-white text-black shadow-lg hover:bg-gray-300 transition flex items-center gap-2"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Learn More"}
                <motion.div
                  animate={{ y: expanded ? 0 : [0, 5, 0] }}
                  transition={{ repeat: expanded ? 0 : Infinity, duration: 1.2 }}
                >
                  <ChevronDown
                    className="w-5 h-5 text-black transition-transform"
                    style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
