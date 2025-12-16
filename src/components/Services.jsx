"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const services = [
  {
    title: "Web Application Development",
    desc: "We design and develop secure, scalable, and user-friendly web applications that streamline business operations and drive growth.",
    icon: Code2,
  },
  {
    title: "Web Design",
    desc: "We create professional and responsive web designs that align with your brand and business goals.",
    active: true,
    icon: Palette,
  },
  {
    title: "Recharge & Bill Payments API",
    desc: "We offer a secure and reliable API for mobile recharges and bill payments, ensuring fast transactions.",
    icon: Zap,
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className={`
        bg-white rounded-2xl
        min-h-[420px]
        px-8 py-10 text-center
        shadow-lg
        border-2 border-transparent
        transition-all duration-300
        hover:border-blue-500 hover:shadow-2xl
        ${service.active ? "border-blue-500 shadow-2xl scale-[1.03]" : ""}
      `}
    >
      {/* ICON */}
      <div
        className="
          w-[80px] h-[80px]
          mx-auto mb-6
          flex items-center justify-center
          rounded-full
          bg-blue-50
          text-blue-600
        "
      >
        <Icon size={36} strokeWidth={1.8} />
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-xl mb-4 text-[#002F4A]">
        {service.title}
      </h3>

      {/* DESC */}
      <p className="text-[15px] leading-[26px] text-[#363636]">
        {service.desc}
      </p>

      {/* BUTTON */}
      <button
        className={`
          mt-8 inline-flex items-center gap-2
          px-7 py-3 rounded-full text-sm font-medium
          transition-all duration-300
          ${
            service.active
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
              : "bg-[#002F4A] text-white hover:bg-blue-700"
          }
        `}
      >
        Learn more <span>→</span>
      </button>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative bg-white pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 -mt-44 relative z-20">

        {/* ===================== */}
        {/* MOBILE – SWIPER */}
        {/* ===================== */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={20}
            slidesPerView={1.1}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===================== */}
        {/* DESKTOP – GRID */}
        {/* ===================== */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
