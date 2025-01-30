"use client";
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#315BA7_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#315BA7] bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href=""
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text] transition-all duration-300 ease-in-out hover:text-white transform hover:scale-105">
              version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold tracking-tighter text-center inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Blockchain Powered, <br />Biometric Verified
            </motion.h1>
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
                alt="cursonImage"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
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
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-center text-xl mt-8 max-w-md">
            Welcome to Kadesh Chain, the future of secure digital contracts. We combine biometric authentication with blockchain technology to offer a seamless, tamper-proof platform for signing contracts with absolute trust and transparency.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            href="https://docs.kadeshchain.com/"
            className="bg-white text-black py-3 px-5 rounded-lg font-medium inline-flex items-center gap-2 transform transition-all duration-200 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            White Paper
            <ArrowWIcon />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
