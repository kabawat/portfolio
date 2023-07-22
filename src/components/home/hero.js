import React from 'react'
import Typewriter from '../animation/Typewriter';
const texts = ['Front End Development', 'Backend Development', 'Web Development', 'Android Development',];
const Hero = () => {
    return (
        <div className="hero-section d-flex justify-content-center align-items-center flex-column">
            <div className="hero-intro">
                <h2 className='text-center' data-aos="fade-right" data-aos-delay="200">Hi There!</h2>
                <h1 className='text-center py-2' data-aos="zoom-in" data-aos-delay="0">Welcome To My <span>Portfolio!</span></h1>
                <h3 className='text-center' data-aos="fade-left" data-aos-delay="200">
                    Web Application <span>|</span> Game Development
                </h3>
            </div>
        </div>
    )
}

export default Hero