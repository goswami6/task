"use client";

import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2E98C6] rounded-xl px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white relative"
          >
            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              GET IN TOUCH
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/90 max-w-lg mb-10"
            >
              We’d love to hear from you! Whether you’re ready to start a
              project or have a question, our team is here to help.
            </motion.p>

            {/* BENEFITS */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-4"
            >
              Your Benefits -
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10">
              {[
                "Client-focused",
                "Independent expertise",
                "Skilled & reliable",
                "Result-oriented",
                "Problem-solving approach",
                "Open & transparent",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span className="text-lg">✓</span>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* PHONE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-medium"
            >
              Or Call Us On{" "}
              <span className="font-bold ml-2">+91-7845784596</span>
            </motion.p>

            {/* DIVIDER */}
            <span className="hidden lg:block absolute top-0 right-0 h-full w-[2px] bg-white/30"></span>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg mx-auto"
          >
            <form className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-400 rounded px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-400 rounded px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-400 rounded px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-400 rounded px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                placeholder="Services"
                className="w-full border border-gray-400 rounded px-4 py-3 text-sm outline-none focus:border-blue-500 transition"
              />

              <textarea
                rows="4"
                placeholder="Description"
                className="w-full border border-gray-400 rounded px-4 py-3 text-sm outline-none resize-none focus:border-blue-500 transition"
              ></textarea>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="flex items-center gap-3 bg-gradient-to-r from-[#1D2C7B] to-[#3DB6E9] text-white px-8 py-3 rounded-full text-sm font-medium"
              >
                Get Quote <span>→</span>
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
