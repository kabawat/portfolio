"use client"
import ScrollToTop from '@/components/common/ScrollToTop';
import StructuredData from '@/components/seo/StructuredData';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-circular-progressbar/dist/styles.css";
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/styles/globals.scss'
import AOS from 'aos';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <ErrorBoundary>
      <StructuredData />
      <SpeedInsights />
      <Analytics />
      <ScrollToTop />
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
    </ErrorBoundary>
  );
}
