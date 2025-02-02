"use client";
import { FaTelegram, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

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
              {[
                { name: "Home", link: "#home" },
                { name: "Features", link: "#features" },
                { name: "Team", link: "#team" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-500 transition duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Platform</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Explorer", link: "https://kadeshchain.com/Explorer" },
                { name: "Token", link: "#token" },
                { name: "Wallet", link: "https://kadeshchain.com/Wallet" },
                { name: "Faucet", link: "https://kadeshchain.com/Faucet" },
                { name: "API", link: "#api" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-500 transition duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Docs", link: "https://docs.kadeshchain.com/docs/Overview" },
                { name: "Brandbook", link: "https://kadeshchain.com/files/Brandbook.pdf" },
                { name: "Roadmap", link: "#roadmap" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-500 transition duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "FAQ", link: "#faq" },
                { name: "Contact Us", link: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-500 transition duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Policies</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Privacy Policy", link: "https://docs.kadeshchain.com/docs/whitepaper/Legal/Disclaimer/" },
                { name: "Terms & Condition", link: "https://docs.kadeshchain.com/docs/whitepaper/Legal/Disclaimer/" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-500 transition duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col mb-8 sm:mb-0 col-span-1 sm:col-span-1 lg:col-span-2">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Subscribe to our Newsletter
            </h4>
            <input
              placeholder="Enter your email Address"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300">
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
            <li><a href="https://www.facebook.com/kadeshchain" className="hover:text-blue-600 transition duration-300"><FaFacebook className="w-6 h-6" /></a></li>
            <li><a href="https://x.com/kadeshchain" className="hover:text-blue-600 transition duration-300"><FaTwitter className="w-6 h-6" /></a></li>
            <li><a href="https://www.linkedin.com/company/kadeshchain" className="hover:text-blue-600 transition duration-300"><FaLinkedin className="w-6 h-6" /></a></li>
            <li><a href="https://www.instagram.com/kadeshchain" className="hover:text-blue-600 transition duration-300"><FaInstagram className="w-6 h-6" /></a></li>
            <li><a href="https://t.me/kadeshchain" className="hover:text-blue-600 transition duration-300"><FaTelegram className="w-6 h-6" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
