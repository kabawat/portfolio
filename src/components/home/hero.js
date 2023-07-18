import React from 'react'
import Typewriter from '../animation/Typewriter';
const texts = ['Front End Development', 'Backend Development', 'Web Development', 'Android Development',];
const Hero = () => {
    return (
        <div className="hero-section d-flex justify-content-center align-items-center flex-column">
            <div className="hero-intro" data-aos="fade-up-left">
                <h2 className='text-center' >Hi There!</h2>
                <h1 className='text-center' >I'm Mukesh Singh</h1>
                <h3 className='text-center'>
                    {/* M<Typewriter text="ERN Stack Developer" delay={200} infinite /> */}
                    I Am Into  <Typewriter texts={texts} delay={200} />
                </h3>
            </div>
        </div>
    )
}

export default Hero