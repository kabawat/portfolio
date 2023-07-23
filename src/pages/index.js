import Header from '@/components/header'
import Skills from '@/components/home/Skills'
import AboutSection from '@/components/home/about-senction'
import Hero from '@/components/home/hero'
import React from 'react'
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
        <div className="py-5 skill">
          <h2 className='text-center'>Technical Skills</h2>
          <Skills />
        </div>
      </div>
    </main>
  )
}

export default Home