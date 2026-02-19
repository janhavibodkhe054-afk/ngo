import React from "react";
import HeroSlider from "../component/Home/Heroslider";
import HomeAbout from "../component/Home/HomeAbout";
import ProgramsSection from "../component/Home/ProgramsSection";
import OwnerHome from "../component/Home/OwnerHome";
import ReachSection from "../component/Home/ReachSection";
import HomeBranch from "../component/Home/HomeBranch";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <HomeAbout />
      <ProgramsSection />
      <OwnerHome />
      <ReachSection/>
      <HomeBranch/>
    </div>
  );
};

export default Home;
