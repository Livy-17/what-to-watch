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
            <div key={i}>
              <Image src={item} alt='' height='500px' width='350px' />
            </div>
        )})}
      </Slider>
    </div>
  );
};