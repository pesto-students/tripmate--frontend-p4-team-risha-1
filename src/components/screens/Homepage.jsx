import React from "react";
import Hero from "./sections/Hero.jsx";
import Explore from "./sections/Explore.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Bloggrid from "./sections/Bloggrid.jsx";

const Homepage = () => {
  return (
    <div className=" ">
      <Hero></Hero>
      <Explore></Explore>
      {/* <Testimonial /> */}
      <Bloggrid />
    </div>
  );
};

export default Homepage;
