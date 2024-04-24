import React from "react";

import Logo from "../../../public/logo.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pt-9 mb-16">
      <div>
        <img src={Logo} alt="Site Logo" />
      </div>
      <div className="flex gap-9">
        <ul className="flex items-center gap-8">
          <li className="text-[#202336] font-normal font-[Inter] hover: font-medium">
            Home{" "}
          </li>
          <li className="text-[#B8BECD] font-normal font-[Inter] hover:text-[#202336] hover: font-medium">
            Destinations
          </li>
          <li className="text-[#B8BECD] font-normal font-[Inter] hover:text-[#202336] hover: font-medium">
            About
          </li>
          <li className="text-[#B8BECD] font-normal font-[Inter] hover:text-[#202336] hover: font-medium">
            Partner
          </li>
        </ul>
        <div className="flex gap-5">
          <button className="font-medium text-[#FB8F1D] font-[Inter] px-9 py-3 rounded-lg border border-[#FB8F1D] hover:bg-[#FB8F1D] hover:text-[#FFFFFF]">
            Login
          </button>
          <button className="font-medium bg-[#FB8F1D] font-[Inter] px-9 py-3 rounded-lg text-[#FFFFFF]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
