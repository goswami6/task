


export default function ClientsMarquee() {
   const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.jpg",
    "/logos/logo6.png",
  ];

  return (
    <section className="py-20 bg-white">
      
      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Trusted Clients / Partners
      </h2>

      {/* MARQUEE */}
      <div className="relative marquee-wrapper">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* TRACK */}
        <div className="animate-marquee gap-20 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="client logo"
              className="
                h-12 w-auto
              
                opacity-70
                hover:grayscale-0 hover:opacity-100
                transition duration-300
              "
            />
          ))}
        </div>

      </div>
    </section>
  );
}



