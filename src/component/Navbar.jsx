import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 🔹 Close mobile menu automatically on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // 🔹 Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-yellow-600 text-black text-xs sm:text-sm">
        <div className="w-full px-4 py-2">
          {/* MOBILE VIEW */}
          <div className="flex flex-col sm:hidden items-center gap-2 text-center font-medium">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-[12px]" />
                <span>+91 5245073756</span>
              </div>

              <div className="flex items-center gap-1">
                <FaEnvelope className="text-[12px]" />
                <span>info@ngo.org</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaFacebookF className="cursor-pointer hover:text-white transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
              <FaYoutube className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden sm:flex items-center justify-between font-medium">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+91 5245073756</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@ngo.org</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaFacebookF className="cursor-pointer hover:text-white transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
              <FaYoutube className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className="w-full bg-white border-b-4 border-[#f6CC48] sticky top-0 z-50 shadow-sm">
        <div className="w-full flex items-center justify-between h-[75px] px-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.avif"
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-yellow-600">
                मंदबुद्धी व शारीरिक
              </h1>
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-green-800">
                विकास संस्था
              </h1>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <Link to="/about" className="hover:text-black transition">
              ABOUT US
            </Link>
            <Link to="/program" className="hover:text-black transition">
              PROGRAMS
            </Link>
            <Link to="/involve" className="hover:text-black transition">
              GET INVOLVED
            </Link>
            <Link to="/contact" className="hover:text-black transition">
              CONTACT
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 py-4 border-t" : "max-h-0"
          } bg-white`}
        >
          <div className="flex flex-col items-center gap-4 text-gray-700 font-medium">
            <Link to="/about">ABOUT US</Link>
            <Link to="/program">PROGRAMS</Link>
            <Link to="/involve">GET INVOLVED</Link>

            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
