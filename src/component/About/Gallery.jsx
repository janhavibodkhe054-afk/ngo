import React from "react";

const Gallery = () => {
  return (
    <section
      className="relative py-28 overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://savioursfoundation.org/wp-content/uploads/2021/03/teach-for-india-1024x576.jpg')", // <-- your background image
      }}
    >
      {/* ===== Soft Overlay for Readability ===== */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* ===== Decorative Shapes ===== */}


      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">

        {/* ===== Heading ===== */}
        <div className="mb-16 max-w-3xl" data-aos="fade-right">
          <p className="text-sm font-semibold text-white mb-3">
            Life at Our Institute
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Small Efforts, <br className="hidden md:block" />
            Meaningful Transformations
          </h2>
          <p className="mt-5 text-white">
            Every image reflects our commitment to dignity, care, and
            development for mentally and physically challenged individuals.
          </p>
        </div>

        {/* ===== Gallery Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ===== Featured Image ===== */}
          <div
            data-aos="zoom-in"
            className="relative rounded-3xl overflow-hidden shadow-xl bg-white"
          >
            <img
              src="/gallery1.jpeg"
              alt="Main Activity"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow">
              <p className="text-sm font-semibold text-gray-800">
                Daily Care & Training
              </p>
            </div>
          </div>

          {/* ===== Side Images ===== */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { img: "/gallery2.jpeg", title: "Skill Development" },
              { img: "/gallery3.jpeg", title: "Learning Support" },
              { img: "/slide5.jpeg", title: "Therapy Sessions" },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[190px] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

            <div className="hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;