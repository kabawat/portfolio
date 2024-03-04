import Header from '@/components/header'
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import AboutSection from '@/components/home/about-senction'
import Hero from '@/components/home/hero'
import Image from 'next/image'
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
          <About />
        </div>
        <div className="py-5 skills">
          <div className="bg">
            {/* <Image src="/bg/blumba.png" width={1920} height={1080} /> */}
          </div>
          <Container>
            <h2 className='text-center' data-aos="zoom-in-up" data-aos-delay="0">Development Skills</h2>
            <Skills />
          </Container>
        </div>
      </div>
    </main >
  )
}

export default Home

// function Example(props) {
//   return (
//     { props.children }
//   );
// }