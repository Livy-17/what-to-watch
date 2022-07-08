import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showNavbar }) => {

  return ( 
    <>
      <Head>
        <title>WhatToWatch</title>
      </Head>
      <div style={{ backgroundColor: 'rgba(24, 24, 24, 1)' }} >
        <header>
          { showNavbar && <Header /> }
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