import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      onMouseMove={(e) =>
        setPos({ x: e.clientX, y: e.clientY })
      }
      className="relative bg-gradient-to-br from-[#0b0725] via-[#1a0f4a] to-[#070b2d] text-white overflow-hidden"
    >
      {/* 🟢 MOUSE FOLLOW GLOW */}
      <div
        className="mouse-glow"
        style={{ left: pos.x, top: pos.y }}
      />

      {/* 🔥 SVG PATH ANIMATION */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="orbGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <path
          id="motionPath"
          d="M 50 500 C 300 200, 700 200, 950 100"
          fill="none"
        />

        <circle r="10" fill="url(#orbGradient)" filter="url(#glow)">
          <animateMotion dur="12s" repeatCount="indefinite">
            <mpath href="#motionPath" />
          </animateMotion>
        </circle>
      </svg>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-medium mb-4 tracking-wide"
          >
            Code the Future with Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            Building Reliable Software <br />
            Delivering{" "}
            <span className="text-orange-400">Real Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-indigo-200 max-w-xl"
          >
            We deliver powerful web applications, stunning designs,
            and reliable APIs that drive your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 rounded-full shadow-lg hover:shadow-cyan-500/60 transition">
              Get Started →
            </button>

            <button className="text-sm text-indigo-200 hover:text-white transition">
              View Our Work
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative flex justify-center animate-float"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="
              w-full max-w-xl
              tron-glow
              drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
