import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0C0F4A] via-[#0B145A] to-[#06072E] text-white overflow-hidden">

      {/* TOP CTA */}
      <div className="relative z-10 text-center py-5 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-white/80 mb-8">
          Let’s build scalable and smart digital solutions for your business.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Get a Quote <ArrowRight size={18} />
        </button>
      </div>

      {/* GRID LINE BACKGROUND */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="bg-white text-black font-bold text-xl w-40 h-20 flex items-center justify-center rounded-lg mb-6">
            LOGO
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Payonix Technology Pvt. Ltd. builds user-friendly, scalable
            digital products for growing businesses.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-white/80">
            {[
              "Home",
              "About Us",
              "How it Works",
              "Contact Us",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-6">Connect</h4>
          <ul className="space-y-3 text-sm text-white/80">
            {[
              "LinkedIn",
              "Twitter",
              "Facebook",
              "Instagram",
              "YouTube",
            ].map((item) => (
              <li
                key={item}
                className="relative w-fit cursor-pointer hover:text-white transition
                   after:absolute after:left-0 after:-bottom-1 after:w-0
                   after:h-[2px] after:bg-blue-400 after:transition-all
                   after:duration-300 hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>


        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-6">
            Payonix Technology Pvt. Ltd.
          </h4>

          <div className="flex items-start gap-4 mb-4">
            <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <MapPin size={18} />
            </span>
            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit aconsectetur. Pellentesque du
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Mail size={18} />
            </span>
            <p className="text-sm text-white/80">
              payonix123@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Phone size={18} />
            </span>
            <p className="text-sm text-white/80">
              +91-1234567890
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Payonix Technology Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
