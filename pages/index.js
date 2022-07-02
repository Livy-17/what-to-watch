import Head from 'next/head'
import Image from 'next/image'
import EmblaCarouselMain from '../components/CarouselMain/js/EmblaCarouselMain';

const SLIDE_COUNT_MAIN = 5;
const slides_main = Array.from(Array(SLIDE_COUNT_MAIN).keys());

export default function Home() {
  return (
    <>
      <div>123</div>
      <EmblaCarouselMain slides={slides_main} />
    </>
  )
}
