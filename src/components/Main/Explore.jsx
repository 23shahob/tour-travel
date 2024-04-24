import React from "react";

import SecondPage from "../../../public/second-page.png";

const Explore = () => {
  return (
    <div className="flex justify-around items-center mb-[262px]">
      <div className="w-[60%]">
        <img src={SecondPage} alt="Page Img" />
      </div>
      <div className="w-[30%]">
        <h2 className="text-4xl font-bold text-[#000000] font-[Playfair] mb-5">
          A new way to explore the world{" "}
        </h2>
        <p className="text-[#7D7987] font-light font-sans mb-10">
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <button className="w-[164px] h-12 font-[Inter] bg-[#FB8F1D] rounded-lg text-white font-semibold">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Explore;
