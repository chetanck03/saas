"use client"; // Place this at the top of the file

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  // Animations
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  // State for expanding full text
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-black py-16 sm:py-24 overflow-hidden">
      {/* Floating Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-[black] opacity-30 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-[black] opacity-20 blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-12">
          {/* Right Side - Image with Hover Animation */}
          <motion.div
            style={{ opacity, rotateX, transformPerspective: "800px" }}
            className="flex-1 flex justify-center"
          >
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-c2e29c44f2ae3db08d953c0061e2dea8/"
              frameBorder="0"
              width="100%"
              height="400" // Adjust height for better mobile view
              className="sm:w-[600px] sm:h-[600px] w-full h-64"
              style={{
                transform: "scale(0.9)",
                position: "relative",
                top: "-30px",
                left: "0px",
                objectFit: "contain", // Ensure the model fits within the bounds
                overflow: "hidden",
              }}
            ></iframe>
          </motion.div>

          {/* Left Side - Text with Animated Fade-in */}
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
            <h3 className="text-xl sm:text-2xl font-semibold text-[#315BA7] mt-4">
              Why Choose Kadesh?
            </h3>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Welcome to <span className="font-bold text-[#315BA7]">Kadesh Chain</span> – a cutting-edge blockchain project revolutionizing the world of secure digital contracts.
            </p>

            {/* Expandable Section */}
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
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  With our innovative approach, we are eliminating intermediaries, reducing disputes, and streamlining the entire contract signing process.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  Kadesh Chain also leverages blockchain to ensure contracts are tamper-proof and permanently recorded, offering an immutable record of agreements.
                  Our platform has the potential to transform industries like real estate, finance, healthcare, and supply chain management.
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
