import React from "react";

const HomeAbout = () => {
  return (
    <section className="bg-white py-28">
      {/* Centered Container (Reduced Width) */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk="
              alt="NGO"
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Heading on Right Side */}
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              <strong>
                Mandbuddhi & Sharirik Apang Vikas Sanstha, Amravati
              </strong>
              (Est. 1981) is a registered organization dedicated to the
              education and development of children with intellectual and
              physical disabilities. With decades of service, the institution
              continues to create a nurturing environment that promotes dignity,
              independence, and equal opportunities for every child.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              The institution operates recognized special schools focused on
              inclusive education, skill development, therapy support, and
              empowering children to lead independent lives.
            </p>

            {/* Read More Text */}
            <p style={{ fontFamily: "Dancing Script, cursive" }}
             className="text-orange-500 text-xl font-semibold cursor-pointer hover:underline">
              Read More &gt;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;



