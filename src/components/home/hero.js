import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FiShare2 } from 'react-icons/fi'
const media = [
    {
        icon: '/media/facebook.png',
        link: '/',
        delay: 900,
        title: 'Facebook'
    },
    {
        icon: '/media/github.png',
        link: '/',
        delay: 700,
        title: 'GitHub'
    },
    {
        icon: '/media/instagram.png',
        link: '/',
        delay: 500,
        title: 'Instagram'
    },
    {
        icon: '/media/twitter.png',
        link: '/',
        delay: 700,
        title: 'Twitter'
    },
    {
        icon: '/media/Whatsapp.png',
        link: '/',
        delay: 900,
        title: 'Whatsapp'
    },
    {
        icon: '/media/linked.png',
        link: '/',
        delay: 900,
        title: 'LinkedIn'
    },
    {
        icon: '/media/telegram.png',
        link: '/',
        delay: 900,
        title: 'Telegram'
    },
    {
        icon: '/media/youtube.png',
        link: '/',
        delay: 900,
        title: 'YouTube'
    },
]
const Hero = () => {
    const [isMedia, setIsMedia] = useState(false)

    return (
        <div className="hero-section d-flex justify-content-center pt-100 align-items-center flex-column">
            <div className="hero-intro">
                <h2 className='text-center' data-aos="fade-right" data-aos-delay="200">Hi There!</h2>
                <h1 className='text-center py-2' data-aos="zoom-in" data-aos-delay="0">Welcome To My <span>Portfolio!</span></h1>
                <h3 className='text-center' data-aos="fade-left" data-aos-delay="200">
                    Web Application <span>|</span> Game Development
                </h3>
                <div className="about-social" >
                    <div className="d-flex justify-content-center">
                        <button class={`cta ${isMedia && 'isMedia'}`} onClick={() => setIsMedia(!isMedia)}>
                            <span>Follow me</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="social-link-list d-flex justify-content-center m-auto">
                        <div class={`wrapper-media ${isMedia && 'isMedia'}`}>
                            {
                                media?.map((item, index) => {
                                    return <div className='list' key={index} style={{ transitionDelay: isMedia ? `${index * 0.1}s` : '0s' }}>
                                        <Link href={item?.link} className={`social-link icon ${item?.title}`} data-aos="fade-up" data-aos-delay={item?.delay}>
                                            <span class="tooltip">{item?.title}</span>
                                            <span>
                                                <Image src={item?.icon} alt={item?.title} width={50} height={50} />
                                            </span>
                                        </Link>
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