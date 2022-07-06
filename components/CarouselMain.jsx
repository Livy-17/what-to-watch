import Slider from "react-slick";
import Image from "next/image";

export default function AutoPlay({ images, serviceName }) {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  }

  return (
    <div className="px-20 my-20">
      <h2 className="text-white text-6xl mb-10 mt-10 ml-5">{serviceName}</h2>
      <Slider {...settings}>
        {images.map((item, i) => {
          if (item) return (
            <div key={i} className='ml-[20px]'>
              <Image src={item} alt='' height='700px' width='500px' />
            </div>
        )})}
      </Slider>
    </div>
  );

}