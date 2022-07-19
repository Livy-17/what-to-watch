import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ModalComp from "./ModalComp";

export default function CarouselMain({ data, serviceName }) {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
  }

  const dataFiltered = data.filter(item => item.posterURLs['original']);

  const [theKey, setTheKey] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = (i) => {setTheKey(i); setModalOpen(true)};
  const handleModalClose = () => setModalOpen(false);

  return (
    <div id='CarouselMain' className="px-20 pt-20">
      <div>
        <h2 className="text-white text-6xl mb-10 mt-10 ml-5">{serviceName}</h2>
        <Slider {...settings}>
          {dataFiltered.map((item, i) => {
            return (
              <div key={i} className='ml-[20px] hover:cursor-pointer'>
                <div onClick={() => handleModalOpen(i)}>
                  <Image src={item.posterURLs['original']} alt='' height='700px' width='500px' style={{ borderRadius: '10px'}} />
                </div>
              </div>
          )})}
        </Slider>
      </div>
      <ModalComp handleModalClose={handleModalClose} modalOpen={modalOpen} dataFiltered={dataFiltered} theKey={theKey} serviceName={serviceName} />
    </div>
  );

}