import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function CarouselSub({ images_us_netflix }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        {images_us_netflix.map((item, i) => (
          <div key={i}>
            <Image src={item} alt='' height='500px' width='350px' />
          </div>
        ))}
      </Slider>
    </div>
  );
};