"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    /* IMAGE PARALLAX (SUBTLE) */
    gsap.fromTo(
      imageRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );

    /* FEATURE CARDS STAGGER */
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#1b2b7a] via-[#1f5fa5] to-[#2fb7e6] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          {/* HUMAN IMAGE — NO FLOAT */}
          <div
            ref={imageRef}
            className="absolute -top-10 -left-6 w-[300px] rounded-2xl overflow-hidden shadow-xl z-0"
          >
            <img
              src={image1}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* MAIN IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-[420px] rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <img
              src={image2}
              alt="Team work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* BADGE (SOFT PULSE – OK FOR UI ELEMENTS) */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-8 left-44 bg-orange-400 text-white px-6 py-3 rounded-xl shadow-lg text-center"
          >
            <p className="text-xl font-bold">24/7</p>
            <p className="text-sm font-medium">Code</p>
          </motion.div>

          {/* DOTS */}
          <div className="absolute bottom-6 left-8 grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="w-2 h-2 bg-white/70 rounded-full" />
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Us
          </h2>

          <p className="text-lg text-white/90 max-w-xl mb-10">
            We focus on delivering reliable, scalable, and user-friendly
            solutions that drive business growth.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Scalable and secure solutions",
              "User-focused design and development",
              "Seamless API integrations",
              "Dedicated support and maintenance",
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white text-[#002F4A] rounded-xl px-6 py-5 shadow-md font-semibold hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* DECORATIVE DOTS */}
      <div className="absolute top-12 right-12 grid grid-cols-5 gap-2">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="w-2 h-2 bg-white/70 rounded-full" />
        ))}
      </div>
    </section>
  );
}
