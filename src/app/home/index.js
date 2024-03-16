"use client"
import Project from '@/components/common/project'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Experience from '@/components/home/Experience'
import Skills from '@/components/home/Skills'
import AboutSection from '@/components/home/about-senction'
import Hero from '@/components/home/hero'
import React from 'react'
import { Container } from 'react-bootstrap'


const Home = () => {
  return (
    <main>
      <div className="main">
        <div className="main-container">
          <Header />
          <div className="hero">
            <Hero />
          </div>
        </div>
        <div className='py-5 about-masking'>
          <AboutSection />
        </div>
        <div className="py-5 about">
          <Experience />
        </div>
        <div className="home_project">
          <Project />
        </div>
        <div className="py-5 skills">
          <Skills />
        </div>
      </div>
      <Footer />
    </main >
  )
}

export default Home