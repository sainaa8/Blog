import React from "react";
import { Blogs } from "@/components/third-page";
function Blog() {
  const dataInBlog = [
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/castle.png",
      type: "technology",
      desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div>
      <div className="text-[24px] ml-[60px] font-bold">
        <div className="workSans">All blog posts</div>
      </div>
      <div className="flex flex-wrap w-fit md:w-[1280px] ml-[20px] gap-[16px]">
        {dataInBlog.map((item, index) => (
          <div className="ml-[7px] md:ml-[30px]" key={index}>
            <Blogs imgsrc={item.imgsrc} type={item.type} desc={item.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blog;
