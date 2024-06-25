"use client";
import React from "react";
import Slider from "react-slick";
// In your component file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const data = [
  {
    path: "/assets/Gallery/01.jpg",
  },
  {
    path: "/assets/Gallery/02.jpg",
  },
  {
    path: "/assets/Gallery/03.jpg",
  },
  {
    path: "/assets/Gallery/04.jpg",
  },
  {
    path: "/assets/Gallery/05.jpg",
  },
  {
    path: "/assets/Gallery/06.jpg",
  },
  {
    path: "/assets/Gallery/07.jpg",
  },
  {
    path: "/assets/Gallery/08.jpg",
  },
];

function Carousel() {
  const settings = {
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <div className="slider-container bg-[ #e2f1cc]">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.path} className="mt-5">
            <Image src={item.path} alt="img" width={380} height={370} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
