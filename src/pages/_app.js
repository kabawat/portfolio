import ScrollToTop from '@/components/common/ScrollToTop';
import '@/styles/globals.scss'
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';

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
