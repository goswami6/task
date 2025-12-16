"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechStack() {
  const tabs = [
    "Backend",
    "Frontend",
    "DevOps & Cloud",
    "Database Development",
    "Artificial Intelligence",
    "Design",
  ];

  const backendTech = [
    { name: "Django", logo: "django" },
    { name: "PHP", logo: "php" },
    { name: "Python", logo: "python", active: true },
    { name: "Laravel", logo: "laravel" },
    { name: "Codeigniter", logo: "codeigniter" },
    { name: "Node", logo: "node" },
    { name: "Express.js", logo: "express" },
    { name: "Nest JS", logo: "nestjs" },
  ];

  const [activeTab, setActiveTab] = useState("Backend");

  return (
    <section className="bg-[#f4f2f1] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Lorem ipsum dolor sit a consectetur
        </motion.h2>

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm flex flex-wrap justify-center gap-2 p-2 max-w-5xl mx-auto mb-14"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-orange-100 text-orange-600 border border-orange-400"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* TECH GRID */}
        <AnimatePresence mode="wait">
          {activeTab === "Backend" && (
            <motion.div
              key="backend"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6"
            >
              {backendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className={`bg-white rounded-xl p-6 flex flex-col items-center justify-center
                    border shadow-sm transition-all cursor-pointer
                    ${
                      tech.active
                        ? "border-blue-600 shadow-md"
                        : "border-transparent hover:border-gray-200 hover:shadow-md"
                    }
                  `}
                >
                  {/* LOGO */}
                  <img
                    src={`/tech/${tech.logo}.png`}
                    alt={tech.name}
                    className="h-12 mb-4 object-contain"
                  />

                  {/* NAME */}
                  <p className="text-sm font-medium text-[#002F4A]">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
