import React from "react";
import { HeartHandshake, HandCoins, Users } from "lucide-react";

const AboutCards = () => {
  return (
    <section className="relative bg-transparent py-28 -mt-110 z-30">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">

        {/* Title */}
        <div className="relative z-20 text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            We Are a Non-Profit Charity & NGO Organization
          </h2>
        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-lg">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4">
              <HeartHandshake className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Care & Support
            </h3>
            <p className="text-sm text-gray-600">
              Providing emotional, medical, and developmental support to
              mentally and physically challenged individuals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-lg md:mt-8">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4">
              <HandCoins className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Skill Development
            </h3>
            <p className="text-sm text-gray-600">
              Training programs designed to improve independence, confidence,
              and employable skills.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-lg">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
              <Users className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Community Inclusion
            </h3>
            <p className="text-sm text-gray-600">
              Encouraging social participation and awareness to build an
              inclusive and compassionate society.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCards;