import Image from "next/image";
const TRend = (props) => {
  const { imgrsc, texts } = props;
  return (
    <div>
      <div className="relative w-[290px] h-[320px]">
        <Image src={imgrsc} layout="fill" />
        <div className="flex-col w-[230px] h-[120px] flex gap-[16px]  absolute z-10 left-[28px] right-[28px] bottom-[28px]">
          <div className="   bg-indigo-500 w-fit px-[10px] py-[4px] text-white rounded-lg ">
            Technology
          </div>
          <div className="font-bold text-[18px] w-[230px] h-fit text-white">
            {texts}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecondPage = () => {
  const datas = [
    {
      imgrsc: "/2-4.png",
      texts: "sdfsddhhghsfghs hw rghwshtwthwthrthhs ergerg qerger rtqert qert",
    },
    {
      imgrsc: "/2-4.png",
      texts: "sdfsddhhghsfghs hw rghwshtwthwthrthhs ergerg qerger rtqert qert",
    },
    {
      imgrsc: "/2-4.png",
      texts: "sdfsddhhghsfghs hw rghwshtwthwthrthhs ergerg qerger rtqert qert",
    },
    {
      imgrsc: "/2-4.png",
      texts: "sdfsddhhghsfghs hw rghwshtwthwthrthhs ergerg qerger rtqert qert",
    },
  ];
  return (
    <div className="flex ml-[20px] flex-col gap-[16px]">
      <div className=" text-[24px] font-bold">Trending</div>
      <div className="flex overflow-x-auto w-[430px] md:w-fit  gap-[20px]">
        {datas.map((el, id) => (
          <div key={id}>
            <TRend imgrsc={el.imgrsc} texts={el.texts} />
          </div>
        ))}
      </div>
    </div>
  );
};
