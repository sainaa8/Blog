import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

const TRend = (props) => {
  const { imgrsc, texts = "", tagList } = props;
  return (
    <div>
      <div className="relative w-[290px] h-[320px]">
        <div className=" ">
          <Image
            src={imgrsc}
            layout="fill"
            alt="image of data"
            className=" from-black rounded-md"
          />
        </div>

        <div className="flex-col w-[230px] h-[120px] flex gap-[16px]  absolute z-10 left-[28px] right-[28px] bottom-[28px]">
          <div className="   bg-indigo-500 w-fit px-[10px] py-[4px] text-white rounded-lg ">
            {tagList}
          </div>
          <div className="font-semibold	 text-[18px] w-[230px] h-[80px] overflow-y-auto text-white">
            <div className="workSans">{texts}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecondPage = () => {
  const { data, error } = useSWR("https://dev.to/api/articles", (args) =>
    fetch(args).then((res) => res.json())
  );
  const router = useRouter();
  return (
    <div className="flex ml-[20px] flex-col gap-[16px]">
      <div className=" text-[24px] font-bold">Trending</div>
      <div className="flex overflow-x-auto w-[430px] md:w-fit  gap-[20px] border border-white rounded-md p-[10px]">
        {data?.slice(0, 4).map((el, id) => (
          <div onClick={() => router.push(`/blog/${el.id}`)} key={id}>
            <TRend
              imgrsc={el.social_image}
              tagList={el.tag_list[0]}
              texts={el.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
