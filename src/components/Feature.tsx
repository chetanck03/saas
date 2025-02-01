/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Feature({
  title,
  description,
  backwardText, // Added backward text prop
  icon
}: {
  title: string;
  description: string;
  backwardText: string; // This prop will be used for the backward text
  icon: JSX.Element;
}) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null); // Reference to the card for hover effect

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative perspective-1000px w-full max-w-sm mx-auto border border-white/30 px-5 py-10 text-center rounded-xl overflow-hidden cursor-pointer transform-gpu transition-all duration-700"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>

      <div className="inline-flex h-14 w-14  text-black justify-center items-center rounded-lg">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>

      {/* Back Text - Hidden by default, shown on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 p-5 rounded-xl opacity-0 transform rotate-y-180 transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <p className="text-center">{backwardText}</p>
      </div>

      {/* Hover Effect */}
      <style jsx>{`
        .relative:hover .absolute {
          opacity: 1;
          transform: rotateY(180deg);
          background-color: black;
        }
        .relative:hover {
          transform: rotateY(180deg);
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}
