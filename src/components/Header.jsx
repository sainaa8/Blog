import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
export const Header = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const routes = ["Home", "Blog", "Contact"];
  return (
    <div className="flex flex-col  items-center mx-auto   ">
      <div className="flex py-[38px]  ">
        <Image
          src={"/logo1.png"}
          width={158}
          height={38}
          className="mr-[150px] md:mr-[118px]"
        />
        <div className="  items-center   hidden md:flex ">
          <div className="flex justify-center w-[667px] gap-[40px] text-[16px]">
            {routes.map((el, id) => (
              <Link
                href={`/${el === "Home" ? "/" : el}`}
                className=" flex flex-col justify-end"
                key={id}
              >
                {el}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-around w-[156px] h-[36px] bg-gray-200 rounded-lg">
            <input
              placeholder="search"
              type="text"
              className="w-[114px] h-[20px] bg-gray-200 outline-none"
            />
            <IoSearchOutline />
          </div>
        </div>
        <div onClick={handleClick} className="flex md:hidden text-[30px]">
          <IoMenu />
        </div>
      </div>
      <div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute z-20 md:hidden bg-gray-300 py-[10px] px-[10px] rounded-lg"
              initial={{ scale: 0, x: 0, rotate: 0 }}
              animate={{ scale: 1, transition: { duration: 1 } }}
              exit={{ scale: 0, transition: { duration: 1 } }}
            >
              <div className="flex flex-col justify-center  gap-[20px] font-bold text-[16px] ">
                {routes.map((el, id) => (
                  <div className=" flex flex-col justify-end" key={id}>
                    {el}
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-[20px] justify-around w-[186px] h-[36px] bg-gray-200 rounded-lg">
                <input
                  placeholder="search"
                  type="text"
                  className="w-[140px] h-[20px] bg-gray-200 outline-none ml-[10px]"
                />
                <div className="text-[20px]">
                  <IoSearchOutline />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>{children}</div>
    </div>
  );
};
