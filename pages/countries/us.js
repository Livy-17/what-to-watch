import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { baseURL, fetch_by_country_service_page, fetch_service_by_country } from '../../uilts/fetchAPI';
import CarouselMain from '../../components/CarouselMain';
import CarouselSub from '../../components/CarouselSub';

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
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 2);
        setDataNetflix(array1.concat(array2));
      }

      if (serviceByCountry?.prime?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'prime', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'prime', 2);
        setDataPrime(array1.concat(array2));
      }

      if (serviceByCountry?.disney?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'disney', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'disney', 2);
        setDataDisney(array1.concat(array2));
      }

      if (serviceByCountry?.hbo?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hbo', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hbo', 2);
        setDataHbo(array1.concat(array2));
      }

      if (serviceByCountry?.hulu?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hulu', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hulu', 2);
        setDataHulu(array1.concat(array2));
      }

      if (serviceByCountry?.peacock?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'peacock', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'peacock', 2);
        setDataPeacock(array1.concat(array2));
      }

      if (serviceByCountry?.paramount?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'paramount', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'paramount', 2);
        setDataParamount(array1.concat(array2));
      }

      if (serviceByCountry?.starz?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'starz', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'starz', 2);
        setDataStarz(array1.concat(array2));
      }

      if (serviceByCountry?.showtime?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'showtime', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'showtime', 2);
        setDataShowtime(array1.concat(array2));
      }

      if (serviceByCountry?.apple?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'apple', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'apple', 2);
        setDataApple(array1.concat(array2));
      }

      if (serviceByCountry?.mubi?.includes(country)) {
        const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'mubi', 1);
        const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'mubi', 2);
        setDataMubi(array1.concat(array2));
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