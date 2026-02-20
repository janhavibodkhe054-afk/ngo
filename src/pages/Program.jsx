import React from "react";

const Programs = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Educational Programs
          </h1>
          <p className="mt-4 text-gray-600">
            Structured initiatives designed to support intellectual, physical,
            and hearing-impaired children through specialized education.
          </p>
        </div>

        {/* ===== Timeline ===== */}
        <div className="relative border-l-2 border-gray-200 pl-10 space-y-16">

          {/* Program 1 */}
          <div className="relative" data-aos="fade-right">
            <span className="absolute -left-[11px] top-2 w-5 h-5 bg-green-600 rounded-full"></span>

            <h2 className="text-2xl font-bold text-gray-800">
              Vidyadeep Special School
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Indala Phata, Mardi Road, Amravati
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Vidyadeep Special School focuses on children with intellectual and
              developmental disabilities. The program emphasizes structured
              learning, daily routine building, and functional independence.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <p>• Individual learning plans</p>
              <p>• Motor & cognitive development</p>
              <p>• Daily living skills training</p>
              <p>• Emotional & behavioral support</p>
            </div>

            <p className="mt-4 text-sm font-semibold text-green-700">
              Government recognized by Divyang Welfare Ministry, Maharashtra
            </p>
          </div>

          {/* Program 2 */}
          <div className="relative" data-aos="fade-left">
            <span className="absolute -left-[11px] top-2 w-5 h-5 bg-green-600 rounded-full"></span>

            <h2 className="text-2xl font-bold text-gray-800">
              Nutan Mook Badhir Vidyalaya
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Indala Phata, Mardi Road, Amravati
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This program is dedicated to hearing-impaired children, focusing on
              communication development, academic education, and confidence
              building through specialized teaching methods.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <p>• Speech & communication training</p>
              <p>• Adapted academic curriculum</p>
              <p>• Social interaction activities</p>
              <p>• Self-expression & confidence building</p>
            </div>

            <p className="mt-4 text-sm font-semibold text-green-700">
              Government recognized by Divyang Welfare Ministry, Maharashtra
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Programs;