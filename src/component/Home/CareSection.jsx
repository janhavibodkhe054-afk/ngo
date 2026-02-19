import React, { useEffect } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const CareSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animation only once
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="w-full overflow-hidden">

      <div className="flex flex-col lg:flex-row w-full relative">

        {/* LEFT IMAGE */}
        <div
          className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          data-aos="fade-right"
        >
          <img
            src="https://gweka.com/wp-content/uploads/2021/01/Ngo-Not-for-Profit-CSR-and-Social-Services-Jobs-in-India-1024x346.jpg"
            alt="Care"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="w-full lg:w-1/2 bg-[#2f2f2f] text-white flex items-center"
          data-aos="fade-left"
        >
          <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 max-w-2xl mx-auto">

            <p
              className="uppercase tracking-widest text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4"
              data-aos="fade-up"
            >
              Kindness Towards Humanity
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              WHO WE CARE
            </h2>

            <div
              className="w-14 sm:w-16 h-1 bg-yellow-500 mb-6 sm:mb-8"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>

            <p
              className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              We are a group of volunteers trying to help helpless people not
              only by monetary support but by providing education, focus and
              ideas. We are not enough to help countless people who are seeking
              attention and care.
            </p>

            <p
              className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our mission is to empower underprivileged communities by building
              opportunities and spreading awareness. We welcome more
              volunteers to join us in helping those in need.
            </p>

            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base transition duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={() => navigate("/involve")}
            >
              LEARN MORE
            </button>

          </div>
        </div>

        {/* CENTER SMALL IMAGE */}
        <div
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img
            src="/logo.avif"
            alt="Icon"
            className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>

      </div>

    </section>
  );
};

export default CareSection;
