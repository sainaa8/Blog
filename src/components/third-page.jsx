import Image from "next/image";
import useSWR from "swr";
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
  console.log(data);
  const titles = ["Design", "Travel", "fashion", "technology", "Branding"];
  return (
    <div>
      <div className="ml-[20px] flex flex-col gap-[24px]">
        <div className="workSans">
          <div className="text-[24px]  font-bold ">All Blog Post</div>
        </div>
        <div className=" workSans ">
          <div className="flex justify-between">
            <div className="flex gap-[16px]  font-bold">
              <div className="hover:text-orange-300">All</div>
              <div className="hidden md:flex gap-[16px] ">
                {titles.map((el, id) => (
                  <div className="hover:text-orange-300" key={id}>
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex hover:text-orange-300">View All</div>
          </div>
        </div>
      </div>
      <div className="flex w-fit md:w-[1280px] gap-[10px]  flex-wrap">
        {data?.slice(5, 14).map((el, index) => (
          <div className="ml-[30px]" key={index}>
            <Blogs
              imgsrc={el.social_image}
              type={el.tag_list[0]}
              desc={el.description}
              date={el.published_at.split("T")[0]}
            />
          </div>
        ))}
      </div>
      <div className="mt-[100px] flex justify-center mb-[20px]">Load More</div>
    </div>
  );
};
