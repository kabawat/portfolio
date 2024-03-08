
import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Skills from '../common/Skills'
const Experience = () => {
    return (
        <>
            <Container fluid className='skills-container'>
                <Row className='justify-content-center'>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <h2 className='text-center Experience-heading' data-aos="zoom-in" data-aos-delay="0"> Experience</h2>
                        <div className="mb-3">
                            <div className='d-flex flex-column align-items-center'>
                                <div className="title-box"></div>
                                <div className="title-line"></div>
                            </div>
                        </div>
                        <p className='text-center desc-text'>
                            Obviously I&apos;m a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.
                        </p>
                    </Col>
                </Row>
                {/*  */}

                <Row className='align-items-center'>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Skills />
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='py-4'>
                        <div className="year">Feb 2023 <span>-</span> Dec 2023 </div>
                        <h3 className='mt-3'> MERN Stack <span>Dev</span>eloper</h3>
                        <p className='p-0 m-0 desc-text company'><strong>Techkilla Technologies</strong> : New Delhi</p>
                        <Row>
                            <Col xxl={9} xl={9} lg={9} md={12} sm={10} xs={10}>
                                <p className='desc-text py-3'>
                                    As a MERN Stack Developer at TechKilla, I led the development of dynamic
                                    web applications using Next.js, React.js, Node.js, and Express.js.
                                    Leveraging MongoDB for data management and integrating Samil for
                                    secure authentication across projects.
                                </p>
                                <p className='p-0 m-0 desc-text company'><strong>Skills</strong> : HTML, SCSS, Javascript, bootstrap, React, Node, Express, Next.js, MongoDB, PHP, React Native</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container >
        </>
    )
}

export default Experience