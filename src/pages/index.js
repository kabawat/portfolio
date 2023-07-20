import Header from '@/components/header'
import Hero from '@/components/home/hero'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <main>
      <div className="main">
        <div className="main-container">
          <Header />
          <div className="hero">
            <Hero />
          </div>
        </div>
        <div className='py-5'>
          <Container>
            <Row>
              <Col>
                <div className="about d-flex align-items-center justify-content-center flex-column">
                  <div className='heading'>
                    <strong>
                      Welcome To My <span>Portfolio!</span>
                    </strong>
                  </div>
                  <p className='desc'>
                    As a full-stack developer,  I am passionate about creating innovative and user-friendly web applications.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="about p-5">
                  <div class="about-masking">
                    <Image src="/image/ms.jpg" width={1920} height={1080} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  )
}

export default Home