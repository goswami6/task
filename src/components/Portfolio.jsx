"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const cardsRef = useRef([]);

  const cases = [
    {
      img: "/portfolio/p1.jpg",
      title: "Lorem ipsum",
      desc:
        "Lorem ipsum dolor sit consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit",
      date: "4 Aug 2025",
      views: "000 Views",
    },
    {
      img: "/portfolio/p2.jpg",
      title: "Lorem ipsum",
      desc:
        "Lorem ipsum dolor sit consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit",
      date: "4 Aug 2025",
      views: "000 Views",
    },
    {
      img: "/portfolio/p1.jpg",
      title: "Lorem ipsum",
      desc:
        "Lorem ipsum dolor sit consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit",
      date: "4 Aug 2025",
      views: "000 Views",
    },
    {
      img: "/portfolio/p2.jpg",
      title: "Lorem ipsum",
      desc:
        "Lorem ipsum dolor sit consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit",
      date: "4 Aug 2025",
      views: "000 Views",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Portfolio / Case Studies
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          We provide tailored digital solutions to meet the unique needs of
          different industries. Our technology helps businesses operate
          smarter and grow faster.
        </motion.p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt="portfolio"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* META */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="font-semibold text-gray-700">
                    {item.title}
                  </span>
                  <span>•</span>
                  <span>2 min</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between border-t pt-3 text-sm">
                  <span className="text-gray-500 flex items-center gap-1">
                    👁 {item.views}
                  </span>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="font-semibold text-lg flex items-center gap-2 mx-auto group">
            View More
            <span className="text-2xl transition-transform group-hover:translate-x-2">
              »»
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
