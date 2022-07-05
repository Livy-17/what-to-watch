import '../styles/globals.css';
import Layout from '../components/Layout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>
      <Layout showNavbar={showNavbar} >
        <Component {...pageProps} setShowNavbar={setShowNavbar} />
      </Layout>
    </>
  )
}

export default MyApp
