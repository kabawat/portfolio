import ScrollToTop from '@/components/common/ScrollToTop';
import { useEffect } from 'react';
import "react-circular-progressbar/dist/styles.css";
import '@/styles/globals.scss'
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <>
    <Component {...pageProps} />
    <ScrollToTop />
  </>
}
