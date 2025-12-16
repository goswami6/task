import { motion } from "framer-motion";
import whoweare from "../assets/who-we-are1.png";

export default function WhoWeAre() {
  return (
    <section className="relative bg-[#f5f4f2] py-28 overflow-hidden">

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold tracking-wide mb-24"
      >
        WHO WE ARE
      </motion.h2>

      {/* DOTTED ARROW */}
      <motion.svg
        initial={{ strokeDashoffset: 200 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-24 right-124 hidden lg:block "
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
      >
        <path
          d="M20 20 C 120 20, 120 120, 40 120"
          stroke="#1f3a8a"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M40 120 L48 112 M40 120 L48 128"
          stroke="#1f3a8a"
          strokeWidth="2"
        />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold leading-tight">
            We are{" "}
            <span className="text-orange-500">Creative</span>{" "}
            Web Agency for Your <br />
            Next Project
          </h3>

          <p className="mt-6 text-gray-600 leading-relaxed text-base">
            We design and build modern, scalable software solutions that
            align perfectly with our client’s business goals.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-cyan-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-cyan-500/40 transition-all"
          >
            Learn More <span className="text-lg">→</span>
          </motion.button>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src={whoweare}
            alt="Our Team"
            className="max-w-full max-h-[520px] object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* RIGHT FEATURES */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col gap-6"
        >
          {/* Feature */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0 },
            }}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 font-bold">
              ✓
            </span>
            <p className="text-sm font-medium text-gray-700">
              Experienced team in web design, development, and API integrations
            </p>
          </motion.div>

          {/* Highlighted Feature */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0 },
            }}
            animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 25px rgba(34,211,238,0.5)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex items-start gap-4 bg-gradient-to-r from-blue-900 to-cyan-600 p-6 rounded-xl text-white shadow-md"
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white font-bold">
              ✓
            </span>
            <p className="text-sm font-medium">
              Secure, scalable, and user-friendly digital solutions
            </p>
          </motion.div>

          {/* Feature */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0 },
            }}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 font-bold">
              ✓
            </span>
            <p className="text-sm font-medium text-gray-700">
              Dedicated long-term support and continuous improvement
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
