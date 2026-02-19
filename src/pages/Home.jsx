import React from "react";
import HeroSlides from "../component/Home/HeroSlides";
import HomeAbout from "../component/Home/HomeAbout";
import ProgramsSection from "../component/Home/ProgramsSection";
import OwnerHome from "../component/Home/OwnerHome";
import ReachSection from "../component/Home/ReachSection";
import HomeBranch from "../component/Home/HomeBranch";
import CareSection from "../component/Home/CareSection";

const Home = () => {
  return (
    <div>
      <HeroSlides />
      <HomeAbout />
      <ProgramsSection />
      <OwnerHome />
      <ReachSection/>
      <CareSection/>
      <HomeBranch/>
    </div>
  );
};

export default Home;
