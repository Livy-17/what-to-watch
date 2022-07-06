import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { baseURL, fetch_by_country_service_page, fetch_service_by_country } from '../../uilts/fetchAPI';
import CarouselMain from '../../components/CarouselMain';
import CarouselSub from '../../components/CarouselSub';

export default function Home({ DataMain, DataNetflix, DataPrime, DataDisney, DataHbo, DataHulu, DataPeacock, DataParamount, DataStarz, DataShowtime, DataApple, DataMubi }) {

  if (DataMain) {var imagesMain = DataMain.map(item => item.posterURLs['original']);}

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
        { imagesMain && <CarouselMain images={imagesMain} serviceName="Today's Top Picks" /> }
      </div>
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

export async function getStaticPaths() {
  return {
    paths: [
      {params: { country: 'ca' }},
      {params: { country: 'gb' }},
      {params: { country: 'us' }},
      {params: { country: 'nl' }},
      {params: { country: 'au' }},
      {params: { country: 'nz' }},
      {params: { country: 'at' }},
      {params: { country: 'de' }},
      {params: { country: 'it' }},
      {params: { country: 'es' }},
      {params: { country: 'ch' }},
      {params: { country: 'fr' }},
      {params: { country: 'be' }},
      {params: { country: 'dk' }},
      {params: { country: 'fi' }},
      {params: { country: 'no' }},
      {params: { country: 'pt' }},
      {params: { country: 'se' }},
      {params: { country: 'ar' }},
      {params: { country: 'br' }},
      {params: { country: 'cl' }},
      {params: { country: 'co' }},
      {params: { country: 'mx' }}
    ],
    fallback: false
  };
}

export async function getStaticProps({ params: { country }}) {

  const serviceByCountry = await fetch_service_by_country();

  if (serviceByCountry?.netflix?.includes(country)) {
    const array = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 3);
    var DataMain = array.slice(0,5);
  } else {
    var DataMain = null;
  }

  if (serviceByCountry?.netflix?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'netflix', 2);
    var DataNetflix = array1.concat(array2);
  } else {
    var DataNetflix = null;
  }

  if (serviceByCountry?.prime?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'prime', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'prime', 2);
    var DataPrime = array1.concat(array2);
  } else {
    var DataPrime = null;
  }

  if (serviceByCountry?.disney?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'disney', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'disney', 2);
    var DataDisney = array1.concat(array2);
  } else {
    var DataDisney = null;
  }

  if (serviceByCountry?.hbo?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hbo', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hbo', 2);
    var DataHbo = array1.concat(array2);
  } else {
    var DataHbo = null;
  }

  if (serviceByCountry?.hulu?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hulu', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'hulu', 2);
    var DataHulu = array1.concat(array2);
  } else {
    var DataHulu = null;
  }

  if (serviceByCountry?.peacock?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'peacock', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'peacock', 2);
    var DataPeacock = array1.concat(array2);
  } else {
    var DataPeacock = null;
  }

  if (serviceByCountry?.paramount?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'paramount', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'paramount', 2);
    var DataParamount = array1.concat(array2);
  } else {
    var DataParamount = null;
  }

  if (serviceByCountry?.starz?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'starz', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'starz', 2);
    var DataStarz = array1.concat(array2);
  } else {
    var DataStarz = null;
  }

  if (serviceByCountry?.showtime?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'showtime', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'showtime', 2);
    var DataShowtime = array1.concat(array2);
  } else {
    var DataShowtime = null;
  }

  if (serviceByCountry?.apple?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'apple', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'apple', 2);
    var DataApple = array1.concat(array2);
  } else {
    var DataApple = null;
  }

  if (serviceByCountry?.mubi?.includes(country)) {
    const array1 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'mubi', 1);
    const array2 = await fetch_by_country_service_page(`${baseURL}/search/pro`, country, 'mubi', 2);
    var DataMubi = array1.concat(array2);
  } else {
    var DataMubi = null;
  }

  return {
    props: {
      DataMain: DataMain,
      DataNetflix: DataNetflix,
      DataPrime: DataPrime,
      DataDisney: DataDisney,
      DataHbo: DataHbo,
      DataHulu: DataHulu,
      DataPeacock: DataPeacock,
      DataParamount: DataParamount,
      DataStarz: DataStarz,
      DataShowtime: DataShowtime,
      DataApple: DataApple,
      DataMubi: DataMubi
    }
  };
}