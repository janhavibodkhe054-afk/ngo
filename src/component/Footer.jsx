import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f4f1ee] text-gray-700">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">

        {/* GRID */}
        <div className="grid gap-12 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-5">

          {/* 1️⃣ Organization */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg border-b-2 border-yellow-500 inline-block pb-1">
              Organization
            </h3>
            <p className="text-sm leading-relaxed">
              Mandbudhi Va Sharirik Apang Vikas Sanstha, Amravati <br />
              Registration No.: Maharashtra F946 / 1981 (Amravati)
            </p>
          </div>

          {/* 2️⃣ School 1 */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg border-b-2 border-yellow-500 inline-block pb-1">
              Vidyadeep Special School
            </h3>
            <p className="text-sm leading-relaxed">
              Indala Phata, Mardi Road, Amravati <br />
              Recognized by the Ministry of Social Justice & Disability Welfare,
              Government of Maharashtra
            </p>
          </div>

          {/* 3️⃣ School 2 */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg border-b-2 border-yellow-500 inline-block pb-1">
              Nutan School for the Deaf and Mute
            </h3>
            <p className="text-sm leading-relaxed">
              Indala Phata, Mardi Road, Amravati <br />
              Recognized by the Ministry of Social Justice & Disability Welfare,
              Government of Maharashtra
            </p>
          </div>

          {/* 4️⃣ Donation */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-yellow-400 space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">
              Donation Details
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Bank:</strong> Central Bank of India <br />
              <strong>Account Name:</strong> Mandbudhi VA Sharirik Vikas Sastan <br />
              <strong>Account No:</strong> 5245073756 <br />
              <strong>IFSC:</strong> CBIN0283671
            </p>
          </div>

          {/* 5️⃣ Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg border-b-2 border-yellow-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-yellow-600 transition">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/involve" className="hover:text-yellow-600 transition">
                  Get Invived
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-yellow-700 font-semibold hover:text-yellow-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t mt-14 pt-6 text-center text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} Mandbudhi & Sharirik Apang Vikas Sanstha, Amravati. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
