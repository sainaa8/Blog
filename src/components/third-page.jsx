import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
export const Blogs = (props) => {
  const { type, desc, imgsrc, date } = props;
  return (
    <div className="border border-gray-200 w-fit mt-[26px] h-[390px]  rounded-lg p-[10px]">
      <Image src={imgsrc} width={360} height={240} alt="image" />
      <div className="flex flex-col gap-[16px] ">
        <div className="bg-purple-200 mt-[16px] text-indigo-500 px-[10px] py-[5px]d w-fit rounded-lg">
          <div className="workSans">{type}</div>
        </div>
        <div className="font-bold  w-[344px]">
          <div className="workSans">{desc}</div>
        </div>
        <div className="mt-[20px] text-gray-400">
          <div className="workSans">{date}</div>
        </div>
      </div>
    </div>
  );
};

export const AllBlog = () => {
  const { data, error } = useSWR("https://dev.to/api/articles", (args) =>
    fetch(args).then((res) => res.json())
  );
  const router = useRouter();
  console.log(data);
  const titles = [
    "All",
    "Design",
    "Travel",
    "fashion",
    "technology",
    "Branding",
  ];
  const [moreButtonClicked, setMoreButtonClicked] = useState(false);
  const [num, setNum] = useState(14);

  const handleMoreButton = () => {
    if (moreButtonClicked) {
      setNum(num - 3);
      setMoreButtonClicked(false);
    } else {
      setNum(num + 3);
      setMoreButtonClicked(true);
    }
  };

  const { push } = useRouter();
  const getAllBlogs = () => {
    push("/blog");
  };
  console.log(num);
  const [color, setColor] = useState("");

  return (
    <div>
      <div className="ml-[20px] flex flex-col gap-[24px]">
        <div className="workSans">
          <div className="text-[24px]  font-bold ">All Blog Post</div>
        </div>
        <div className=" workSans ">
          <div className="flex justify-between">
            <div className="flex gap-[16px]  font-bold">
              <div className="hidden md:flex gap-[16px] ">
                {titles.map((el, id) => (
                  <div key={id}>
                    <div
                      onClick={() => setColor(el)}
                      className={`${color === el ? "text-amber-600" : ""}`}
                    >
                      {el}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={() => getAllBlogs()}
              className={`hidden md:flex hover:text-black active:scale-110`}
            >
              View All
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-fit md:w-[1280px] gap-[10px]  flex-wrap">
        {data?.slice(5, num).map((el, index) => (
          <div
            onClick={() => router.push(`/blog/${el.id}`)}
            className="ml-[30px]"
            key={index}
          >
            <Blogs
              imgsrc={el.social_image}
              type={el.tag_list[0]}
              desc={el.description}
              date={el.published_at.split("T")[0]}
            />
          </div>
        ))}
      </div>
      <div
        onClick={handleMoreButton}
        className="mt-[100px] flex justify-center mb-[20px] active:scale-110"
      >
        Load {moreButtonClicked ? "less" : "more"}
      </div>
    </div>
  );
};
