"use client";

import { useState } from "react";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Services", "About Us", "How It Works", "Contact Us"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0b0725] to-[#160b3d] shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="bg-white text-black font-bold px-6 py-2 tracking-wider rounded-sm">
          LOGO
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-indigo-200">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CALL (DESKTOP ONLY) */}
          {/* CALL */}
          <div className="flex items-center gap-2 text-sm text-white">
            <Phone size={16} />
            <span className=" sm:inline">+91-1234567890</span>
          </div>


          {/* CTA BUTTON (DESKTOP ONLY) */}
          <a
            href="#"
            className="hidden md:flex items-center gap-2
              bg-gradient-to-r from-blue-500 to-purple-600
              px-6 py-2.5 rounded-full
              text-sm font-medium text-white
              shadow-lg shadow-purple-600/40
              hover:shadow-purple-600/70 transition-all"
          >
            Get a Quote <ArrowRight size={16} />
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#0b0725] transition-all duration-300 overflow-hidden
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col px-6 py-6 gap-5 text-sm text-indigo-200">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="block hover:text-white transition"
              >
                {item}
              </a>
            </li>
          ))}

          {/* MOBILE CTA */}
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2
              bg-gradient-to-r from-blue-500 to-purple-600
              px-6 py-3 rounded-full
              text-sm font-medium text-white
              shadow-lg"
          >
            Get a Quote <ArrowRight size={16} />
          </a>

          {/* MOBILE PHONE */}
          <div className="flex items-center gap-2 text-white text-sm mt-2">
            <Phone size={16} />
            <span>+91-1234567890</span>
          </div>
        </ul>
      </div>
    </header>
  );
}
