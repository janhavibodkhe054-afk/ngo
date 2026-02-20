import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-yellow-100/30 overflow-hidden h-170">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="-ml-24">
          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 leading-tight">
            Change Today… <br />
            Change Tomorrow
          </h1>

          {/* Description */}
          <p className="mt-8 text-gray-600 leading-relaxed max-w-xl">
            The Mental & Physically Challenged Development Institute, Amravati
            is committed to empowering individuals with intellectual and
            physical disabilities through care, education, and structured
            development programs.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            We focus on holistic growth by nurturing abilities, strengthening
            confidence, and encouraging social inclusion to help every
            individual live with dignity and purpose.
          </p>

          {/* CTA */}
          <button className="mt-12 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
            Join the Movement
          </button>
        </div>

        {/* ================= RIGHT IMAGE AREA (BALANCED & CLEAN) ================= */}
        <div className="relative flex justify-center items-center">
          {/* Soft Background Panel */}
          <div className="absolute w-[520px] h-[360px] bg-yellow-100/70 rounded-[100px]"></div>

          {/* Images Container */}
          <div className="relative flex items-center">
            {/* Small Circle (Left – Fully Visible) */}
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg border-8 border-[#FFFEF5] mt-58 ml-58">
              <img
                src="https://media.istockphoto.com/id/1162324751/photo/indian-girl.jpg?s=612x612&w=0&k=20&c=V8I7TZmr5JEB32QPzA1_VbEq7G10XD4xc4pgpJ_W9vU="
                alt="Smiling Child"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Big Circle (Right – Primary Focus) */}
            <div className="w-[380px] h-[380px] rounded-full overflow-hidden shadow-xl border-8 border-white mr-12">
              <img
                src="https://udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg"
                alt="Child Development Activities"
                className="w-full h-full object-cover mr-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
