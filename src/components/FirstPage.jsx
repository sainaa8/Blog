import Image from "next/legacy/image";
import { useState } from "react";
import "flowbite";
import useSWR from "swr";
import { useRouter } from "next/router";

export const FirstPage = (props) => {
  const { data } = props;

  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const next = () => {
    setCounter(counter + 1);
  };
  const prev = () => {
    setCounter(counter - 1);
  };

  console.log(data);

  return (
    <div className="hidden md:flex flex-col ">
      {!data ? (
        <div>Loading</div>
      ) : (
        <>
          <div
            onClick={() => router.push(`/blog/${data[counter].id}`)}
            id="animation-carousel"
            className="flex w-[1216px]"
          >
            <div>
              <div
                className={`mx-auto relaitve mt-[100px] gap-[20px] flex-col border border-white  p-[10px] rounded-lg`}
              >
                <div className="relative w-[1216px] h-[600px]">
                  <Image
                    src={`${data[counter].social_image}`}
                    layout="fill"
                    className="rounded-lg "
                  />
                  <div className="absolute z-[10] bottom-[10px] left-[10px] w-[598px] h-[252px] flex flex-col items-center justify-center rounded-lg  bg-white dark:bg-black">
                    <div className="w-[518px] h-[124px] flex flex-col gap-[16px]">
                      <div className="bg-indigo-500 w-fit h-[28px] px-[5px] flex justify-center items-center rounded-lg">
                        <div>{`${data[counter].tag_list[0]}`}</div>
                      </div>
                      <div className="h-[80px] overflow-y-auto w-[500px] text-[30px] font-sans font-bold text-black">
                        {`${data[counter].description}`}
                      </div>
                    </div>
                    <div className="text-gray-500 font-light mt-[28px] w-[518px] text-[20px]">
                      <div className="workSans">{`${
                        data[counter].published_at.split("T")[0]
                      }`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1216px] flex justify-end mt-[20px] ">
            <div className="flex gap-[10px] border border-white p-[4px] rounded-lg ">
              <button
                disabled={counter === 0}
                onClick={() => {
                  prev();
                }}
                className="relative w-333 h-333 border border-black dark:border-white bg-white rounded active:scale-75 "
              >
                <Image src="/<.svg" layout="fill" />
              </button>
              <button
                disabled={counter === data.length - 1}
                onClick={() => {
                  next();
                }}
                className="relative w-333 h-333 border border-black dark:border-white bg-white rounded active:scale-75"
              >
                <Image src="/>.svg" layout="fill" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
