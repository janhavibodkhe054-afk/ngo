import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f4f1ee] pt-16 pb-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 text-gray-700">

        {/* Column 1 - Organization Info */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 border-l-4 border-yellow-500 pl-3">
            Organization
          </h3>
          <p className="leading-7 text-sm">
            Mandbudhi Va Sharirik Apang Vikas Sanstha, Amravati <br />
            Registration No.: Maharashtra F946 / 1981 (Amravati)
          </p>
        </div>

        {/* Column 2 - School 1 */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 border-l-4 border-yellow-500 pl-3">
            Vidyadeep Special School
          </h3>
          <p className="leading-7 text-sm">
            Run by Mandbudhi Va Sharirik Apang Vikas Sanstha, Amravati <br />
            Indala Phata, Mardi Road, Amravati <br />
            Recognized by the Ministry of Social Justice & Disability Welfare,
            Government of Maharashtra
          </p>
        </div>

        {/* Column 3 - School 2 */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 border-l-4 border-yellow-500 pl-3">
            Nutan School for the Deaf and Mute
          </h3>
          <p className="leading-7 text-sm">
            Run by Mandbudhi Va Sharirik Apang Vikas Sanstha, Amravati <br />
            Indala Phata, Mardi Road, Amravati <br />
            Recognized by the Ministry of Social Justice & Disability Welfare,
            Government of Maharashtra
          </p>
        </div>

        {/* Column 4 - Donation Details (Highlighted) */}
        <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-yellow-500">
          <h3 className="font-bold mb-4 text-gray-900">
            Donation Details
          </h3>
          <p className="leading-7 text-sm">
            <strong>Bank:</strong> Central Bank of India <br />
            <strong>Account Name:</strong> Mandbudhi VA Sharirik Vikas Sastan <br />
            <strong>Authorized Person:</strong> Mr. Sanjay Krishnarao Gudadhe <br />
            <strong>Account No:</strong> 5245073756 <br />
            <strong>IFSC Code:</strong> CBIN0283671
          </p>
        </div>

        {/* Column 5 - Quick Links */}
        <div>
          <h3 className="font-bold mb-4 text-gray-900 border-l-4 border-yellow-500 pl-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-600 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-600 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="text-yellow-700 font-semibold hover:text-yellow-600 transition duration-300"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Mandbudhi Va Sharirik Apang Vikas Sanstha, Amravati. All Rights Reserved.
      </div>
      
    </footer>
  );
};

export default Footer;
