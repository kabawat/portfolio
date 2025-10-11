import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Typewriter from '@/components/animation/Typewriter';
import texts from '@/data/profile';

const AboutSection = () => {
    return (
        <Container>
            <Row>
                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                    <div className="about d-flex align-items-center justify-content-center flex-column">
                        <div className="heading" data-aos="zoom-in-up" data-aos-delay="0">
                            I<span>&apos;</span>m Mukesh Singh,
                        </div>
                        <div className='heading typewriter' data-aos="zoom-in-up" data-aos-delay="200">
                            <strong>
                                <b>I Am Into</b> <span className='hide'>→</span><br /> <span className="hide">→</span><strong><Typewriter texts={texts} delay={200} /></strong>
                            </strong>
                        </div>
                        <p className='desc' data-aos="zoom-out-up" data-aos-delay="400">
                            As a full-stack developer,  I am passionate about creating innovative and user-friendly web applications.
                        </p>

                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                    <div className="about p-5">
                        <div className="about-back" data-aos="zoom-in-up" data-aos-delay="100">
                            <Image 
                                alt='Professional background design for Mukesh Singh Kabawat portfolio - Modern tech illustration' 
                                title='Portfolio Background Design'
                                src="/bg/bg-2.svg" 
                                width={1920} 
                                height={1080}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjY4OGZhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K"
                            />
                        </div>
                        <div className="p-3" data-aos="zoom-in" data-aos-delay="300">
                            <Image 
                                alt='Professional headshot of Mukesh Singh Kabawat - Full Stack Developer and AI Engineer from Rajasthan, India' 
                                title='Mukesh Singh Kabawat - Professional Profile Photo'
                                src="/masking/mk.png" 
                                width={1920} 
                                height={1080}
                                priority
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4K"
                            />
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection
