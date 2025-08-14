import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[24px] bg-[rgb(242,240,241)] flex-row w-full text-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-start justify-center max-w-[1240px] py-[80px] sm:py-[100px] md:py-[120px] gap-14">
          <div className="flex flex-col items-start justify-start gap-8 pt-12">
            <div className="text-black font-[Impact, Haettenschweiler] text-[40px] sm:text-4xl md:text-5xl lg:text-[68px] font-extrabold leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px] relative max-w-[577px] lg:text-left">
              FIND CLOTHES THAT MATCHES YOUR STYLE
              <div className="absolute -top-[35px] -right-[100px] hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <path
                    d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                    fill="black"
                  ></path>
                  <path
                    d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <div className="absolute bottom-[-75px] left-[-90px] top-auto right-auto hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <path
                    d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                    fill="black"
                  ></path>
                  <path
                    d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="text-black/60 text-[16px]  sm:text-base md:text-[16px] leading-[22px] sm:leading-[22px] md:leading-[20px] text-center max-w-[550px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>

            <div className="px-[54px] py-4 text-white font-satoshi text-base font-medium cursor-pointer rounded-[62px] bg-black text-center mx-auto sm:mx-0">
              Shop Now
            </div>
          </div>

          <div className="flex flex-row gap-4 flex-nowrap overflow-x-auto">
            <div className="border-none pl-4 flex flex-col items-start justify-start min-w-[120px]">
              <div className="text-black font-satoshi text-2xl sm:text-[40px] font-bold">
                200+
              </div>
              <div className="text-black/60 font-satoshi text-sm sm:text-[16px] font-normal leading-[18px] sm:leading-[22px]">
                International Brands
              </div>
            </div>
            <div className="pl-4 flex flex-col items-start justify-start border-l border-black/10 min-w-[120px]">
              <div className="text-black font-satoshi text-2xl sm:text-[40px] font-bold">
                2000+
              </div>
              <div className="text-black/60 font-satoshi text-sm sm:text-[16px] font-normal leading-[18px] sm:leading-[22px]">
                High-Quality Products
              </div>
            </div>
            <div className="pl-4 flex flex-col items-start justify-start border-l border-black/10 min-w-[120px]">
              <div className="text-black font-satoshi text-2xl sm:text-[40px] font-bold">
                30000+
              </div>
              <div className="text-black/60 font-satoshi text-sm sm:text-[16px] font-normal leading-[18px] sm:leading-[22px]">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
