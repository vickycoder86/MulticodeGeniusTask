import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[rgb(242,240,241)] mt-[170px] relative pb-[50px] flex flex-row items-start justify-center w-full">
        <div className="max-w-[1240px] absolute -top-[90px] w-[90%] flex flex-col items-center justify-center ">
          <div className="flex flex-row items-center justify-between w-full bg-black rounded-[20px] px-[54px] py-[36px] ">

            <div className="text-white font-[IntegralCF] text-[40px] font-bold leading-[45px] max-w-[550px] flex flex-row items-start justify-start ">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>

            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-3 rounded-[62px] bg-white px-4 py-3 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z" fill="black" fill-opacity="0.4"></path></svg>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="border-none text-black/100 font-sans text-base font-normal leading-normal outline-none"
                />
              </div>
              
              <div className="px-9 py-3 rounded-[62px] bg-white text-center text-black font-satoshi text-base font-medium leading-normal cursor-pointer m-2">
                Send Us For Notification
              </div>
              
            </div>
          </div>
        </div>
     
      <div className="flex flex-row items-center justify-around mt-[140px] max-w-[1240px] w-[90%]">

        <div className="flex flex-col items-start justify-start">
          <div className="text-black font-[IntegralCF] text-[34px] font-bold leading-normal">
            SHOP.CO
          </div>
          <div className="text-black/60 font-[Satoshi] text-[14px] font-normal leading-[22px] max-w-[250px]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </div>
          <div className="flex flex-row items-start justify-start mt-2.5 gap-2.5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col items-start justify-start gap-2.5">
          <p>Help</p>
          <a href="#">Privacy statement</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Cookie Policy</a>
           </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
