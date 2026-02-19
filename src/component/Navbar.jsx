import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-yellow-600 text-black text-sm">
        <div className="w-full flex items-center justify-between px-6 py-2">

          {/* Contact Details */}
          <div className="flex items-center space-x-6 font-medium">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@ngo.org</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
            <FaYoutube className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className="w-full bg-white border-b-4 border-[#f6CC48] sticky top-0 z-50 shadow-md">
        <div className="w-full flex items-center justify-between h-[90px] px-6">

          {/* ===== LOGO + NGO NAME ===== */}
          <Link to="/" className="flex items-center space-x-3">

            <img
              src="/logo.avif"
              alt="Logo"
              className="h-16 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-xl font-bold text-yellow-600">
                मंदबुद्धी व शारीरिक
              </h1>
              <h1 className="text-xl font-bold text-green-800">
                विकास संस्था
              </h1>
            </div>

          </Link>

          {/* ===== MENU ===== */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              to="/"
              className="text-gray-700 text-[16px] font-medium hover:text-black transition"
            >
              ABOUT US
            </Link>

            <Link
              to="/"
              className="text-gray-700 text-[16px] font-medium hover:text-black transition"
            >
              PROGRAMS
            </Link>

            <Link
              to="/"
              className="text-gray-700 text-[16px] font-medium hover:text-black transition"
            >
              GET INVOLVED
            </Link>

            <Link
              to="/"
              className="text-gray-700 text-[16px] font-medium hover:text-black transition"
            >
              RESOURCES
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 text-[16px] font-medium hover:text-black transition"
            >
              CONTACT
            </Link>
          </nav>

        </div>
      </header>
    </>
  );
};

export default Navbar;
