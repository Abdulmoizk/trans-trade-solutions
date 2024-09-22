import React from "react";
import { shippingServicesData } from "../data/data";

const Card = () => {
  return (
    <div className="flex flex-col sm:w-[80%]  md:flex md:flex-row  md:w-fit md:flex-wrap      mx-auto items-center w-full md:space-x-10 md:justify-center px-10">
      <div className="hidden"></div>
      {shippingServicesData.map((item) => {
        return (
            
          <div className="relative hover:scale-105 transition-all duration-300 ease-in-out  hover:shadow-gray-500 hover:shadow-lg shadow-gray-500 bg-gray-400 bg-opacity-20 text-center h-auto min-h-[420px] py-5 w-[90%]  px-5 my-5 lg:w-[29%] lg:mx-auto md:w-1/3">
            <div className="h-full flex flex-col items-center justify-center gap-2">
              <h1 className="font-citul tracking-wider text-3xl text-[#1850A0] font-bold ">{item.company}</h1>
              <img className="w-32 bg-gray-900 rounded-full h-32 object-fill hover:scale-105 transition-transform duration-300 ease-in-out" src={item.img} alt="" />
              <h1 className=" tracking-wider font-bold text-[#1850A0] text-2xl">{item.title}</h1>
              {/* <h1 className="">{item.date}</h1> */}
              <p className="text-lg">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;