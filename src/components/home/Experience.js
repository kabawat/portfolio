
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skills from '@/components/common/Skills'
import Heading from '@/components/common/heading'
const Experience = () => {
    return (
        <>
            <Container className='skills-container'>
                <Row className='justify-content-center'>
                    <Col xxl={7} xl={7} lg={7} md={8} sm={12} xs={12}>
                        <Heading title={'Past Experience'} />
                        <p className='text-center desc-text' data-aos="zoom-in">
                            Charting the Course: Navigating Through Past Experiences, Learning from Challenges, and Celebrating Achievements as Stepping Stones Towards Future Success
                        </p>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col xxl={5} xl={5} lg={5} md={6} sm={12} xs={12}>
                        <Skills />
                    </Col>
                    <Col xxl={7} xl={7} lg={7} md={6} sm={12} xs={12} className='py-4 mb_Experience flex-column align-items-center'>
                        <Company
                            post="React"
                            company="Next Big Technology"
                            location="Jaipur (rajasthan)"
                            start={'Nov 2022'}
                            end={'Jan 2023'}
                            skills={'HTML, CSS, SCSS, Javascript, bootstrap, React,  Next.js, socket.io'}
                            desc={`As a React Developer at Next Big Technology, I developed dynamic web apps with Next.js and React.js, focusing on intuitive UI/UX. Leveraged React.js expertise for efficient state management, integrated Samil for secure authentication, enhancing project security.`}
                        />
                        <Company
                            post="MERN Stack"
                            company="Techkilla Technologies"
                            location="New Delhi"
                            start={'Feb 2023'}
                            end={'Dec 2023'}
                            skills={' HTML, SCSS, Javascript, bootstrap, React, Node, Express, Next.js, MongoDB, PHP, React Native'}
                            desc={`As a MERN Stack Developer at TechKilla, I led the development of dynamic web applications using Next.js, React.js, Node.js, and Express.js. Leveraging MongoDB for data management and integrating Samil for secure authentication across projects.`}
                        />
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Experience

export function Company({ post, company, location, start, end, skills, desc }) {
    return (
        <div className='py-2'>
            <Row className="align-items-center justify-content-between mb_exp_title">
                <Col xxl={7} xl={7} md={12} data-aos="zoom-in-left" data-aos-delay="0">
                    <h3 className='mt-1'> {post} <span>Dev</span>eloper</h3>
                </Col>
                <Col xxl={5} xl={5} md={12} data-aos="zoom-in-right" data-aos-delay="0">
                    <div className="year">{start} <span>-</span> {end} </div>
                </Col>
            </Row>
            <p className='p-0 m-0 desc-text company' data-aos="zoom-in-up" data-aos-delay="100"><strong>{company}</strong> : {location}</p>
            <Row>
                <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                </Col>
            </Row>
            <p className='desc-text desc-text_one py-3' data-aos="zoom-in-up" data-aos-delay="200">
                {desc}
            </p>
            <p className='p-0 m-0  desc-text desc-text_one company' data-aos="zoom-in-up" data-aos-delay="300"><strong>Skills</strong> : {skills}</p>
        </div>
    )
}