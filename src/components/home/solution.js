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
                                <Image src="/icon/mobile.png" width={400} height={400} />
                            </div>
                            <div className='small_heading text-center py-2' data-aos="zoom-in">App Development</div>
                            <p className='desc-text text-center' data-aos="zoom-out">
                                Delivering exceptional IT solutions. Let&apos;s meet your web needs with excellence and precision. Join us for unparalleled service and quality.
                            </p>
                        </Col>
                        <Col className='mt-5' xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className='tech_image' data-aos="zoom-in">
                                <Image src="/icon/tech.png" width={1024} height={1024} />
                            </div>
                        </Col>
                        <Col className='mt-5' xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                            <div className='solution_icon' data-aos="zoom-in-up">
                                <Image src="/icon/web.png" width={400} height={400} />
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
