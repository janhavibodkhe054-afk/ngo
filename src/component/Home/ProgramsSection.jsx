import React from "react";

const ProgramsSection = () => {
  return (
    <section className="bg-white">

      {/* Heading */}
      <div className="text-center pb-10">
        <h2 className="text-5xl font-bold text-gray-800">
          Our Programs
        </h2>
      </div>

      {/* Content Row */}
      <div className="grid md:grid-cols-2 items-center bg-[#e9e9e9]">

        {/* Left Image */}
        <div>
          <img
            src="/slide5.jpeg"
            alt="Education"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="px-16 py-16">
          <h3 className="text-4xl font-medium text-gray-800 mb-6">
            Education
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From Early Childhood Education to Elementary Education, Pratham
            identifies education-related gaps and opportunities in each segment
            and develops context-based solutions. We collaborate with children,
            schools, families, and communities through direct programs and
            government partnerships.
          </p>

          <span className="text-orange-500 text-2xl font-medium italic cursor-pointer">
            Read More &gt;
          </span>
        </div>

      </div>

    </section>
  );
};

export default ProgramsSection;
