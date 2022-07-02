import '../styles/globals.css';
import Layout from '../components/Layout';
import '../components/CarouselMain/css/emblaMain.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
