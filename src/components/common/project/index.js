import React from 'react'
import ProjectOne from './projectOne'
import Heading from '../heading'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectTwo from './projectTwo'

const Project = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                        <Heading title={'Recent Work'} />
                        <p className='text-center desc-text' data-aos="zoom-in">
                            Fostering Progress: Our web development project pioneers innovative solutions, paving the way for a transformative digital landscape and a brighter tomorrow.
                        </p>
                    </Col>
                </Row>
            </Container>
            <ProjectOne />
            <ProjectTwo />
        </>
    )
}

export default Project