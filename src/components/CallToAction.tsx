"use client";
import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="contact">
      <div className="bg-black text-white py-20 sm:py-24">
        <div
          className="container max-w-5xl mx-auto px-6 sm:px-0 flex flex-col sm:flex-row items-center sm:items-start gap-12"
          ref={containerRef}
        >
          {/* Left Section - Contact Info */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
              Contact Us
            </h2>
            <p className="text-lg text-white/80 mt-4">
              Contact us for any enquiries or offers.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500 w-6 h-6" />
                <p className="text-lg">contact@kadeshchain.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500 w-6 h-6" />
                <p className="text-lg">Muratpasa, Antalya</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full sm:w-1/2 bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg border border-white/20">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="h-12 bg-black text-white border border-white/20 rounded-lg px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="h-12 bg-black text-white border border-white/20 rounded-lg px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <textarea
                placeholder="Message*"
                rows={4}
                className="bg-black text-white border border-white/20 rounded-lg px-5 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <button
                type="submit"
                className="h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-lg hover:opacity-80 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
