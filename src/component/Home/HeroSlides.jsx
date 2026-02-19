import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/slide1.jpg",
    title: "Empowering Special Children",
    description:
      "We work towards holistic development of children with intellectual and physical disabilities.",
  },
  {
    image: "/slide2.jpeg",
    title: "Care, Support & Love",
    description:
      "Providing support, therapy and inclusive opportunities for every child.",
  },
  {
    image: "/slide3.jpeg",
    title: "Inclusive Development",
    description: "Helping children grow confidently with dignity and respect.",
  },
  {
    image: "/slide4.jpg",
    title: "Strength Through Support",
    description: "Building strong communities with awareness and compassion.",
  },
  {
    image: "/slide5.jpeg",
    title: "A Brighter Tomorrow",
    description: "Committed to upliftment and empowerment of special children.",
  },
];

const HeroSlides = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-xl sm:max-w-2xl text-center sm:text-left">
                  <h1
                    data-aos="fade-up"
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-[#f6CC48] mb-4 sm:mb-6 leading-tight"
                  >
                    {slide.title}
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 leading-relaxed"
                  >
                    {slide.description}
                  </p>

                  <span
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{ fontFamily: "Dancing Script, cursive" }}
                    className="text-3xl md:text-4xl text-white hover:text-[#f6CC48] cursor-pointer transition duration-300"
                    onClick={() => navigate("/programs")}
                  >
                    Read More
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Styling */}
      <style>
        {`
          .swiper {
            height: 100%;
          }

          .swiper-pagination {
            bottom: 16px !important;
          }

          .swiper-pagination-bullet {
            background-color: white;
            opacity: 0.6;
            width: 8px;
            height: 8px;
          }

          @media (min-width: 768px) {
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
            }
          }

          .swiper-pagination-bullet-active {
            background-color: #f6CC48;
            opacity: 1;
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSlides;
