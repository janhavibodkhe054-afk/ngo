import React, { useEffect } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const ProgramsSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="bg-white">

      {/* Heading */}
      <div
        className="text-center px-4 sm:px-6 pb-8 sm:pb-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Our Programs
        </h2>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#e9e9e9]">

        {/* Image */}
        <div
          className="w-full"
          data-aos="fade-right"
        >
          <img
            src="/slide5.jpeg"
            alt="Education"
            className="w-full h-64 sm:h-72 md:h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16"
          data-aos="fade-left"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-4 sm:mb-6">
            Education
          </h3>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            From Early Childhood Education to Elementary Education, Pratham
            identifies education-related gaps and opportunities in each segment
            and develops context-based solutions. We collaborate with children,
            schools, families, and communities through direct programs and
            government partnerships.
          </p>

          <button
            className="text-orange-500 text-lg sm:text-xl md:text-2xl font-medium italic hover:underline transition"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => navigate("/programs")}
          >
            Explore Programs →
          </button>
        </div>

      </div>

    </section>
  );
};

export default ProgramsSection;
