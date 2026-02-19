import React from "react";

const OwnerHome = () => {
  return (
    <section className="relative z-20 -mt-32 py-16 bg-transparent">

      {/* Reduced overall width */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Card 1 */}
          <div className="group bg-white shadow-lg transition duration-300 hover:-translate-y-2 overflow-hidden border-t border-b border-l border-yellow-400">
            
            <div className="bg-gray-50 flex justify-center items-center p-5">
              <img
                src="/owner1.png"
                alt="President"
                className="w-full h-64 object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="py-4 text-center border-t border-yellow-400 hover:bg-yellow-400">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                President
              </h3>

              <p className="mt-2 text-base font-medium text-gray-800 leading-snug">
                Prof. Shri Sanjayrao <br />
                Krishnarao Gudhe
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="group bg-white shadow-lg transition duration-300 hover:-translate-y-2 overflow-hidden border-t border-b border-r border-yellow-400">
            
            <div className="bg-gray-50 flex justify-center items-center p-5">
              <img
                src="/owner2.png"
                alt="Secretary"
                className="w-full h-64 object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="py-4 text-center border-t border-yellow-400 hover:bg-yellow-400">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Secretary
              </h3>

              <p className="mt-2 text-base font-medium text-gray-800 leading-snug">
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
