import React, { useState } from "react";
import ProductCard from "./ProductCard";
import tshirt1 from "/tshirt1.webp";
import tshirt2 from "/tshirt2.webp";
import TestimonialSlider from "./TestimonialSlider";

const Product = () => {
  const myArray = [1, 2, 3, 4, 5];
  const [products, setProducts] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const showProduct = () => {
    const newProducts = myArray
      .slice(0, 4)
      .map((item) => <ProductCard key={item} image={tshirt1} />);
    setProducts(newProducts);
    setShowButton(false);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="flex flex-col items-start justify-center w-full gap-[55px] max-w-[1240px]">
          <div className="text-black text-center font-[Impact, Haettenschweiler] text-4xl font-extrabold pt-16 w-full md:text-[50px]">
            NEW ARRIVALS
          </div>
          <div className="grid grid-cols-1  place-items-center w-full">
            <div className="grid gap-5 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
              <ProductCard image={tshirt1} />
              <ProductCard image={tshirt1} />
              <ProductCard image={tshirt1} />
              <ProductCard image={tshirt1} />
              {products}
            </div>
            <div className=" gap-[55px]  mt-12 max-w-[1240px]">
              {showButton ? (
                <div
                  className="text-center rounded-[62px] border border-black/10 px-14 py-4 cursor-pointer"
                  onClick={showProduct}
                >
                  View All
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="flex flex-col items-start justify-center w-full gap-[55px] max-w-[1240px]">
          <div className="text-black text-center font-[Impact, Haettenschweiler] text-4xl  font-extrabold pt-16 w-full md:text-[50px]">
            TOP SELLING
          </div>
          <div className="grid grid-cols-1  place-items-center w-full">
            <div className="grid gap-5 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
              <ProductCard image={tshirt2} />
              <ProductCard image={tshirt2} />
              <ProductCard image={tshirt2} />
              <ProductCard image={tshirt2} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <div className="text-black text-center font-extrabold font-serif xl:text-5xl  pt-16 w-full text-[32px] md:text-[40px]">
          OUR HAPPY CUSTOMERS
        </div>
        <div className="mt-12 md:mt-4 mb-8">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default Product;
