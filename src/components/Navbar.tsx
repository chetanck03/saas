"use client";
import Image from "next/image";
import logoImage from "../assets/images/logo.png";
import MenuIcon from "../assets/icons/menu.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="relative flex items-center  gap-0">
            <div className="absolute w-full top-2 bottom-0  "></div>
            <Image
              src={logoImage}
              alt="Kadesh logo"
              className="h-12 w-12 relative "
            />
            <span className="ml-4 text-gray-50 font-bold text-2xl sm:text-3xl   drop-shadow-md">
              Kadesh
            </span>
          </div>

          {/* Menu Icon for Mobile */}
          <div
            onClick={toggleMenu}
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden cursor-pointer"
          >
            <MenuIcon className="text-white" />
          </div>

          {/* Navigation Links */}
          <nav className="gap-6 items-center hidden sm:flex">
            {["Home", "Features", "Token", "Docs", "Wallet","Faucet","API"].map(
              (item) => (
                <a
                  key={item}
                  href=""
                  className="text-opacity-60 text-white hover:text-opacity-100 transition"
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-white py-2 px-4 rounded-lg font-medium">
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 flex flex-col items-center justify-center"
                style={{ height: "100%" }}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-5 right-5 bg-white p-2 rounded-full"
                >
                  Close
                </button>
                {["Home", "Features", "Token", "Docs", "Wallet","Faucet","API"].map(
                  (item) => (
                    <a key={item} href="" className="text-white text-lg py-4">
                      {item}
                    </a>
                  )
                )}
                <button className="mt-5 bg-white py-2 px-4 rounded-lg text-black font-semibold">
                  Contact Us
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
