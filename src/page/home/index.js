"use client"
import Project from '@/components/common/project'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Expertise from '@/components/home/Expertise'
import Skills from '@/components/home/Skills'
import InteractiveSkills from '@/components/home/InteractiveSkills'
import AboutSection from '@/components/home/about-senction'
import Contect from '@/components/home/contect'
import Hero from '@/components/home/hero'
import HowWeDo from '@/components/home/how_we_do'
import Solution from '@/components/home/solution'
import PastExperience from '@/components/home/PastExperience'
import Breadcrumb from '@/components/common/Breadcrumb'
import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectShowcase from '@/components/common/project/ProjectShowcase'


const Home = () => {
  return (
    <main id="main-content">
      <div className="main">
        <div className="main-container" id='home'>
          <Header />
          <Breadcrumb />
          <div className="hero">
            <Hero />
          </div>
        </div>
        <div className='py-5 about-masking' id='about'>
          <AboutSection />
        </div>
        <div className="py-5 past-experience-section" id='experience'>
          <PastExperience />
        </div>
        <div className="home_project">
          {/* <Project /> */}
          <ProjectShowcase/>
        </div>
        {/* <div className="py-5 skills" id='skill'>
          <Skills />
        </div> */}
        <div className="interactive-skills-section" id='interactive-skills'>
          <InteractiveSkills />
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