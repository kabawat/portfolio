import ScrollToTop from '@/components/common/ScrollToTop';
import '@/styles/globals.scss'
import Aos from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return <>
    <Component {...pageProps} />
    <ScrollToTop />
  </>
}
