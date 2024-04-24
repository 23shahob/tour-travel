import React from "react";

import Arrow from "../../../public/right.svg";

const Destinations = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-14">
        <h3 className="text-4xl font-[Playfair] font-bold">
          Featured destinations
        </h3>
        <div className="flex justify-center items-center gap-3 cursor-pointer">
          <p className="font-semibold font-[Inter] text-[#FB8F1D]">View all</p>
          <img src={Arrow} alt="Arrow Icon" />
        </div>
      </div>
      <div className="flex justify-between mb-44">
        <div className="cards relative">
          <div className="absolute w-[120px] h-14 bg-white bottom-0 rounded-tr-lg pt-3">
            <h5 className="text-[#042521] text-[17px] font-semibold">
              Raja Ampat
            </h5>
            <p className="text-[#80918E] text-[15px] font-medium">Indonesia</p>
          </div>
        </div>
        <div className="cards relative">
          <div className="absolute w-[120px] h-14 bg-white bottom-0 rounded-tr-lg pt-3">
            <h5 className="text-[#042521] text-[17px] font-semibold">
              Fanjingshan
            </h5>
            <p className="text-[#80918E] text-[15px] font-medium">China</p>
          </div>
        </div>
        <div className="cards relative">
          <div className="absolute w-[120px] h-14 bg-white bottom-0 rounded-tr-lg pt-3">
            <h5 className="text-[#042521] text-[17px] font-semibold">Vevey</h5>
            <p className="text-[#80918E] text-[15px] font-medium">
              Switzerland
            </p>
          </div>
        </div>
        <div className="cards relative">
          <div className="absolute w-[120px] h-14 bg-white bottom-0 rounded-tr-lg pt-3">
            <h5 className="text-[#042521] text-[17px] font-semibold">Skadar</h5>
            <p className="text-[#80918E] text-[15px] font-medium">Montenegro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
