import React from "react";
import Hero from "./Hero";
import Explore from "./Explore";
import Destinations from "./Destinations";
import Guides from "./Guides";
import Testimonial from "./Testimonial";
import Trending from "./Trending";

const Main = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <Destinations />
      <Guides />
      <Testimonial />
      <Trending />
    </div>
  );
};

export default Main;
