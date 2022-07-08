import React, { Component, useState, useRef } from "react";
import Image from "next/image";
import ModalComp from "./ModalComp";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from "@mui/material";

export default function CarouselSub({ data, serviceName }) {

  const dataFiltered = data.filter(item => item.posterURLs['500']);

  const [theKey, setTheKey] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = (i) => {setTheKey(i); setModalOpen(true)};
  const handleModalClose = () => setModalOpen(false);

  const isMobile = useMediaQuery('(max-width:1536px)');
  const isPhone = useMediaQuery('(max-width:640px');

  return (
    <div className="px-20 my-20" id='CarouselSub'>
      <div>
        <h2 className="text-white text-3xl sm:text-5xl mb-10 ml-5">{serviceName}</h2>
        <div>
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={ isMobile ? false : true }
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1600: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1900: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
              2200: {
                slidesPerView: 7,
                spaceBetween: 0,
              },
              3500: {
                slidesPerView: 9,
                spaceBetween: 0,
              },
            }}
          >
              {dataFiltered.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div id='sub--container' className="relative">
                      {!isMobile && 
                        <div className="z-20 absolute top-[44%] right-[26%] hidden" id='sub--button' onClick={() => handleModalOpen(i)}>
                          <div className="w-[120px] h-[40px] text-[20px] text-white text-center border-solid border-[2px] border-white hover:border-red-500 hover:text-red-500 transition duration-300">
                            Details
                          </div>
                        </div>
                      }
                      <div className="z-10 2xl:hover:brightness-50 id='sub--pic h-[350px] w-[250px]" id='sub--pic' onClick={ isMobile ? () => handleModalOpen(i) : undefined } >
                        <Image src={item.posterURLs['500']} alt='' height='350px' width='250px' style={{ borderRadius: '5px' }} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </div>
      <ModalComp handleModalClose={handleModalClose} modalOpen={modalOpen} dataFiltered={dataFiltered} theKey={theKey} serviceName={serviceName} />
    </div>
  );
};