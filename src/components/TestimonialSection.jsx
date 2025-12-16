import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./testimonial-swiper.css"; // ✅ IMPORTANT

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lorem ipsum",
      role: "Lorem ipsum dolor sit",
      rating: 4,
      text:
        "Lorem ipsum dolor sit a consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate.",
    },
    {
      name: "Lorem ipsum",
      role: "Lorem ipsum dolor sit",
      rating: 5,
      text:
        "Lorem ipsum dolor sit a consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit.",
    },
    {
      name: "Lorem ipsum",
      role: "Lorem ipsum dolor sit",
      rating: 4,
      text:
        "Lorem ipsum dolor sit a consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate.",
    },
     {
      name: "Lorem ipsum",
      role: "Lorem ipsum dolor sit",
      rating: 4,
      text:
        "Lorem ipsum dolor sit a consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate.",
    },
    {
      name: "Lorem ipsum",
      role: "Lorem ipsum dolor sit",
      rating: 5,
      text:
        "Lorem ipsum dolor sit a consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit.",
    },
    {
      name: "Lorem ipsum",
      role: "Lorem ipsum dolor sit",
      rating: 4,
      text:
        "Lorem ipsum dolor sit a consectetur. Pellentesque duis volutpat odellus hendrerit a. Vulputate.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fbf6e9] to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          We take pride in building long-lasting partnerships with our clients.
        </p>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                    ${isActive ? "scale-105 opacity-100" : "scale-95 opacity-50"}
                  `}
                >
                  {/* HEADER */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/avatar.png"
                      alt="user"
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>

                      {/* STARS */}
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < item.rating
                                ? "text-orange-400"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
