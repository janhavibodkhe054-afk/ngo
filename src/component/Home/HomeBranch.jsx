import React from "react";

const HomeBranch = () => {
  return (
    <section className="py-20 bg-white">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
        <span className="text-yellow-600 text-sm tracking-widest uppercase font-semibold">
          Our Branches
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Dedicated Educational Centers
        </h2>
      </div>

      {/* Compact Cards */}
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* Branch 1 */}
        <div className="group flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">

          {/* Image */}
          <div className="md:w-1/3 w-full h-56">
            <img
              src="/slide3.jpeg"
              alt="Vidyadeep Special School"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 w-full p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Vidyadeep Special School
            </h3>

            <p className="text-gray-600 text-sm leading-6 mb-3">
              Specialized education and holistic development for
              differently-abled children in Amravati.
            </p>

            <p className="text-gray-500 text-sm mb-3">
              📍 Indala Phata, Mardi Road, Amravati
            </p>

            <button className="text-yellow-600 font-semibold text-sm hover:underline">
              Learn More →
            </button>
          </div>
        </div>

        {/* Branch 2 */}
        <div className="group flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">

          {/* Image */}
          <div className="md:w-1/3 w-full h-56">
            <img
              src="/slide2.jpeg"
              alt="Nutan School for the Deaf and Mute"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 w-full p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Nutan School for the Deaf and Mute
            </h3>

            <p className="text-gray-600 text-sm leading-6 mb-3">
              Empowering hearing and speech-impaired students through
              structured learning and inclusive education.
            </p>

            <p className="text-gray-500 text-sm mb-3">
              📍 Indala Phata, Mardi Road, Amravati
            </p>

            <button className="text-yellow-600 font-semibold text-sm hover:underline">
              Learn More →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBranch;
