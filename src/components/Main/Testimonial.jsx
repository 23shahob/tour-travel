import React from "react";

import Stars from "../../../public/stars.svg";
import Photo from "../../../public/photo.png";

const Testimonial = () => {
  return (
    <div className="mb-52">
      <h3 className="text-4xl font-bold font-[Playfair] mb-14">Testimonials</h3>
      <div className="flex justify-between items-center">
        <div className="w-[35%]">
          <img className="mb-8" src={Stars} alt="Stars Icon" />
          <p className="text-2xl font-normal leading-9 mb-10">
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
            ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet
            turpis nec”
          </p>
          <strong className="text-[22px] font-bold font-[Inter]">
            Edward Newgate
          </strong>
          <p className="text-[18px] font-normal font-[Inter]">Founder Circle</p>
        </div>
        <div>
          <img src={Photo} alt="Person Img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
