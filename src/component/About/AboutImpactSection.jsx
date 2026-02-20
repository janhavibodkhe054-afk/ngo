import React from "react";
import { Gift, Droplets, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutImpactSection = () => {
const navigate = useNavigate();
  return (
    <section className="bg-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT IMAGES */}
          <div className="relative flex gap-6 justify-center ">
            <img
              src="https://www.cry.org/wp-content/themes/cry/images/children-banner.jpg"
              alt=""
              className="w-60 h-56 object-cover rounded-lg"
              data-aos="fade-right"
            />
            <img
              src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg"
              alt=""
              className="w-48 h-64 object-cover rounded-lg mt-10"
              data-aos="fade-up"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">
            <span className="text-sm text-green-700 font-semibold flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Changing Lives <br />
              <span className="text-green-700">1 Child</span> at a Time
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl">
              We are on a mission to ensure every child has access to
              education, clean water, healthcare, and nutritious food.
              By supporting basic needs, we empower children to break
              the cycle of poverty and build a brighter future.
            </p>

            <button 
            onClick={() => navigate("/contact")}
            className="mt-6 px-6 py-3 border-2 border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            data-aos="fade-up"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
              <Gift className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Healthy Foods
            </h3>
            <p className="text-sm text-gray-600">
              Providing nutritious meals essential for children’s growth,
              development, and overall well-being.
            </p>
            <span className="mt-4 inline-flex items-center text-sm text-green-700 font-medium cursor-pointer">
              + Read More
            </span>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
              <Droplets className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Clean Water
            </h3>
            <p className="text-sm text-gray-600">
              Access to clean water prevents disease and supports
              healthy childhood development.
            </p>
            <span className="mt-4 inline-flex items-center text-sm text-green-700 font-medium cursor-pointer">
              + Read More
            </span>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
              <Stethoscope className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Medical Facilities
            </h3>
            <p className="text-sm text-gray-600">
              Ensuring access to healthcare services to support
              physical and mental well-being.
            </p>
            <span className="mt-4 inline-flex items-center text-sm text-green-700 font-medium cursor-pointer">
              + Read More
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutImpactSection;