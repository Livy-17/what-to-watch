import Head from 'next/head'
import Image from 'next/image'
import EmblaCarouselMain from '../components/CarouselMain/js/EmblaCarouselMain';
import EmblaCarouselSub from '../components/CarouselSub/js/EmblaCarouselSub';

const SLIDE_COUNT_MAIN = 5;
const slides_main = Array.from(Array(SLIDE_COUNT_MAIN).keys());
const SLIDE_COUNT_SUB = 5;
const slides_sub = Array.from(Array(SLIDE_COUNT_SUB).keys());

export default function Home() {
  return (
    <>
      <div>
        <EmblaCarouselMain slides={slides_main} />
        {/* <EmblaCarouselSub slides={slides_sub} />  */}
      </div>
    </>
  )
}
