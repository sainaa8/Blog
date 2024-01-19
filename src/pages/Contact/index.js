import React from "react";

function index() {
  return (
    <div className="flex flex-col gap-[20px] mt-[40px]">
      <div className="w-fit md:w-[624px] flex flex-col  gap-[20px] ">
        <div className="workSans">
          <div className="text-[36px] ml-[50px] font-bold">Contact Us</div>
        </div>
        <div className="ml-[50px] md:ml-[0px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-[0px] md:gap-[50px]">
        <div className="w-[294px] h-[133px] flex flex-col gap-[10px] p-[16px]">
          <div className="text-[24px] font-semibold ">
            <div className="workSans">Address</div>
          </div>
          <div className="text-gray-500">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </div>
        </div>
        <div className="w-[294px] h-[133px] flex flex-col gap-[10px] p-[16px]">
          <div className="text-[24px] font-semibold ">
            <div className="workSans">Contact</div>
          </div>
          <div className="text-gray-500">313-332-8662 info@email.com</div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] pb-[80px] pt-[29px] pl-[30px] md:pl-[35px] pr-[30px] md:pr-[130px] bg-[#f6f6f7]">
        <div className="text-[18px] font-semibold">
          <div className="workSans ml-[30px]">Leave a Message</div>
        </div>
        <div className="ml-[30px]">
          <div className="flex flex-col md:flex-row gap-[20px] md:items-center w-[430px] md:w-[478px] justify-between">
            <div className="w-[225px]  h-[38px] flex items-center rounded-md bg-white dark:bg-slate-900">
              <input
                type="text"
                placeholder="Your Name"
                className="outline-none ml-[10px]"
              />
            </div>
            <div className="w-[225px] h-[38px] flex items-center rounded-md bg-white">
              <input
                type="text"
                placeholder="Your Mail"
                className="outline-none ml-[10px]"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="w-[430px] md:w-[478px] h-[38px] bg-white flex items-center rounded-md ">
              <input
                type="text"
                placeholder="Subject"
                className="ml-[10px] outline-none"
              />
            </div>
            <div className="w-[430px] md:w-[478px] mt-[20px] h-[134px] bg-white rounded-md">
              <input
                type="text"
                placeholder="Write a message"
                className="outline-none mt-[14px] ml-[20px]"
              />
            </div>
            <div className="workSans">
              <div className="bg-blue-600 mt-[35px] px-[16px] text-white py-[10px] w-fit rounded-md">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
