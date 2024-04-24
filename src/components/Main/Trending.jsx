import React from "react";
import Arrow from "../../../public/right.svg";
import One from "../../../public/one.png";
import Two from "../../../public/two.png";
import Three from "../../../public/three.png";
import Four from "../../../public/four.png";

const Trending = () => {
  return (
    <div className="mb-48">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-4xl font-[Playfair] font-bold">Trending stories</h3>
        <div className="flex justify-center items-center gap-3 cursor-pointer">
          <p className="font-semibold font-[Inter] text-[#FB8F1D]">View all</p>
          <img src={Arrow} alt="Arrow Icon" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[330px] p-1">
          <img
            className="rounded-t-xl w-[320px] h-[320px]"
            src={One}
            alt="Card Img"
          />
          <h5 className="text-[19px] font-bold font-[Inter] leading-8 mb-3 mt-3">
            The many benefits of taking a healing holiday
          </h5>
          <p className="text-[#7D7987] font-normal font-[Inter] text-[15px] leading-[26px] mb-6">
            ‘Helaing holidays’ are on the rise to help maximise your health and
            happines...
          </p>
          <button className="text-[15px] font-semibold text-[#FB8F1D] font-[Inter]">
            Read more
          </button>
        </div>
        <div className="w-[330px] p-1">
          <img
            className="rounded-t-xl w-[320px] h-[320px]"
            src={Two}
            alt="Card Img"
          />
          <h5 className="text-[19px] font-bold font-[Inter] leading-8 mb-3 mt-3">
            The best Kyoto restaurant to try Japanese food
          </h5>
          <p className="text-[#7D7987] font-normal font-[Inter] text-[15px] leading-[26px] mb-6">
            From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit...
          </p>
          <button className="text-[15px] font-semibold text-[#FB8F1D] font-[Inter]">
            Read more
          </button>
        </div>
        <div className="w-[330px] p-1">
          <img
            className="rounded-t-xl w-[320px] h-[320px]"
            src={Three}
            alt="Card Img"
          />
          <h5 className="text-[19px] font-bold font-[Inter] leading-8 mb-3 mt-3">
            Skip Chichen Itza and head to this remote Yucatan
          </h5>
          <p className="text-[#7D7987] font-normal font-[Inter] text-[15px] leading-[26px] mb-6">
            It’s remote and challenging to get, but braving jungle and exploring
            without the...
          </p>
          <button className="text-[15px] font-semibold text-[#FB8F1D] font-[Inter]">
            Read more
          </button>
        </div>
        <div className="w-[330px] p-1">
          <img
            className="rounded-t-xl w-[320px] h-[320px]"
            src={Four}
            alt="Card Img"
          />
          <h5 className="text-[19px] font-bold font-[Inter] leading-8 mb-3 mt-3">
            Surf’s up at these beginner spots around the world
          </h5>
          <p className="text-[#7D7987] font-normal font-[Inter] text-[15px] leading-[26px] mb-6">
            If learning to surf has in on your to- do list for a while, the good
            news is: it’s never too late...
          </p>
          <button className="text-[15px] font-semibold text-[#FB8F1D] font-[Inter]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
