import Image from "next/legacy/image";
import { useState } from "react";
import "flowbite";
import useSWR from "swr";
import { useRouter } from "next/router";

export const FirstPage = () => {
  const { data, error } = useSWR("https://dev.to/api/articles", (args) =>
    fetch(args).then((res) => res.json())
  );

  const [counter, setCounter] = useState(0);
  const next = () => {
    setCounter(counter + 1);
  };
  const prev = () => {
    setCounter(counter - 1);
  };

  console.log(data);

  const router = useRouter();

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
                className={`mx-auto relaitve mt-[100px] gap-[20px] flex-col `}
              >
                <div className="relative w-[1216px] h-[600px]">
                  <Image
                    src={`${data[counter].social_image}`}
                    layout="fill"
                    className="rounded-lg"
                  />
                  <div className="absolute z-[10] bottom-[10px] left-[10px] w-[598px] h-[252px] flex flex-col items-center justify-center rounded-lg  bg-white">
                    <div className="w-[518px] h-[124px] flex flex-col gap-[16px]">
                      <div className="bg-indigo-500 w-[100px] h-[28px] flex justify-center items-center rounded-lg">
                        <div>{`${data[counter].tag_list[0]}`}</div>
                      </div>
                      <div className="h-[80px] overflow-y-auto w-[500px] text-[30px] font-sans font-bold">
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
          <div className="w-[1216px] flex justify-end">
            <div className="flex gap-[10px]">
              <button
                disabled={counter === 0}
                onClick={() => {
                  prev();
                }}
                className="relative w-[40px] h-[40px] border border-black rounded "
              >
                <Image src="/<.svg" layout="fill" />
              </button>
              <button
                disabled={counter === data.length - 1}
                onClick={() => {
                  next();
                }}
                className="relative w-[40px] h-[40px] border border-black rounded"
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
