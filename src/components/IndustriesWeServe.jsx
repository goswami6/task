"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const industries = [
  { title: "Travel & Hospitality", icon: "✈️" },
  { title: "Startups & Enterprises", icon: "🚀" },
  { title: "E-finance", icon: "📊" },
  { title: "Education & E-learning", icon: "🎓" },
  { title: "Retail", icon: "🏪" },
  { title: "Health care", icon: "❤️" },
  { title: "Media & Entertainment", icon: "🎬" },
  { title: "Insurance", icon: "🛡️" },
];

export default function IndustriesWeServe() {
  const columns = 5;
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg">
            We provide tailored digital solutions to meet the unique needs of
            different industries. Our technology helps businesses operate
            smarter and grow faster.
          </p>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-t border-gray-200 origin-left"
        />

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5"
        >
          {industries.map((item, index) => {
            const rowIndex = Math.floor(index / columns);
            const colIndex = index % columns;

            // ✅ RESPONSIVE COLOR LOGIC
            const isBlue = isDesktop
              ? colIndex % 2 === 0   // desktop: column-based
              : index % 2 === 0;     // mobile: index-based

            const isSecondRowFirstItem =
              isDesktop && rowIndex === 1 && colIndex === 0;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  px-8 py-12
                  flex flex-col items-center justify-center
                  text-center
                  transition-all duration-300
                  cursor-pointer
                  ${isBlue ? "bg-[#EEF6FF] border-b-4 border-black" : "bg-white"}
                  hover:shadow-xl
                  ${isSecondRowFirstItem ? "lg:col-start-2" : ""}
                `}
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-5xl mb-6"
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="font-semibold text-[#002F4A] text-lg">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
