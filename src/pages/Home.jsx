import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[10px] bg-[rgb(242,240,241)] flex-row  w-full">
        <div className="flex flex-col items-start justify-center max-w-[1240px] py-[120px] gap-14">
          <div className="flex flex-col items-start justify-start gap-8 pt-12">
            <div className="text-black font-[Impact, Haettenschweiler] text-6xl font-bold leading-[64px] relative max-w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
              <div className="absolute -top-[35px] -right-[100px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none"><path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"></path>
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"></path>
                </svg>
              </div>
              <div className="absolute bottom-[-75px] left-[-90px] top-auto right-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 104 104" fill="none"><path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"></path>
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"></path>
                </svg>
              </div>
            </div>

            <div className="text-black/60  text-base font-[16px] leading-[22px] text-center max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </div>
            <div className="px-[54px] py-4 text-white font-satoshi text-base font-medium cursor-pointer rounded-[62px] bg-black">
              Shop Now
            </div>
          </div>

          <div className="flex gap-4">
            <div className="border-none pl-4 flex flex-col items-start justify-start">
              <div className="text-black font-satoshi text-[40px] font-bold">200+</div>
              <div className="text-black/60 font-satoshi text-[16px] font-normal leading-[22px]">International Brands</div>
            </div>
          <div className=" pl-4 flex flex-col items-start justify-start border-l border-black/10">
            <div className="text-black font-satoshi text-[40px]  font-bold">2000+</div>
              <div className="text-black/60 font-satoshi text-[16px] font-normal leading-[22px]">High-Quality Products</div>
            </div>
            <div className=" pl-4 flex flex-col items-start justify-start border-l border-black/10">
            <div className="text-black font-satoshi text-[40px]  font-bold">30000+</div>
              <div className="text-black/60 font-satoshi text-[16px] font-normal leading-[22px]">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* product section */}
      
    </>
  );
};

export default Home;
