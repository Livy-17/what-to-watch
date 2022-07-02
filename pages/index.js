import Head from 'next/head'
import Image from 'next/image'
import EmblaCarouselMain from '../components/CarouselMain/js/EmblaCarouselMain';
import EmblaCarouselSub from '../components/CarouselSub/js/EmblaCarouselSub';
import { mediaSubByIndex } from '../components/CarouselSub/media';

const slides_main = Array.from(Array(5).keys());
const slides_sub = Array.from(Array(5).keys());

export default function Home() {
  return (
    <>
      <div>
        {/* <EmblaCarouselMain slides={slides_main} /> */}
        <EmblaCarouselSub slides={slides_sub} mediaSubByIndex={mediaSubByIndex} /> 
      </div>
    </>
  )
}
