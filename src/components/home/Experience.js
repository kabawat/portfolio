
import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
const Experience = () => {
    return (
        <Container fluid>
            {/*  */}

            <Row className='p-100 align-items-center'>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <h2 className='text-center Experience-heading' data-aos="zoom-in" data-aos-delay="0"> Experience</h2>
                    <p className='text-center Experience-desc pt-4' data-aos="zoom-in-up" data-aos-delay="0">
                        Experienced React.js Frontend Developer with 1 year of hands-on UI creation. Skilled in building scalable web apps with React.js, HTML, CSS, and JavaScript. 6 months of MERN stack experience (MongoDB, Express.js, React.js, Node.js) for full-stack development. Strong problem-solving, user-focused passion.
                    </p>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="about-img">
                        <Image src='/image/code-7.webp' width={1920} height={1080} />
                    </div>
                </Col>
            </Row>


        </Container >
    )
}

export default Experience