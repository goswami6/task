"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque du volutpat pat odtellus hendrerit",
    answer:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque duis volutpat odtellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit. Lorem ipsum dolor sit aconsectetur. Pellentesque duis volutpat odtellus hendrerit",
  },
  {
    question:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque du volutpat pat odtellus hendrerit",
    answer:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque duis volutpat odtellus hendrerit a.",
  },
  {
    question:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque du volutpat pat odtellus hendrerit",
    answer:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque duis volutpat odtellus hendrerit a.",
  },
  {
    question:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque du volutpat pat odtellus hendrerit",
    answer:
      "Lorem ipsum dolor sit aconsectetur. Pellentesque duis volutpat odtellus hendrerit a.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#EEF6FF] py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16"
      >

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-black leading-tight mb-12">
            Frequently asked <br /> questions?
          </h2>

          {/* CTA BOX */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#262A7F] text-white rounded-2xl p-8 max-w-md shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">
              Still have questions?
            </h3>
            <p className="text-white/80 mb-6 text-sm">
              Can’t find the answer to your questions? Send us an email and
              we’ll get back to you as soon as possible.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
              Send Email
            </button>
          </motion.div>
        </div>

       {/* RIGHT SIDE (FAQ ACCORDION) */}
<motion.div
  initial={{ opacity: 0, x: 80 }}          // 👉 right se start
  whileInView={{ opacity: 1, x: 0 }}       // 👉 left ki taraf aake stop
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="space-y-6"
>
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        layout
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="bg-white rounded-xl border border-gray-200 px-6 py-5 shadow-sm"
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="font-medium text-gray-900">
            {faq.question}
          </span>

          {/* ROTATING ICON */}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl text-gray-600"
          >
            ⌄
          </motion.span>
        </button>

        {/* ANSWER */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-4 text-gray-600 text-sm leading-relaxed overflow-hidden"
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  })}
</motion.div>


      </motion.div>
    </section>
  );
}
