import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return ( 
    <>
      <div className='bg-black'>
        <Head>
          <title>WhatToWatch</title>
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