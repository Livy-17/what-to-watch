import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function CarouselSub({ images, serviceName }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div className="px-20 my-20">
      <h2 className="text-white text-5xl mb-10 ml-5">{serviceName}</h2>
      <Slider {...settings}>
        {images.map((item, i) => {
          if (item) return (
            <div key={i} id='sub--container'>
              <div className="z-20 absolute top-[45%] hover:cursor-pointer hidden" id='sub--button'>
                <div className="absolute left-[66px]">
                  <div className="w-[120px] h-[40px] text-[20px] text-white text-center border-solid border-[2px] border-white hover:border-red-500 hover:text-red-500 transition duration-300">
                    Details
                  </div>
                </div>
              </div>
              <div className="z-10 hover:brightness-50" id='sub--pic'>
                <Image src={item} alt='' height='500px' width='350px' />
              </div>
            </div>
        )})}
      </Slider>
    </div>
  );
};