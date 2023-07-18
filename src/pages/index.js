import Header from '@/components/header'
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
      </div>
    </main>
  )
}

export default Home