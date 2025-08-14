import React, { useState, useEffect } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./TestimonialSlider.css"; // CSS import

const testimonials = [
  {
    name: "John Smith",
    designation: "Senior HR Manager at Zendesk",
    review:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
  },
  {
    name: "John Smith",
    designation: "Senior HR Manager at Zendesk",
    review:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
  },
  {
    name: "John Smith",
    designation: "Senior HR Manager at Zendesk",
    review:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  },);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
    setAnimationKey((prev) => prev + 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="slider-container">
      <IoIosArrowDropleftCircle
        className="left-icon"
        color="#0050C7"
        onClick={prevSlide}
      />
      <div key={animationKey} className="testimonial-card">
        <p className="review">"{testimonials[index].review}"</p>
        <h3 className="name">- {testimonials[index].name}</h3>
        <h4 className="designation">{testimonials[index].designation}</h4>
      </div>
      <IoIosArrowDroprightCircle
        className="right-icon"
        color="#0050C7"
        onClick={nextSlide}
      />
    </div>
  );
}
