import Image from "next/legacy/image";
import { useState } from "react";
import "flowbite";
const BigPhotos = (props) => {
  const { img, mood, desc, date } = props;
  return (
    <div className={`mx-auto relaitve mt-[100px] gap-[20px] flex-col `}>
      <div className="relative w-[1216px] h-[600px]">
        <Image src={img} layout="fill" />
        <div className="absolute z-[10] bottom-[10px] left-[10px] w-[598px] h-[252px] flex flex-col items-center justify-center rounded-lg  bg-white">
          <div className="w-[518px] h-[124px] flex flex-col gap-[16px]">
            <div className="bg-indigo-500 w-[100px] h-[28px] flex justify-center items-center rounded-lg">
              <div>{mood}</div>
            </div>
            <div className="h-[80px] w-[500px] text-[36px] font-sans font-bold">
              {desc}
            </div>
          </div>
          <div className="text-gray-500 font-light mt-[28px] w-[518px] text-[20px]">
            <div className="workSans">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FirstPage = (props) => {
  const {} = props;
  const myPics = [
    {
      imgsrc: "/first.png",
      mood: "Technology",
      desc: "Grid system for better Design User Interfac",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/castle.png",
      mood: "design",
      desc: "Grid system for better Design User Interfac",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/Image.png",
      mood: "design",
      desc: "Grid system for better Design User Interfac",
      date: "August 20, 2022",
    },
  ];
  let count = 0;
  const [counter, setCounter] = useState(0);
  const next = () => {
    // if (count === myPics.length - 1) {
    //   count = myPics.length - 1;
    // } else {
      count++;
      console.log(myPics.length);
      setCounter(count);
    // }
    // alert(currect);
  };
  const prev = () => {
    // if (count === 0) {
    //   console.log(count);
    //   count = 0;
    // } else {
      count--;
      setCounter(count);
      console.log(myPics.length);
      console.log(count);
    // }
  };
  console.log(myPics);
  return (
    <div className="hidden md:flex flex-col ">
      <div id="animation-carousel" className="flex w-[1216px]   ">
        <div>
          <div className={`mx-auto relaitve mt-[100px] gap-[20px] flex-col `}>
            <div className="relative w-[1216px] h-[600px]">
              <Image src={`${myPics[counter].imgsrc}`} layout="fill" />
              <div className="absolute z-[10] bottom-[10px] left-[10px] w-[598px] h-[252px] flex flex-col items-center justify-center rounded-lg  bg-white">
                <div className="w-[518px] h-[124px] flex flex-col gap-[16px]">
                  <div className="bg-indigo-500 w-[100px] h-[28px] flex justify-center items-center rounded-lg">
                    <div>sff</div>
                  </div>
                  <div className="h-[80px] w-[500px] text-[36px] font-sans font-bold">
                    sdfa
                  </div>
                </div>
                <div className="text-gray-500 font-light mt-[28px] w-[518px] text-[20px]">
                  <div className="workSans">sadf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1216px] flex justify-end">
        <div className="flex gap-[10px]">
          <div
            onClick={() => {
              prev();
            }}
            className="relative w-[40px] h-[40px] border border-black rounded "
          >
            <Image src="/<.svg" layout="fill" />
          </div>
          <div
            onClick={() => {
              next();
            }}
            className="relative w-[40px] h-[40px] border border-black rounded"
          >
            <Image src="/>.svg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
////////////////////////////
//////////////////////

/////

////////
