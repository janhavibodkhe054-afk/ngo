import React, { useEffect } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const HomeBranch = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section
      className="relative py-14 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdHAyNDQtYmcxLTAxXzEuanBn.jpg')",
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Decorative Background Blur */}
      <div className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div
          className="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <span className="text-yellow-600 text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase font-semibold">
            Our Branches
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 sm:mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Centers of Excellence & Care
          </h2>

          <p
            className="text-gray-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dedicated institutions focused on inclusive education,
            empowerment, and holistic development of every child.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* Branch 1 */}
          <div
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100"
            data-aos="fade-up"
          >
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <img
                src="/slide3.jpeg"
                alt="Vidyadeep Special School"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold">
                  Vidyadeep Special School
                </h3>
                <p className="text-xs sm:text-sm opacity-90">
                  Amravati
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <p className="text-gray-600 leading-relaxed text-sm mb-5 sm:mb-6">
                Specialized education and holistic development programs
                designed for differently-abled children, ensuring
                confidence, independence, and growth.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-gray-500 text-xs sm:text-sm">
                  📍 Indala Phata, Mardi Road
                </span>

                <button
                  className="bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  onClick={() => navigate("/contact")}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>

          {/* Branch 2 */}
          <div
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <img
                src="/slide2.jpeg"
                alt="Nutan School for the Deaf and Mute"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold">
                  Nutan School for the Deaf and Mute
                </h3>
                <p className="text-xs sm:text-sm opacity-90">
                  Amravati
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <p className="text-gray-600 leading-relaxed text-sm mb-5 sm:mb-6">
                Empowering hearing and speech-impaired students through
                structured academic programs and inclusive learning
                practices that nurture communication and life skills.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-gray-500 text-xs sm:text-sm">
                  📍 Indala Phata, Mardi Road
                </span>

                <button
                  className="bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  onClick={() => navigate("/contact")}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeBranch;
