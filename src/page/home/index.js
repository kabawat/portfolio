"use client"
import Project from '@/components/common/project'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Experience from '@/components/home/Experience'
import Expertise from '@/components/home/Expertise'
import Skills from '@/components/home/Skills'
import AboutSection from '@/components/home/about-senction'
import Contect from '@/components/home/contect'
import Hero from '@/components/home/hero'
import HowWeDo from '@/components/home/how_we_do'
import Solution from '@/components/home/solution'
import React from 'react'
import { Container } from 'react-bootstrap'


const Home = () => {
  return (
    <main>
      <div className="main">
        <div className="main-container" id='home'>
          <Header />
          <div className="hero">
            <Hero />
          </div>
        </div>
        <div className='py-5 about-masking' id='about'>
          <AboutSection />
        </div>
        <div className="py-5 about" >
          <Experience />
        </div>
        <div className="home_project">
          <Project />
        </div>
        <div className="py-5 skills" id='skill'>
          <Skills />
        </div>
        <div className="py-5 skills">
          <Expertise />
        </div>
        <div className="Solution py-5">
          <Solution />
        </div>
        <div className="py-5">
          <HowWeDo />
        </div>
        <div className="Contect py-5" id="Contect">
          <Contect />
        </div>
      </div>
      <Footer />
    </main >
  )
}

export default Home