import React, { useState } from 'react'
import ProductCard from './ProductCard'
import tshirt1 from "/tshirt1.webp"
import tshirt2 from "/tshirt2.webp"

const Product = () => {
const myArray = [1, 2, 3, 4, 5];
  const [products, setProducts] = useState([]);
  const [showButton,setShowButton]=useState(true)

  const showProduct = () => {
    // map runs inside function
    const newProducts = myArray.slice(0, 4).map((item) => (
      <ProductCard key={item} image={tshirt1} />
    ));
    setProducts(newProducts); // update state
    setShowButton(false)
  };
  return (
    <>
    <div className="flex flex-row items-center justify-center w-full">
      <div className="flex flex-col items-start justify-center w-full gap-[55px] max-w-[1240px]">
        <div className="text-black text-center font-serif text-5xl font-bold pt-16 w-full">
          NEW ARRIVALS
        </div>
        <div className="grid grid-cols-1  place-items-center w-full">
          
          <div className="grid gap-5 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
          <ProductCard image={tshirt1}/>
          <ProductCard  image={tshirt1}/>
          <ProductCard image={tshirt1} />
          <ProductCard  image={tshirt1}/>
          {products}
          </div>
          <div className=" gap-[55px]  mt-12 max-w-[1240px]">
            {
              showButton ? (<div className='text-center rounded-[62px] border border-black/10 px-14 py-4 cursor-pointer' onClick={showProduct}>
                View All
            </div>):""
            }

          </div>
        </div>   
      </div>
      

      </div>
      <div className="flex flex-row items-center justify-center w-full">
      <div className="flex flex-col items-start justify-center w-full gap-[55px] max-w-[1240px]">
        <div className="text-black text-center font-serif text-5xl font-bold pt-16 w-full">
          TOP SELLING
        </div>
        <div className="grid grid-cols-1  place-items-center w-full">
          
          <div className="grid gap-5 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
          <ProductCard  image={tshirt2}/>
          <ProductCard  image={tshirt2}/>
          <ProductCard  image={tshirt2}/>
          <ProductCard  image={tshirt2}/>
          </div>
        </div>   
      </div>
      </div>
    <div className="flex flex-row items-center justify-center w-full">
        <div className="text-black text-center font-serif text-5xl font-bold pt-16 w-full">
          OUR HAPPY CUSTOMERS
        </div>
      </div>
      
       
      </>
  )
}

export default Product
