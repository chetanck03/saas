"use client";
import Image from "next/image";
import logoImage from "../assets/images/logo.png";
import MenuIcon from "../assets/icons/menu.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showMore, setShowMore] = useState(false); // state to toggle more options

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event to apply "scrolling" state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`bg-black shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="px-4">
        <div className="py-2 flex items-center justify-between bg-black">
          {/* Logo Section */}
          <div className="relative flex items-center gap-0">
            <div className="absolute w-full top-2 bottom-0"></div>
            <Image src={logoImage} alt="Kadesh logo" className="h-11 w-11 relative" />
            <span className="ml-4 text-gray-50 font-bold text-2xl sm:text-3xl drop-shadow-md">
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
          <nav className="gap-6 items-center hidden sm:flex bg-black">
            {[{ name: "Home", href: "home" }, { name: "Features", href: "features" }, { name: "Token", href: "token" },{ name: "Docs", href: "https://docs.kadeshchain.com/docs/Overview" },{ name: "Faq", href: "faq" } ,{name: "Explorer", href: "https://kadeshchain.com/Explorer" }].map((item) => (
              <a
                key={item.name}
                onClick={(e) => {
                  if (!item.href.startsWith("http")) {
                    e.preventDefault();
                    handleScrollToSection(item.href);
                  }
                }}
                href={item.href.startsWith("http") ? item.href : "#"}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                className="text-opacity-60 text-white hover:text-opacity-100 transition-all duration-500 ease-in-out"
              >
                {item.name}
              </a>
            ))}

            {/* More option with animated arrow */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className=" text-white flex items-center gap-2 text-opacity-60 hover:text-opacity-100 transition-all duration-500 ease-in-out"
              >
                <span>More</span>
                {showMore ? (
                  <FaChevronUp className="text-opacity-60 text-white hover:text-opacity-100" />
                ) : (
                  <FaChevronDown className="text-opacity-60 text-white hover:text-opacity-100" />
                )}
              </button>

              {/* Additional links under 'More' */}
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 mt-8 bg-black bg-opacity-80 text-center p-4 rounded-lg w-25"
                  >
                    {[ { name: "Wallet", href: "https://kadeshchain.com/Wallet" }, { name: "Faucet", href: "https://kadeshchain.com/Faucet" },{ name: "API", href: "api" }].map((item) => (
                      <a
                        key={item.name}
                        onClick={(e) => {
                          if (!item.href.startsWith("http")) {
                            e.preventDefault();
                            handleScrollToSection(item.href);
                          }
                        }}
                        href={item.href.startsWith("http") ? item.href : "#"}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        className="block text-opacity-60 text-white hover:text-opacity-100 py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a
              href="#contact"
              className="bg-white py-2 px-4 rounded-lg font-medium transition-all duration-500 ease-in-out"
            >
              Contact Us
            </a>
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
                className="absolute top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 flex flex-col items-center justify-start"
                style={{ height: "100vh" }}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-5 right-5 bg-white p-2 rounded-full"
                >
                  Close
                </button>
                {[{ name: "Home", href: "home" }, { name: "Features", href: "features" }, { name: "Token", href: "token" }, { name: "Docs", href: "https://docs.kadeshchain.com/docs/Overview" },{ name: "Faq", href: "faq" } , { name: "Explorer", href: "https://kadeshchain.com/Explorer" }, { name: "Wallet", href: "https://kadeshchain.com/Wallet" }, { name: "Faucet", href: "https://kadeshchain.com/Faucet" }, { name: "API", href: "api" }]
                  .map((item) => (
                    <a
                      key={item.name}
                      onClick={(e) => {
                        if (!item.href.startsWith("http")) {
                          e.preventDefault();
                          handleScrollToSection(item.href);
                        }
                      }}
                      href={item.href.startsWith("http") ? item.href : "#"}
                      target={item.href.startsWith("http") ? "_blank" : "_self"}
                      className="text-white text-lg py-4"
                    >
                      {item.name}
                    </a>
                  ))}
                <a
                  href="#contact"
                  className="mt-5 bg-white py-2 px-4 rounded-lg text-black font-semibold"
                >
                  Contact Us
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
