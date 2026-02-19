import React from "react";

const HomeBranch = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f8f7f3] to-white overflow-hidden">

      {/* Soft Decorative Shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-yellow-600 font-semibold tracking-widest uppercase">
            Our Branches
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Dedicated Educational Centers
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Branch 1 */}
        <div className="mb-24 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">

          <div className="md:flex items-center">
            
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/slide3.jpeg"
                alt="Vidyadeep Special School"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Vidyadeep Special School
              </h3>

              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>

              <p className="text-gray-600 leading-8 mb-4">
                Operated by Mandbudhi Va Sharirik Apang Vikas Sanstha,
                Amravati, this institution is committed to providing
                specialized education and holistic development for
                differently-abled children.
              </p>

              <p className="text-gray-600 leading-8 mb-4">
                Location: Indala Phata, Mardi Road, Amravati.
              </p>

              <p className="font-medium text-gray-800">
                Recognized by the Ministry of Social Justice & Disability
                Welfare, Government of Maharashtra.
              </p>
            </div>

          </div>
        </div>

        {/* Branch 2 */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">

          <div className="md:flex flex-row-reverse items-center">
            
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/slide2.jpeg"
                alt="Nutan School for the Deaf and Mute"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Nutan School for the Deaf and Mute
              </h3>

              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>

              <p className="text-gray-600 leading-8 mb-4">
                This branch focuses on empowering hearing and speech-impaired
                students through structured learning, communication training,
                and inclusive educational support.
              </p>

              <p className="text-gray-600 leading-8 mb-4">
                Location: Indala Phata, Mardi Road, Amravati.
              </p>

              <p className="font-medium text-gray-800">
                Recognized by the Ministry of Social Justice & Disability
                Welfare, Government of Maharashtra.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBranch;
