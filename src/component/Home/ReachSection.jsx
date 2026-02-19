import React from "react";

const ReachSection = () => {
  return (
    <section
      className="relative -mt-100 w-full overflow-hidden bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8211.jpg?semt=ais_user_personalization&w=740&q=80')",
      }}
    >
      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-100 pb-38 text-center">

        <h2 className="text-5xl font-bold text-gray-800">
          Reach 2024-25
        </h2>

        <div className="mt-16 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <p className="text-gray-600 mb-4">Activities in</p>
            <h3 className="text-6xl font-bold text-orange-500">26</h3>
            <p className="mt-4 text-gray-700">
              states & <br /> union territories
            </p>
          </div>

          <div>
            <p className="text-gray-600 mb-4">Children reached</p>
            <h3 className="text-6xl font-bold text-orange-500">8M</h3>
            <p className="mt-4 text-gray-700">
              through direct programs and <br />
              government partnerships
            </p>
          </div>

          <div>
            <p className="text-gray-600 mb-4">Girls and women reached</p>
            <h3 className="text-6xl font-bold text-orange-500">270K</h3>
            <p className="mt-4 text-gray-700">
              through mothers' groups and <br />
              second chance program
            </p>
          </div>

          <div>
            <p className="text-gray-600 mb-4">Youth reached</p>
            <h3 className="text-6xl font-bold text-orange-500">124K</h3>
            <p className="mt-4 text-gray-700">
              through vocational/non- <br />
              vocational courses
            </p>
          </div>

        </div>
      </div>

      <div className="relative -mt-20">
        <img
          src="https://www.pratham.org/wp-content/uploads/2024/12/pratham-01-2048x852.png"
          alt="Children"
          className="w-full object-cover"
        />
      </div>

    </section>
  );
};

export default ReachSection;
