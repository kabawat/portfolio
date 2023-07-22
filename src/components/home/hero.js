import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
    const media = [
        {
            icon: '/media/Facebook.png',
            link: '/',
            delay: 900,
            title: 'Facebook'
        },
        {
            icon: '/media/instagram.png',
            link: '/',
            delay: 700,
            title: 'instagram'
        },
        {
            icon: '/media/linked.png',
            link: '/',
            delay: 500,
            title: 'LinkedIn'
        },
        {
            icon: '/media/twitter.png',
            link: '/',
            delay: 700,
            title: 'twitter'
        },
        {
            icon: '/media/Whatsapp.png',
            link: '/',
            delay: 900,
            title: 'Whatsapp'
        },
    ]
    return (
        <div className="hero-section d-flex justify-content-center align-items-center flex-column">
            <div className="hero-intro">
                <h2 className='text-center' data-aos="fade-right" data-aos-delay="200">Hi There!</h2>
                <h1 className='text-center py-2' data-aos="zoom-in" data-aos-delay="0">Welcome To My <span>Portfolio!</span></h1>
                <h3 className='text-center' data-aos="fade-left" data-aos-delay="200">
                    Web Application <span>|</span> Game Development
                </h3>
                <div className="about-social" >
                    <div className="social-link-list d-flex justify-content-center m-auto">
                        {
                            media?.map((item, index) => {
                                return <Link href={item?.link} className="social-link" key={index} data-aos="fade-up" data-aos-delay={item?.delay}>
                                    <Image src={item?.icon} alt={item?.title} width={50} height={50} />
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero