import Home from '@/page/home';
import React from 'react'

export const metadata = {
  title: "Mukesh Singh Kabawat - Full Stack Developer Portfolio",
  description: "Experienced Full Stack Developer specializing in React, Node.js, Next.js, MongoDB, and modern web technologies. 3+ years of expertise in building scalable web applications, mobile apps, and innovative digital solutions. View my portfolio of projects and technical skills.",
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
  openGraph: {
    title: "Mukesh Singh Kabawat - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React, Node.js, Next.js, MongoDB, and modern web technologies. 3+ years of expertise in building scalable web applications, mobile apps, and innovative digital solutions.",
    url: 'https://kabawat.vercel.app',
    images: [
      {
        url: '/image/hero_one.jpg',
        width: 1200,
        height: 630,
        alt: 'Mukesh Singh Kabawat - Full Stack Developer Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mukesh Singh Kabawat - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React, Node.js, Next.js, MongoDB, and modern web technologies.",
    images: ['/image/hero_one.jpg'],
  },
  alternates: {
    canonical: 'https://kabawat.vercel.app',
  },
};

const Page = () => {
  return <Home />
}

export default Page