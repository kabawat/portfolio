import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import media from '@/data/media';

const Hero = () => {
    const [isMedia, setIsMedia] = useState(false)

    const toggleMedia = () => {
        setIsMedia(!isMedia);
    };

    return (
        <section className="hero-section d-flex justify-content-center pt-100 align-items-center flex-column" role="main" aria-labelledby="hero-heading">
            <div className="hero-intro">
                <strong className='text-center d-block' data-aos="zoom-in-up" data-aos-delay="0">Hi There!</strong>
                <h1 id="hero-heading" className='text-center py-2' data-aos="zoom-in" data-aos-delay="100">Welcome To My <span>Portfolio!</span></h1>
                <p className='text-center' data-aos="zoom-in-up" data-aos-delay="200">
                    Web Application <span>|</span> App Development
                </p>
                <p className='desc text-center pt-3' data-aos="zoom-in-up" data-aos-delay="300">
                    Pathway to Progress: Innovating Tomorrow&apos;s Solutions
                </p>
                <div className="about-social" data-aos="zoom-in-up" data-aos-delay="400">
                    <div className="d-flex justify-content-center">
                        <button 
                            className={`cta ${isMedia && 'isMedia'}`} 
                            onClick={toggleMedia}
                            aria-label={isMedia ? "Hide social media links" : "Show social media links"}
                            aria-expanded={isMedia}
                            aria-controls="social-links"
                        >
                            <span>Follow me</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px" aria-hidden="true">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="social-link-list d-flex justify-content-center m-auto">
                        <div className={`wrapper-media ${isMedia && 'isMedia'}`} id="social-links" role="region" aria-label="Social media links">
                            {
                                media?.map((item, index) => {
                                    return <div className='list' key={index} style={{ transitionDelay: isMedia ? `${index * 0.1}s` : '0s' }}>
                                        <a 
                                            href={item?.link} 
                                            className={`social-link icon ${item?.title}`} 
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            aria-label={`Visit Mukesh Singh Kabawat's ${item?.title} profile (opens in new tab)`}
                                        >
                                            <span className="tooltip" aria-hidden="true">{item?.title}</span>
                                            <span>
                                                <Image 
                                                    src={item?.icon} 
                                                    alt={`${item?.title} icon`}
                                                    width={50} 
                                                    height={50}
                                                    loading="lazy"
                                                    placeholder="blur"
                                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjY4OGZhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K"
                                                />
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
        </section>
    )
}

export default Hero