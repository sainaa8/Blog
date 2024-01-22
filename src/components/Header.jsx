import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { GiMoonBats } from "react-icons/gi";

import { GiGooeyEyedSun } from "react-icons/gi";

export const Header = ({ children }) => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/");
  };
  const handlePushBlog = () => {
    push("/blog");
  };
  const handlePushCon = () => {
    push("/contact");
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  const { theme, setTheme } = useTheme();

  const routes = ["home", "blog", "contact"];
  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="sticky top-0 z-30 shadow-sm border mr-[0px] md:mr-[68px] bg-white dark:bg-black rounded-bl-lg rounded-br-lg px-[20px]">
        <div className="flex py-[38px] ">
          <Image
            src={"/logo1.png"}
            width={158}
            height={38}
            className="mr-[140px] md:mr-[118px]"
          />
          <div className="items-center hidden md:flex">
            <div className="workSans">
              <div className="flex font-light justify-center w-[780px] gap-[40px] text-[16px] text-black dark:text-black">
                <h1
                  onClick={() => handlePush()}
                  className="active:scale-90 active:text-orange-600"
                >
                  Home
                </h1>
                <h1
                  onClick={() => handlePushBlog()}
                  className="active:scale-90 active:text-orange-600"
                >
                  Blog
                </h1>
                <h1
                  onClick={() => handlePushCon()}
                  className="active:scale-90 active:text-orange-600"
                >
                  Contact
                </h1>
              </div>
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
          <div
            className="text-[30px] mr-[40px] ml-[5px] md:ml-[40px]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <GiGooeyEyedSun className="text-amber-400" />
            ) : (
              <GiMoonBats className="text-violet-700" />
            )}
          </div>
          <div
            onClick={handleClick}
            className="flex md:hidden text-[30px] w-[40px] text-black "
          >
            <IoMenu />
          </div>
        </div>
      </div>

      <div className="fixed z-30 top-[115px] left-[225px]">
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden bg-gray-300 py-[10px] px-[10px] rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 1 } }}
              exit={{ scale: 0, transition: { duration: 1 } }}
            >
              <div className="flex flex-col justify-center  gap-[20px] font-bold text-[16px] ">
                <h1
                  onClick={() => handlePush()}
                  className="active:scale-90 active:text-orange-600"
                >
                  {" "}
                  Home
                </h1>
                <h1
                  onClick={() => handlePushBlog()}
                  className="active:scale-90 active:text-orange-600"
                >
                  Blog
                </h1>
                <h1
                  onClick={() => handlePushCon()}
                  className="active:scale-90 active:text-orange-600"
                >
                  Contact
                </h1>
              </div>
              <div className="flex items-center mt-[20px] justify-around w-[186px] h-[36px] bg-gray-200 rounded-lg  text-black dark:text-black">
                <input
                  placeholder="search"
                  type="text"
                  className="w-[140px] h-[20px] bg-gray-200 outline-none ml-[10px] dark:text-black"
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
      <div className="workSans">
        <div className="flex mt-[80px] gap-[20px] border-b border-black dark:border-white">
          {" "}
          <div className="w-[290] h-[236px] hidden md:flex flex-col ">
            <div className="font-bold mb-[12px] text-[18px]">About</div>
            <div className=" text-[16px] w-[280px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="text-[16px] mt-[24px] ">
              <div>Email : info@jstemplate.net</div>
              <div>Phone : 880 123 456 789</div>
            </div>
          </div>
          <div className="  flex flex-col md:flex-row gap-[30px] md:gap-[0px]">
            <div className="w-[100%] md:w-[601px]   flex flex-col items-center">
              <h1
                onClick={() => handlePush()}
                className="active:scale-90 active:text-orange-600"
              >
                Home
              </h1>
              <h1
                onClick={() => handlePushBlog()}
                className="active:scale-90 active:text-orange-600"
              >
                Blog
              </h1>
              <h1
                onClick={() => handlePushCon()}
                className="active:scale-90 active:text-orange-600"
              >
                Contact
              </h1>
            </div>
            <div className="flex gap-[20px]">
              <a
                href="https://www.facebook.com/"
                rel="no-referrer"
                target="_blank"
              >
                <FaFacebook className="hover:scale-125" />
              </a>
              <a href="https://twitter.com/" rel="no-referrer" target="_blank">
                <FaTwitter className="hover:scale-125" />
              </a>
              <a
                href="https://www.instagram.com/"
                rel="no-referrer"
                target="_blank"
              >
                <RiInstagramFill className="hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/"
                rel="no-referrer"
                target="_blank"
              >
                <IoLogoLinkedin className="hover:scale-125" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="workSans">
        <div className="flex mt-[40px] mb-[40px]">
          <div className="flex">
            <Image src="/bigb.svg" width={48} height={48} />
            <div className="mt-[5px] ml-[5px] ">
              <Image src="/meta.png" width={94} height={24} />
              <div className="text-[10px] text-gray-600">
                © All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="hidden md:flex h-fit w-[924px] justify-end">
            <h1 className="px-[8px] flex justify-center border-r border-gray-400">
              Terms of Use
            </h1>
            <h1 className="px-[8px] flex justify-center border-r border-gray-400">
              Privacy Policy
            </h1>
            <h1 className="px-[8px] flex justify-center">Cookie Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
