
import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Skills from '../common/Skills'
const Experience = () => {
    return (
        <>
            <Container className='skills-container'>
                <Row className='justify-content-center'>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <h2 className='text-center Experience-heading' data-aos="zoom-in" data-aos-delay="0">Past Experience</h2>
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
                    <Col xxl={5} xl={5} lg={5} md={6} sm={12} xs={12}>
                        <Skills />
                    </Col>
                    <Col xxl={7} xl={7} lg={7} md={6} sm={12} xs={12} className='py-4 mb_Experience flex-column align-items-center'>
                        <div className='py-2'>
                            <Row className="align-items-center justify-content-between mb_exp_title">
                                <Col xxl={7} xl={7} md={12}>
                                    <h3 className='mt-1'> React <span>Dev</span>eloper</h3>
                                </Col>
                                <Col xxl={5} xl={5} md={12}>
                                    <div className="year">Nov 2022 <span>-</span> Jan 2023 </div>
                                </Col>
                            </Row>
                            <p className='p-0 m-0 desc-text company'><strong>Next Big Technology</strong> : Jaipur (rajasthan)</p>
                            <Row>
                                <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                                </Col>
                            </Row>
                            <p className='desc-text desc-text_one py-3'>
                                As a React Developer at Next Big Technology, I developed dynamic web apps with Next.js and React.js, focusing on intuitive UI/UX. Leveraged React.js expertise for efficient state management, integrated Samil for secure authentication, enhancing project security.
                            </p>
                            <p className='p-0 m-0  desc-text desc-text_one company'><strong>Skills</strong> : HTML, CSS, SCSS, Javascript, bootstrap, React,  Next.js, socket.io</p>
                        </div>
                        <div className='py-2'>
                            <Row className="align-items-center justify-content-between mb_exp_title">
                                <Col xxl={7} xl={7} md={12}>
                                    <h3 className='mt-1'> MERN Stack <span>Dev</span>eloper</h3>
                                </Col>
                                <Col xxl={5} xl={5} md={12}>
                                    <div className="year">Feb 2023 <span>-</span> Dec 2023 </div>
                                </Col>
                            </Row>
                            <p className='p-0 m-0 desc-text company'><strong>Techkilla Technologies</strong> : New Delhi</p>
                            <Row>
                                <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                                </Col>
                            </Row>
                            <p className='desc-text desc-text_one py-3'>
                                As a MERN Stack Developer at TechKilla, I led the development of dynamic
                                web applications using Next.js, React.js, Node.js, and Express.js.
                                Leveraging MongoDB for data management and integrating Samil for
                                secure authentication across projects.
                            </p>
                            <p className='p-0 m-0  desc-text desc-text_one company'><strong>Skills</strong> : HTML, SCSS, Javascript, bootstrap, React, Node, Express, Next.js, MongoDB, PHP, React Native</p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Experience