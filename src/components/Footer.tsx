"use client"
import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white/80 border-t border-white/20">
      <div className="container">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">General Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 transition duration-300">Home</li>
              <li className="hover:text-blue-500 transition duration-300">Features</li>
              <li className="hover:text-blue-500 transition duration-300">Team</li>
              <li className="hover:text-blue-500 transition duration-300">Platform</li>
              <li className="hover:text-blue-500 transition duration-300">Explorer</li>
              <li className="hover:text-blue-500 transition duration-300">Token</li>
              <li className="hover:text-blue-500 transition duration-300">Wallet</li>
              <li className="hover:text-blue-500 transition duration-300">Faucet</li>
              <li className="hover:text-blue-500 transition duration-300">API</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 transition duration-300">Docs</li>
              <li className="hover:text-blue-500 transition duration-300">Brandbook</li>
              <li className="hover:text-blue-500 transition duration-300">Roadmap</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 transition duration-300">FAQ</li>
              <li className="hover:text-blue-500 transition duration-300">Contact Us</li>
              <li className="hover:text-blue-500 transition duration-300">Policies</li>
              <li className="hover:text-blue-500 transition duration-300">Privacy Policy</li>
              <li className="hover:text-blue-500 transition duration-300">Terms & Condition</li>
            </ul>
          </div>

          {/* Contact Us Form */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
            <textarea
              placeholder="Leave a message here..."
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300">
              Send Message
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-8">
          <div className="text-center sm:text-left text-sm text-white">
            © 2025 Kadeshchain. All rights reserved.
          </div>
          <ul className="flex justify-center sm:justify-end gap-6">
            <li>
              <XIcon className="text-white hover:text-blue-500 transition duration-300" />
            </li>
            <li>
              <InstaIcon className="text-white hover:text-blue-500 transition duration-300" />
            </li>
            <li>
              <TiktokIcon className="text-white hover:text-blue-500 transition duration-300" />
            </li>
            <li>
              <YoutubeIcon className="text-white hover:text-blue-500 transition duration-300" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
