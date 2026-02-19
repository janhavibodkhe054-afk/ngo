import React from "react";

const CareSection = () => {
  return (
    <section className="w-full">

      <div className="flex flex-col md:flex-row w-full relative">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full h-[450px] md:h-[600px] relative">
          <img
            src="https://gweka.com/wp-content/uploads/2021/01/Ngo-Not-for-Profit-CSR-and-Social-Services-Jobs-in-India-1024x346.jpg"   // change to your image
            alt="Care"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 w-full bg-[#2f2f2f] text-white flex items-center">
          <div className="px-10 md:px-16 py-16 max-w-xl">

            <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
              Kindness Towards Humanity
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WHO WE CARE
            </h2>

            <div className="w-16 h-1 bg-yellow-500 mb-8"></div>

            <p className="text-gray-300 leading-7 mb-6">
              We are a group of volunteers trying to help helpless people not
              only by monetary support but by providing education, focus and
              ideas. We are not enough to help countless people who are seeking
              attention and care.
            </p>

            <p className="text-gray-300 leading-7 mb-10">
              Our mission is to empower underprivileged communities by building
              opportunities and spreading awareness. We welcome more
              volunteers to join us in helping those in need.
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transition duration-300">
              LEARN MORE
            </button>

          </div>
        </div>

        {/* CENTER SMALL IMAGE (DIVIDER STYLE) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            src="/logo.avif"   // small center image
            alt="Icon"
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>

      </div>

    </section>
  );
};

export default CareSection;
