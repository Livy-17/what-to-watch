import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return ( 
    <>
      <div>
        <Head>
          <title>WhatToWatch</title>
          {/* <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
        </Head>
        <header>
          <Header />
        </header>
        <main>
          { children }
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
   );
}
 
export default Layout;