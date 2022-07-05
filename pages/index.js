import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { baseURL, fetch_by_country_service_page, fetch_service_by_country } from '../uilts/fetchAPI';
import CarouselMain from '../components/CarouselMain';
import CarouselSub from '../components/CarouselSub';

export default function Home({ data_us_netfilx }) {

  const [country, setCountry] = useState('us');
  const [isLoading, setIsLoading] = useState(false);

  const [serviceByCountry, setServiceByCountry] = useState({});

  const [DataNetflix, setDataNetflix] = useState(null);
  const [DataPrime, setDataPrime] = useState(null);
  const [DataDisney, setDataDisney] = useState(null);
  const [DataHbo, setDataHbo] = useState(null);
  const [DataHulu, setDataHulu] = useState(null);
  const [DataPeacock, setDataPeacock] = useState(null);
  const [DataParamount, setDataParamount] = useState(null);
  const [DataStarz, setDataStarz] = useState(null);
  const [DataShowtime, setDataShowtime] = useState(null);
  const [DataApple, setDataApple] = useState(null);
  const [DataMubi, setDataMubi] = useState(null);

  useEffect(() => {

    setIsLoading(true);

    fetch_service_by_country().then(obj => setServiceByCountry(obj))

  }, []);

  useEffect(() => {

    setIsLoading(true);

    const runFetch = async () => {

      if (serviceByCountry?.netflix?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 2);
        Promise.all([promise1, promise2]).then(v => setDataNetflix(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.prime?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'prime', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'prime', 2);
        Promise.all([promise1, promise2]).then(v => setDataPrime(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.disney?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'disney', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'disney', 2);
        Promise.all([promise1, promise2]).then(v => setDataDisney(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.hbo?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hbo', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hbo', 2);
        Promise.all([promise1, promise2]).then(v => setDataHbo(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.hulu?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hulu', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hulu', 2);
        Promise.all([promise1, promise2]).then(v => setDataHulu(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.peacock?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'peacock', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'peacock', 2);
        Promise.all([promise1, promise2]).then(v => setDataPeacock(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.paramount?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'paramount', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'paramount', 2);
        Promise.all([promise1, promise2]).then(v => setDataParamount(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.starz?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'starz', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'starz', 2);
        Promise.all([promise1, promise2]).then(v => setDataStarz(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.showtime?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'showtime', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'showtime', 2);
        Promise.all([promise1, promise2]).then(v => setDataShowtime(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.apple?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'apple', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'apple', 2);
        Promise.all([promise1, promise2]).then(v => setDataApple(v[0].results.concat(v[1].results)))
      }

      if (serviceByCountry?.mubi?.includes(country)) {
        const promise1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'mubi', 1);
        const promise2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'mubi', 2);
        Promise.all([promise1, promise2]).then(v => setDataMubi(v[0].results.concat(v[1].results)))
      }

    }

    runFetch();

    setIsLoading(false);

  }, [serviceByCountry, country])

  if (DataNetflix) {var imagesNetflix = DataNetflix.map(item => item.posterURLs['500']);}
  if (DataPrime) {var imagesPrime = DataPrime.map(item => item.posterURLs['500']);}
  if (DataDisney) {var imagesDisney = DataDisney.map(item => item.posterURLs['500']);}
  if (DataHbo) {var imagesHbo = DataHbo.map(item => item.posterURLs['500']);}
  if (DataHulu) {var imagesHulu = DataHulu.map(item => item.posterURLs['500']);}
  if (DataPeacock) {var imagesPeacock = DataPeacock.map(item => item.posterURLs['500']);}
  if (DataParamount) {var imagesParamount = DataParamount.map(item => item.posterURLs['500']);}
  if (DataStarz) {var imagesStarz = DataStarz.map(item => item.posterURLs['500']);}
  if (DataShowtime) {var imagesShowtime = DataShowtime.map(item => item.posterURLs['500']);}
  if (DataApple) {var imagesApple = DataApple.map(item => item.posterURLs['500']);}
  if (DataMubi) {var imagesMubi = DataMubi.map(item => item.posterURLs['500']);}
  return (
    <>
      <div>
        { imagesNetflix && <CarouselSub images={imagesNetflix} serviceName='Netflix' /> }
        { imagesPrime && <CarouselSub images={imagesPrime} serviceName='Prime' /> }
        { imagesDisney && <CarouselSub images={imagesDisney} serviceName='Disney' /> }
        { imagesHbo && <CarouselSub images={imagesHbo} serviceName='HBO' /> }
        { imagesHulu && <CarouselSub images={imagesHulu} serviceName='Hulu' /> }
        { imagesPeacock && <CarouselSub images={imagesPeacock} serviceName='Peacock' /> }
        { imagesParamount && <CarouselSub images={imagesParamount} serviceName='Paramount' /> }
        { imagesStarz && <CarouselSub images={imagesStarz} serviceName='Starz' /> }
        { imagesShowtime && <CarouselSub images={imagesShowtime} serviceName='Showtime' /> }
        { imagesApple && <CarouselSub images={imagesApple} serviceName='Apple' /> }
        { imagesMubi && <CarouselSub images={imagesMubi} serviceName='Mubi' /> }
      </div>
    </>
  )
}