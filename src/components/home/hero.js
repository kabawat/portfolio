import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import media from '@/data/media';

const Hero = () => {
    const [isMedia, setIsMedia] = useState(false)

    return (
        <div className="hero-section d-flex justify-content-center pt-100 align-items-center flex-column">
            <div className="hero-intro">
                <strong className='text-center d-block' data-aos="zoom-in-up" data-aos-delay="0">Hi There!</strong>
                <h1 className='text-center py-2' data-aos="zoom-in" data-aos-delay="100">Welcome To My <span>Portfolio!</span></h1>
                <p className='text-center' data-aos="zoom-in-up" data-aos-delay="200">
                    Web Application <span>|</span> App Development
                </p>
                <p className='desc text-center pt-3' data-aos="zoom-in-up" data-aos-delay="300">
                    Pathway to Progress: Innovating Tomorrow&apos;s Solutions
                </p>
                <div className="about-social" data-aos="zoom-in-up" data-aos-delay="400">
                    <div className="d-flex justify-content-center">
                        <button className={`cta ${isMedia && 'isMedia'}`} onClick={() => setIsMedia(!isMedia)}>
                            <span>Follow me</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="social-link-list d-flex justify-content-center m-auto">
                        <div className={`wrapper-media ${isMedia && 'isMedia'}`}>
                            {
                                media?.map((item, index) => {
                                    return <div className='list' key={index} style={{ transitionDelay: isMedia ? `${index * 0.1}s` : '0s' }}>
                                        <a href={item?.link} className={`social-link icon ${item?.title}`} target='_blank'>
                                            <span className="tooltip">{item?.title}</span>
                                            <span>
                                                <Image src={item?.icon} alt={"Mukesh Singh Kabawat's" + item?.title} width={50} height={50} />
                                            </span>
                                        </a>
                                    </div>
                                })
                            }

                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero