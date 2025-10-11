import { Inter } from "next/font/google";
import LayoutHelper from "@/helper/layoutHelper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mukesh Singh Kabawat - Full Stack Developer",
    template: "%s | Mukesh Singh Kabawat"
  },
  description: "Full Stack Developer with 3+ years experience in React, Node.js, Next.js, MongoDB, and modern web technologies. Specializing in web applications, mobile apps, and innovative solutions.",
  keywords: [
    // Primary Brand Keywords
    "Mukesh Singh Kabawat",
    "Kabawat Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Software Engineer",
    
    // Local SEO Keywords
    "Rajasthan Software Engineer",
    "Jalore Developer",
    "Sanchore Tech Expert",
    "Bhinmal Programmer",
    "India Software Developer",
    
    // Core Technical Skills
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Python Developer",
    "MERN Stack Developer",
    "MEAN Stack Developer",
    
    // Specializations
    "Web Development",
    "Mobile App Development",
    "AI Development",
    "Machine Learning Engineer",
    "Frontend Developer",
    "Backend Developer",
    "API Developer",
    "Database Developer",
    
    // Industry Keywords
    "Portfolio Website",
    "Software Development",
    "Tech Solutions",
    "Digital Innovation",
    "Custom Software Development",
    "E-commerce Development",
    "SaaS Development",
    
    // Service Keywords
    "Freelance Developer",
    "Remote Developer",
    "Consultant Developer",
    "Tech Consultant",
    "Software Architect",
    "Technical Lead",
    "DevOps Engineer",
    "Cloud Developer"
  ],
  authors: [{ name: "Mukesh Singh Kabawat" }],
  creator: "Mukesh Singh Kabawat",
  publisher: "Mukesh Singh Kabawat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kabawat.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mukesh Singh Kabawat - Full Stack Developer",
    description: "Full Stack Developer with 3+ years experience in React, Node.js, Next.js, MongoDB, and modern web technologies. Specializing in web applications, mobile apps, and innovative solutions.",
    url: 'https://kabawat.vercel.app',
    siteName: 'Mukesh Singh Kabawat Portfolio',
    images: [
      {
        url: '/image/hero_one.jpg',
        width: 1200,
        height: 630,
        alt: 'Mukesh Singh Kabawat - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mukesh Singh Kabawat - Full Stack Developer",
    description: "Full Stack Developer with 3+ years experience in React, Node.js, Next.js, MongoDB, and modern web technologies.",
    images: ['/image/hero_one.jpg'],
    creator: '@kabawat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-placeholder',
    bing: 'bing-site-verification-code-placeholder',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#317EFB' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kabawat.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kabawat Portfolio" />
        <meta name="application-name" content="Kabawat Portfolio" />
        <meta name="msapplication-TileColor" content="#317EFB" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jalore, Rajasthan" />
        <meta name="geo.position" content="25.0800;72.3100" />
        <meta name="ICBM" content="25.0800, 72.3100" />
        <meta name="DC.title" content="Mukesh Singh Kabawat - Full Stack Developer Portfolio" />
        <meta name="DC.creator" content="Mukesh Singh Kabawat" />
        <meta name="DC.subject" content="Full Stack Development, AI Engineering, Software Development" />
        <meta name="DC.description" content="Professional portfolio of Mukesh Singh Kabawat, Full Stack Developer and AI Engineer from Rajasthan, India" />
        <meta name="DC.publisher" content="Mukesh Singh Kabawat" />
        <meta name="DC.contributor" content="Mukesh Singh Kabawat" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Portfolio Website" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://kabawat.vercel.app" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Rajasthan, India" />
        <meta name="DC.rights" content="Copyright Mukesh Singh Kabawat" />
        <meta name="twitter:site" content="@kabawat" />
        <meta name="twitter:creator" content="@kabawat" />
        <meta name="twitter:domain" content="kabawat.vercel.app" />
        <meta name="facebook:app_id" content="your-facebook-app-id" />
        <meta name="instagram:creator" content="w3codingclub" />
        <meta name="linkedin:owner" content="kabawat" />
        <meta name="github:owner" content="kabawat" />
        <meta name="pinterest:site" content="kabawat" />
        <meta name="youtube:channel" content="your-youtube-channel-id" />
        <meta name="tiktok:creator" content="your-tiktok-username" />
        <meta name="snapchat:creator" content="your-snapchat-username" />
        <meta name="telegram:channel" content="your-telegram-channel" />
        <meta name="whatsapp:business" content="+91-6377576922" />
      </head>
      <body className={inter.className}>
        <LayoutHelper />
        {children}
      </body>
    </html>
  );
}
