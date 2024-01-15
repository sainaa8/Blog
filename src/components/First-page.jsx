import Image from "next/image";
export const FirstPage = () => {
  return (
    <div className="   mx-auto  mt-[100px] hidden md:flex gap-[20px] flex-col">
      <div className="relative w-[1216px] h-[600px]">
        <Image src="/first.png" width={1216} height={600} />
        <div className="absolute z-[10] bottom-[10px] left-[10px] w-[598px] h-[252px] flex flex-col items-center justify-center rounded-lg  bg-white">
          <div className="w-[518px] h-[124px] gap-[16px]">
            <div className="bg-indigo-500 w-[100px] h-[28px] flex justify-center items-center rounded-lg">
              <div>Technology</div>
            </div>
            <div className="h-[80px] text-[36px] font-sans font-bold">
              Grid system for better <br /> Design User Interface
            </div>
          </div>{" "}
          <div className="text-gray-500 mt-[24px] w-[518px] font-normal text-[20px]">
            {" "}
            january 15 2024
          </div>
        </div>
      </div>
      <div className="w-[1216px] flex justify-end">
        <div className="flex gap-[10px]">
          <div className="relative w-[40px] h-[40px] border border-black rounded">
            <Image src="/<.svg" layout="fill" />
          </div>
          <div className="relative w-[40px] h-[40px] border border-black rounded">
            <Image src="/>.svg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
