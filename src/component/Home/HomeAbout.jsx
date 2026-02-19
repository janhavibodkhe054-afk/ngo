import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animation only once
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Image */}
          <div data-aos="fade-right">
            <img
              src="https://media.istockphoto.com/id/535555239/photo/happy-indian-school-children.jpg?s=612x612&w=0&k=20&c=fcpTUHiHJuaeRS-xHJy4oOflwKpBooiPecyewzohvhk="
              alt="NGO"
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div
            className="text-center md:text-left"
            data-aos="fade-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-5">
              About Us
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              <strong>
                Mandbuddhi & Sharirik Apang Vikas Sanstha, Amravati
              </strong>{" "}
              (Est. 1981) is a registered organization dedicated to the
              education and development of children with intellectual and
              physical disabilities. With decades of service, the institution
              continues to create a nurturing environment that promotes dignity,
              independence, and equal opportunities for every child.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              The institution operates recognized special schools focused on
              inclusive education, skill development, therapy support, and
              empowering children to lead independent lives.
            </p>

            {/* Read More Button */}
            <Link
              to="/about"
              data-aos="fade-up"
              data-aos-delay="200"
              className="inline-block text-orange-500 text-lg sm:text-xl font-semibold hover:underline"
              style={{ fontFamily: "Dancing Script, cursive" }}
              onClick={() => navigate("/about")}

            >
              Read More &gt;
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
