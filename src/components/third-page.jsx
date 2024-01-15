import Image from "next/image";
const Blogs = () => {
  return (
    <div className="border border-black w-fit rounded-lg p-[10px]">
      <Image src="/beach.png" width={360} height={240} />
    </div>
  );
};
export const AllBlog = () => {
  const titles = ["Design", "Travel", "fashion", "technology", "Branding"];
  return (
    <div>
      <div className="ml-[20px] flex flex-col gap-[24px]">
        <div className="text-[24px]  font-bold">All Blog Post</div>
        <div className="flex justify-between  ">
          <div className="flex gap-[16px]">
            <div className="text-orange-500">All</div>
            <div className="flex gap-[16px] ">
              {titles.map((el, id) => (
                <div key={id}> {el}</div>
              ))}
            </div>
          </div>
          <div>View All</div>
        </div>
      </div>
      <Blogs />
    </div>
  );
};
