import Head from 'next/head'
import Image from 'next/image'
import EmblaCarouselMain from '../components/CarouselMain/js/EmblaCarouselMain';
import EmblaCarouselSub from '../components/CarouselSub/js/EmblaCarouselSub';
import EmblaCarouselTest from '../components/CarouselTest/js/emblaCarouselTest';
import { fetch_by_country_service_page } from '../uilts/fetchAPI';
import { baseURL } from '../uilts/fetchAPI';

const slides_main = Array.from(Array(5).keys());
const slides_sub = Array.from(Array(5).keys());
const slides_sub_us_netflix = Array.from(Array(16).keys());

export default function Home({ data_us_netfilx }) {
  const images_us_netflix = data_us_netfilx.map(item => item.posterURLs['500']);
  const index_images_us_netflix = index => images_us_netflix[index % images_us_netflix.length];
  console.log(images_us_netflix)
  return (
    <>
      <div>
        <EmblaCarouselMain slides={slides_main} />
        {/* <EmblaCarouselSub slides={slides_sub_us_netflix} mediaSubByIndex={index_images_us_netflix} />  */}
        <EmblaCarouselTest slides={slides_sub_us_netflix} mediaSubByIndex={index_images_us_netflix} /> 
      </div>
    </>
  )
}

export async function getStaticProps() {
  
  const { results: results_1 } = await fetch_by_country_service_page(`${baseURL}/search/basic`, 'us', 'netflix', 1);
  const { results: results_2 } = await fetch_by_country_service_page(`${baseURL}/search/basic`, 'us', 'netflix', 2);
  const data_us_netfilx = results_1.concat(results_2);

  return {
    props: {
      data_us_netfilx
    }
  }
}