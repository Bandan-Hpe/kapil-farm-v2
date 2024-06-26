"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// In your component file

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
  return (
    <div className=" bg-[ #e2f1cc]">
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.path} className="mt-5 ">
            <Image src={item.path} alt="img" width={300} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
