import React from "react";

const OwnerHome = () => {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 py-12 sm:py-16 bg-transparent">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Card 1 */}
          <div className="group bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden border border-yellow-400 rounded-lg">
            
            {/* Image */}
            <div className="bg-gray-50 flex justify-center items-center p-4 sm:p-5">
              <img
                src="/owner1.png"
                alt="President"
                className="w-full max-h-[220px] sm:max-h-[250px] md:max-h-[280px] object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-4 text-center border-t border-yellow-400 group-hover:bg-yellow-400 transition duration-300">
              
              <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest group-hover:text-black">
                President
              </h3>

              <p className="mt-2 text-sm sm:text-base font-medium text-gray-800 leading-snug group-hover:text-black">
                Prof. Shri Sanjayrao <br />
                Krishnarao Gudhe
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden border border-yellow-400 rounded-lg">
            
            {/* Image */}
            <div className="bg-gray-50 flex justify-center items-center p-4 sm:p-5">
              <img
                src="/owner2.png"
                alt="Secretary"
                className="w-full max-h-[220px] sm:max-h-[250px] md:max-h-[280px] object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-4 text-center border-t border-yellow-400 group-hover:bg-yellow-400 transition duration-300">
              
              <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest group-hover:text-black">
                Secretary
              </h3>

              <p className="mt-2 text-sm sm:text-base font-medium text-gray-800 leading-snug group-hover:text-black">
                Shri Abhijit Narayanrao <br />
                Deshmukh
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OwnerHome;
