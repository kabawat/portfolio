import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from '../heading'
import TechProjectCard from './TechProjectCard'

const TechProjects = () => {
  return (
    <div className="home_project tech-projects">
      <Container>
        <Row className='justify-content-center'>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
            <Heading title={'Recent Work — Technical'} />
            <p className='text-center desc-text' data-aos="zoom-in">
              Terminal-styled showcase with neon accents, grid overlays, and cycling media.
            </p>
          </Col>
        </Row>

        <Row className='gy-4 mt-2'>
          <Col xxl={12}>
            <TechProjectCard
              title='Quadra Freelancers'
              description='Elevate your freelance experience. Seamlessly connect clients with skilled professionals for tailored projects.'
              bullets={[
                'Clients connect with skilled professionals easily',
                'Seamless collaboration for project delivery',
                'Efficient execution with Quadra platform',
              ]}
              tags={['React', 'Next.js', 'Node.js', 'MongoDB']}
            />
          </Col>

          <Col xxl={12}>
            <TechProjectCard
              title='Techkilla Technologies'
              description='Innovative experiential technology across industries to craft immersive experiences.'
              bullets={[
                'AI Solution',
                'Microsite design',
                'Virtual reality Solutions',
                'Playable Ads',
                'On-ground activations',
              ]}
              tags={['React', 'Three.js', 'WebGL', 'Next.js']}
            />
          </Col>

          <Col xxl={12}>
            <TechProjectCard
              title='TaxSpanner'
              description='India’s leading online tax filing platform simplifying ITR preparation and e-filing.'
              bullets={[
                'Individual ITR Filing',
                'Business Tax Solutions & Compliance',
                'GST & TDS Compliance Services',
                'Bookkeeping & Audit Services',
              ]}
              tags={['React', 'Node.js', 'Express', 'MongoDB']}
            />
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .tech-projects { padding: 40px 0; }
        .gy-4 > :global(.col) { margin-bottom: 24px; }
      `}</style>
    </div>
  )
}

export default TechProjects


