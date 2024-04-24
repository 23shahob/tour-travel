import React from "react";

import FirstPage from "../../../public/first-page.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center mb-[270px]">
      <div>
        <h1 className="text-[#202336] font-bold text-[64px] font-['Playfair'] mb-[74px]">
          Explore and <br /> Travel
        </h1>
        <p className="text-[22px] font-semibold font-[Inter] text-[#202336] mb-5">
          Holiday finder
        </p>
        <hr className="w-8 h-[2px] bg-[#202336] rounded-[4px] border-none mb-12" />
        <div className="grid grid-cols-2 gap-8 mb-12">
          <form className="flex justify-center items-center rounded-lg w-[220px] h-[52px] border">
            <select
              name="location"
              className="border-none outline-none text-[#4A4C53] font-normal font-[Inter]"
            >
              <option value="tahskent">Location</option>
              <option value="tahskent">Toshkent</option>
              <option value="tahskent">Buxoro</option>
              <option value="tahskent">Samarqand</option>
            </select>
          </form>
          <form className="flex justify-center items-center rounded-lg w-[220px] h-[52px] border">
            <select
              name="location"
              className="border-none outline-none text-[#4A4C53] font-normal font-[Inter]"
            >
              <option value="tahskent">Activity</option>
              <option value="tahskent">Sport</option>
              <option value="tahskent">Listening music</option>
              <option value="tahskent">Relax</option>
            </select>
          </form>
          <form className="flex justify-center items-center rounded-lg w-[220px] h-[52px] border">
            <select
              name="location"
              className="border-none outline-none text-[#4A4C53] font-normal font-[Inter]"
            >
              <option value="tahskent">Grade</option>
              <option value="tahskent">The best</option>
              <option value="tahskent">High</option>
              <option value="tahskent">Low</option>
            </select>
          </form>
          <form className="flex justify-center items-center rounded-lg w-[220px] h-[52px] border">
            <select
              name="location"
              className="border-none outline-none text-[#4A4C53] font-normal font-[Inter]"
            >
              <option value="tahskent">Date</option>
              <option value="tahskent">March</option>
              <option value="tahskent">April</option>
              <option value="tahskent">May</option>
            </select>
          </form>
        </div>
        <button className="w-[180px] text-white font-bold font-mono h-[52px] rounded-lg bg-[#FB8F1D]">
          Explore
        </button>
      </div>
      <div>
        <img src={FirstPage} alt="Page Img" />
      </div>
    </div>
  );
};

export default Hero;
