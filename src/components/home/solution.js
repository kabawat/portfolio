import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../common/heading'
import SubHeading from '../common/sub_heading'
import Image from 'next/image'

const Solution = () => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                    <SubHeading title={<>Over <span>3+ years</span> in IT Solutions.</>} />
                        <p className='text-center desc-text' data-aos="zoom-in">
                            Utilizing React, Node.js, Express, MongoDB, Next.js, React Native, and FastAPI for dynamic Web and App solutions.
                        </p>
                    </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col className='mt-5' xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className='solution_icon' data-aos="zoom-in-up">
                                <Image 
                                    src="/icon/mobile.png" 
                                    alt="Mobile App Development icon - Mukesh Singh Kabawat"
                                    width={400} 
                                    height={400}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjY4OGZhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K"
                                />
                            </div>
                            <div className='small_heading text-center py-2' data-aos="zoom-in">App Development</div>
                            <p className='desc-text text-center' data-aos="zoom-out">
                                Delivering exceptional IT solutions. Let&apos;s meet your web needs with excellence and precision. Join us for unparalleled service and quality.
                            </p>
                        </Col>
                        <Col className='mt-5' xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className='tech_image' data-aos="zoom-in">
                                <Image 
                                    src="/icon/tech.png" 
                                    alt="Technology solutions icon - Mukesh Singh Kabawat"
                                    width={1024} 
                                    height={1024}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjY4OGZhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K"
                                />
                            </div>
                        </Col>
                        <Col className='mt-5' xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className='solution_icon' data-aos="zoom-in-up">
                                <Image 
                                    src="/icon/web.png" 
                                    alt="Web Development icon - Mukesh Singh Kabawat"
                                    width={400} 
                                    height={400}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjY4OGZhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K"
                                />
                            </div>
                            <div className='small_heading text-center py-2' data-aos="zoom-in">Web Development</div>
                            <p className='desc-text text-center' data-aos="zoom-out">
                                Transforming businesses with innovative app development solutions. From concept to launch, we create intuitive and engaging apps that drive success.
                            </p>
                        </Col>
                    </Row>
                </Container>
                )
}

                export default Solution
