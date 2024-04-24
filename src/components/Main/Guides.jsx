import React from "react";

import ThirdPage from "../../../public/third-page.png";

const Guides = () => {
  return (
    <div className="flex justify-between items-center mb-60">
      <div className="w-[35%]">
        <h3 className="text-4xl font-bold font-[Playfair] mb-5">
          Guides by Thousand <br /> Sunny
        </h3>
        <p className="text-[#7D7987] font-light font-mono leading-8 mb-10">
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <button className="w-[164px] h-12 text-white font-semibold bg-[#FB8F1D] rounded-lg">
          Download
        </button>
      </div>
      <div className="w-[45%]">
        <img src={ThirdPage} alt="Page Img" />
      </div>
    </div>
  );
};

export default Guides;
