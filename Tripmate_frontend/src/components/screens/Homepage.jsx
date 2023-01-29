import React from "react";
import Hero from "./sections/Hero";
import Explore from "./sections/Explore";
import Testimonial from "./sections/Testimonial";
import Bloggrid from "./sections/Bloggrid";

const Homepage = () => {
  return (
    <div className=" ">
      <Hero></Hero>
      <Explore></Explore>
      <Testimonial />
      <Bloggrid />
    </div>
  );
};

export default Homepage;
