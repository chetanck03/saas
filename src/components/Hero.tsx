"use client";
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home">
      <div className="bg-black text-white py-[72px] sm:py-24 relative overflow-hidden">
        {/* Background Circle Animation */}
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#4671D5] bg-[radial-gradient(closest-side,#000000_82%,#4671D5)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] animate-pulse"></div>

        <div className="container relative">
          {/* Main Heading */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex relative">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold tracking-tighter text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Transforming <br /> Blockchain Simplified
              </motion.h1>

              {/* Cursor Image */}
              <motion.div
                className="absolute right-[476px] top-[108px] hidden sm:inline"
                drag
                dragSnapToOrigin
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={cursorImage}
                  height="200"
                  width="200"
                  alt="cursorImage"
                  className="max-w-none"
                  draggable="false"
                />
              </motion.div>

              {/* Message Image */}
              <motion.div
                className="absolute top-[56px] left-[498px] hidden sm:inline"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.3}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={messageImage}
                  height="200"
                  width="200"
                  alt="messageImage"
                  className="max-w-none"
                  draggable="false"
                />
              </motion.div>
            </div>
          </div>

          {/* Description Text */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-center text-xl mt-8 max-w-md">
              Experience secure, fast, and future-ready blockchain transactions with unmatched efficiency and adaptability.
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.a
              href="https://docs.kadeshchain.com/"
              className="bg-white text-black py-3 px-5 rounded-lg font-medium inline-flex items-center gap-2 transform transition-all duration-200 ease-in-out hover:scale-105 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-blue-500 opacity-20 transition-all duration-300 ease-in-out hover:opacity-50" />
              White Paper
              <ArrowWIcon />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
