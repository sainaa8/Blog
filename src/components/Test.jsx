import Image from "next/image";
import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";
import { slideData } from "./IntroSlider";
import { useState } from "react";
 
export const IntroPic = (props) => {
  const [current, setCurrent] = useState(0);
 
  const nextSlide = () => {
    setCurrent(current + 1);
  };
  const previousSlide = () => {
    setCurrent(current - 1);
  };
 
  return (
    <>
      <div
        className="flex h-[600px] w-304 duration-700"
        style={{ marginLeft: current === 0 ? "0px" : `-${current * 1216}px` }}
      >
        <div className="absolute left-0 w-[130px] z-20 h-[600px] bg-white" />
        <div className="flex h-full w-full">
          {slideData.map(({ img, text, title }, index) => (
            <div
              key={index}
              className="hidden md:flex flex-col w-full relative shrink-0 h-full"
            >
              <Image src={img} layout="fill" objectFit="contain" alt="" />
              <div className="rounded-md bg-white w-[598px] h-[252px] p-10 flex flex-col gap-4 absolute bottom-2 left-2">
                <p className="text-[#fff] text-sm bg-[#4B6BFB] w-[97px] h-7 py-1 rounded-md flex justify-center">
                  {title}
                </p>
                <p className="text-4xl">{text}</p>
                <p className="text-[#97989F] text-base">January 15, 2024</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 w-[130px] z-20 h-[600px] bg-white" />
      </div>
      <div className="flex ml-auto">
        <button disabled={current === 0} onClick={previousSlide}>
          <CiSquareChevLeft className="w-10 h-10" color="#696A75" />
        </button>
        <button disabled={current === slideData.length - 1} onClick={nextSlide}>
          <CiSquareChevRight className="w-10 h-10 " color="#696A75" />
        </button>
      </div>
    </>
  );
};
 