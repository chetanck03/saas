"use client";

import acmeLogo from "../assets/images/patner1.png";
import quantumLogo from "../assets/images/partner2.png";
import echoLogo from "../assets/images/partner3.png";
import celestialLogo from "../assets/images/partner4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
];

export const Partners = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center font-semibold text-3xl sm:text-4xl tracking-tight">
          Our Partners
        </h2>
        <p className="text-center text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
          Collaborating with leading industry experts to innovate and succeed.
        </p>

        {/* Scrolling Partner Logos */}
        <div className="relative mt-12 overflow-hidden">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-12 flex-none pr-12"
          >
            {images.concat(images).map((image, index) => (
              <div key={index} className="flex-none h-16 w-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-auto filter bg-white rounded-lg opacity-90 hover:opacity-100 transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
