import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { baseURL, fetch_by_country_service_page, fetch_service_by_country } from '../../uilts/fetchAPI';
import CarouselMain from '../../components/CarouselMain';
import CarouselSub from '../../components/CarouselSub';

// export default function Home({ netflix: { DataNetflix }, prime: { DataPrime }, disney: { DataDisney }, hbo: { DataHbo }, hulu: { DataHulu }, peacock: { DataPeacock }, paramount: { DataParamount }, starz: { DataStarz }, showtime: { DataShowtime }, apple: { DataApple }, mubi: { DataMubi }}) {
export default function Home() {

  // if (DataNetflix) {var imagesNetflix = DataNetflix.map(item => item.posterURLs['500']);}
  // if (DataPrime) {var imagesPrime = DataPrime.map(item => item.posterURLs['500']);}
  // if (DataDisney) {var imagesDisney = DataDisney.map(item => item.posterURLs['500']);}
  // if (DataHbo) {var imagesHbo = DataHbo.map(item => item.posterURLs['500']);}
  // if (DataHulu) {var imagesHulu = DataHulu.map(item => item.posterURLs['500']);}
  // if (DataPeacock) {var imagesPeacock = DataPeacock.map(item => item.posterURLs['500']);}
  // if (DataParamount) {var imagesParamount = DataParamount.map(item => item.posterURLs['500']);}
  // if (DataStarz) {var imagesStarz = DataStarz.map(item => item.posterURLs['500']);}
  // if (DataShowtime) {var imagesShowtime = DataShowtime.map(item => item.posterURLs['500']);}
  // if (DataApple) {var imagesApple = DataApple.map(item => item.posterURLs['500']);}
  // if (DataMubi) {var imagesMubi = DataMubi.map(item => item.posterURLs['500']);}

  return (
    <>
      <div>
        {/* { imagesNetflix && <CarouselSub images={imagesNetflix} serviceName='Netflix' /> }
        { imagesPrime && <CarouselSub images={imagesPrime} serviceName='Prime' /> }
        { imagesDisney && <CarouselSub images={imagesDisney} serviceName='Disney' /> }
        { imagesHbo && <CarouselSub images={imagesHbo} serviceName='HBO' /> }
        { imagesHulu && <CarouselSub images={imagesHulu} serviceName='Hulu' /> }
        { imagesPeacock && <CarouselSub images={imagesPeacock} serviceName='Peacock' /> }
        { imagesParamount && <CarouselSub images={imagesParamount} serviceName='Paramount' /> }
        { imagesStarz && <CarouselSub images={imagesStarz} serviceName='Starz' /> }
        { imagesShowtime && <CarouselSub images={imagesShowtime} serviceName='Showtime' /> }
        { imagesApple && <CarouselSub images={imagesApple} serviceName='Apple' /> }
        { imagesMubi && <CarouselSub images={imagesMubi} serviceName='Mubi' /> } */}
      </div>
    </>
  )
}

export async function getStaticProps() {

  const country = 'us';

  fetch_service_by_country()
    .then(res => res.json())
    .then(res => {var serviceByCountry = res});

  if (serviceByCountry?.netflix?.includes(country)) {
    const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'netflix', 1);
    const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'netflix', 2);
    var DataNetflix = JSON.stringify(Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results)));
  }

  // if (serviceByCountry?.prime?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'prime', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'prime', 2);
  //   var DataPrime = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.disney?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'disney', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'disney', 2);
  //   var DataDisney = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.hbo?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'hbo', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'hbo', 2);
  //   var DataHbo = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.hulu?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'hulu', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'hulu', 2);
  //   var DataHulu = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.peacock?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'peacock', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'peacock', 2);
  //   var DataPeacock = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.paramount?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'paramount', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'paramount', 2);
  //   var DataParamount = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.starz?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'starz', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'starz', 2);
  //   var DataStarz = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.showtime?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'showtime', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'showtime', 2);
  //   var DataShowtime = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.apple?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'apple', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'apple', 2);
  //   var DataApple = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  // if (serviceByCountry?.mubi?.includes(country)) {
  //   const promise1 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'mubi', 1);
  //   const promise2 = await fetch_by_country_service_page(`${baseURL}/search/basic`, country, 'mubi', 2);
  //   var DataMubi = Promise.all([promise1, promise2]).then(v => v[0].results.concat(v[1].results));
  // }

  return {
    props: {
      // netflix: DataNetflix,
      // prime: DataPrime,
      // disney: DataDisney,
      // hbo: DataHbo,
      // hulu: DataHulu,
      // peacock: DataPeacock,
      // paramount: DataParamount,
      // starz: DataStarz,
      // showtime: DataShowtime,
      // apple: DataApple,
      // mubi: DataMubi
    }
  }
}