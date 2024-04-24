import React from "react";

import Logo from "../../../public/logo.svg";
import Twitter from "../../../public/twitter.svg";
import Facebook from "../../../public/facebook.svg";
import Instagram from "../../../public/instagram.svg";
import Linkedin from "../../../public/linkedin.svg";
import Youtube from "../../../public/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="root flex justify-between items-center mb-[81px]">
        <div className="w-[29%]">
          <img src={Logo} alt="Site Logo" />
          <p className="text-[18px] text-[#848484] font-light leading-[28px] mt-6 mb-14">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="text-[#848484] text-[17px] font-light leading-[28px]">
            ©2020 Thousand Sunny. All rights reserved
          </p>
        </div>
        <div>
          <p className="text-[19px] font-bold leading-[60px]">Destinations</p>
          <ul>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Africa
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Antarctica
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Asia
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Europe
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              America
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[19px] font-bold leading-[60px]">Shop</p>
          <ul>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Destination Guides
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Pictorial & Gifts
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Special Offers
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Delivery Times
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              FAQs
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[19px] font-bold leading-[60px]">Interests</p>
          <ul>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Adventure Travel
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Art And Culture
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Wildfile And Nature
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Family Holidays
            </li>
            <li className="text-[18px] text-[#848484] font-light leading-[38px]">
              Food And Drink
            </li>
          </ul>
        </div>
      </div>
      <div className="root mb-[30px]">
        <hr className="h-[1px] bg-[#C4C4C4]" />
      </div>
      <div className="flex justify-center items-center gap-[35px]">
        <img className="cursor-pointer" src={Twitter} alt="Twitter Icon" />
        <img className="cursor-pointer" src={Facebook} alt="Facebook Icon" />
        <img className="cursor-pointer" src={Instagram} alt="Instagram Icon" />
        <img className="cursor-pointer" src={Linkedin} alt="Linkedin Icon" />
        <img className="cursor-pointer" src={Youtube} alt="Youtube Icon" />
      </div>
    </div>
  );
};

export default Footer;
