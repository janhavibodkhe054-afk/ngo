import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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
    description:
      "Helping children grow confidently with dignity and respect.",
  },
  {
    image: "/slide4.jpg",
    title: "Strength Through Support",
    description:
      "Building strong communities with awareness and compassion.",
  },
  {
    image: "/slide5.jpeg",
    title: "A Brighter Tomorrow",
    description:
      "Committed to upliftment and empowerment of special children.",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden z-10">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">

              {/* Background */}
              <img
                src={slide.image}
                alt="slide"
                className="absolute w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 max-w-3xl">
                <h1 className="text-4xl md:text-6xl text-[#f6CC48] mb-6 font-serif">
                  {slide.title}
                </h1>

                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-sans">
                  {slide.description}
                </p>

                <span className="text-3xl md:text-4xl text-white hover:text-[#f6CC48] cursor-pointer transition duration-300">
                  Read More
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style>
        {`
          .swiper {
            height: 100%;
          }

          .swiper-wrapper {
            height: 100%;
          }

          .swiper-pagination {
            bottom: 20px !important;
          }

          .swiper-pagination-bullet {
            background-color: white;
            opacity: 0.7;
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
          }

          .swiper-pagination-bullet-active {
            background-color: #f6CC48;
            opacity: 1;
            transform: scale(1.2);
            transition: 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSlider;
