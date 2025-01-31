"use client";
import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white/80 border-t border-white/20">
      <div className="container px-4 md:px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-8">
          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">
              General Info
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Features", "Team"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Platform</h4>
            <ul className="space-y-2 text-sm">
              {["Explorer", "Token", "Wallet", "Faucet", "API"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Docs", "Brandbook", "Roadmap"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              {["FAQ", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Policies</h4>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms & Condition"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Form */}
          <div className="flex flex-col mb-8  sm:mb-0 col-span-1 sm:col-span-1 lg:col-span-2">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Subscribe to our Newsletter
            </h4>
            <input
              placeholder="Enter your email Address"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-8 items-center">
          <div className="text-center sm:text-left text-sm text-white">
            © 2025 Kadeshchain. All rights reserved.
          </div>
          <ul className="flex justify-center sm:justify-end gap-6 mt-4 sm:mt-0">
            {/* Social Media Icons with Links */}
            <li>
              <a
                href="https://x.com/kadeshchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="text-white hover:text-blue-500 transition duration-300 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaIcon className="text-white hover:text-blue-500 transition duration-300 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiktokIcon className="text-white hover:text-blue-500 transition duration-300 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="text-white hover:text-blue-500 transition duration-300 w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
