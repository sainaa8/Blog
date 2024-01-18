import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Blogs } from "@/components/third-page";
function Blog() {
  const { data: blogdata, error } = useSWR(
    "https://dev.to/api/articles",
    (args) => fetch(args).then((res) => res.json())
  );
  const route = useRouter();
  return (
    <div>
      <div className="text-[24px] ml-[60px] font-bold">
        <div className="workSans">All blog posts</div>
      </div>
      <div className="flex flex-wrap w-fit md:w-[1280px] ml-[20px] gap-[16px]">
        {blogdata?.slice(0, 12).map((el, index) => (
          <div
            onClick={() => route.push(`/blog/${el.id}`)}
            className="ml-[7px] md:ml-[20px]"
            key={index}
          >
            <Blogs
              imgsrc={el.social_image}
              type={el.tag_list}
              desc={el.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blog;
