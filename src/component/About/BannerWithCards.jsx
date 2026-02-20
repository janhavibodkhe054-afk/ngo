import React from "react";

const BannerWithCards = () => {
  return (
    <div className="relative">

      {/* ================= BANNER SECTION ================= */}
      <section
        className="w-full h-[300px] bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{
          backgroundImage:
            "url('https://savioursfoundation.org/wp-content/uploads/2021/03/teach-for-india-1024x576.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      
      {/* Bottom spacing */}
      <div className="h-32"></div>

    </div>
  );
};

export default BannerWithCards;