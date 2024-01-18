import React from "react";
import Image from "next/image";

function id(data) {
  console.log(data.data);
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className="w-[800px] text-[36px] font-semibold">
          {data.data.title}
        </div>
        <div className="workSans">
          <div className="flex gap-[20px] text-gray-400">
            <div className="flex gap-[8px]">
              <Image src="/pro.png" width={28} height={28} alt="" />
              <div>{data.data.user.name}</div>
            </div>

            <div>{data.data.published_at.split("T")[0]}</div>
          </div>
        </div>
      </div>
      <div className="workSans">
        <div className="flex flex-col gap-[32px]">
          <div className="relative w-[800px] h-[463px] mt-[32px]">
            <Image
              src={data.data.social_image}
              layout="fill"
              alt=""
              className="rounded-lg"
            />
          </div>

          <div className="w-[800px]">
            <div className="align-center">{data.data.body_html}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default id;

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};
