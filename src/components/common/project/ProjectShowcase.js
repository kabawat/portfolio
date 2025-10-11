import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from '../heading'

const ProjectShowcase = () => {
  const projects = [
    {
      id: 'quadra',
      title: 'Quadra Freelancers',
      description: 'An architectural platform connecting clients with freelance architects, 3D visualizers, and interior designers. Founded in 2022 in Bangalore by Sujit Thotathil, Quadra promotes collaboration among professionals to create exceptional designs.',
      features: [
        'Architect-Client Matching System',
        '3D Visualization Services',
        'Interior Design Solutions',
        'Professional Collaboration Tools',
        'Project Portfolio Management',
        'Secure Payment Processing',
        'Real-time Communication Platform',
        'Design Review & Feedback System'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Socket.io', '3D Rendering APIs'],
      status: 'completed',
      website: 'https://quadrafreelancers.com'
    },
    {
      id: 'techkilla',
      title: 'Techkilla Technologies',
      description: 'Founded in 2017 in Delhi, Techkilla Technologies specializes in experiential technology solutions. The company helps businesses and brands create engaging and memorable experiences for their customers through innovative technological solutions.',
      features: [
        'Virtual Reality Solutions',
        'Interactive Microsite Design',
        'On-ground Activations',
        'Playable Advertisement System',
        'AR Filters & Instagram Filters',
        'Photo Booth Technology',
        'Brand Experience Solutions',
        'Event Technology Integration'
      ],
      tech: ['React', 'Three.js', 'WebGL', 'AR/VR', 'Unity', 'JavaScript', 'Node.js'],
      status: 'completed',
      website: 'https://techkilla.com'
    },
    {
      id: 'taxspanner',
      title: 'TaxSpanner',
      description: 'India\'s leading online tax filing platform simplifying ITR preparation and e-filing. TaxSpanner provides comprehensive tax solutions for individuals and businesses, making tax compliance effortless with advanced automation and user-friendly interfaces.',
      features: [
        'Individual Tax Return (ITR) Filing',
        'Business Tax Solutions & Compliance',
        'GST & TDS Compliance Services',
        'Automated Bookkeeping & Audit',
        'Real-time Tax Calculations',
        'Secure Document Management',
        'E-filing Integration with Income Tax Department',
        'Tax Advisory & Support Services'
      ],
      tech: ['React', 'NextJs', 'PDF Processing', 'Tax APIs', 'Django', 'Payment Gateway'],
      status: 'completed',
      website: 'https://taxspanner.com'
    }
  ]

  return (
    <div className="project-showcase">
      <Container>
        <Row className='justify-content-center'>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
            <Heading title={'Recent Work'} />
            <p className='text-center desc-text' data-aos="zoom-in">
              Terminal-styled project showcase with neon accents and grid layouts
            </p>
          </Col>
        </Row>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={project.id} className="project-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-number">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="project-content">
                <div className="project-main">
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-status">
                      <span className="status-dot"></span>
                      <span className="status-text">{project.status}</span>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <div className="features-list">
                      {project.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <span className="feature-bullet"></span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-sidebar">
                  <div className="tech-section">
                    <h4 className="tech-title">Technologies</h4>
                    <div className="tech-list">
                      {project.tech.map((tech, i) => (
                        <div key={i} className="tech-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-action">
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      <span>Explore More</span>
                      <span className="action-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .project-showcase {
          padding: 60px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        .project-showcase::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.08) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
          animation: gridMove 20s linear infinite;
        }

        .projects-container {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-item {
          display: flex;
          align-items: flex-start;
          gap: 30px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(246, 136, 10, 0.1);
          position: relative;
          transition: all 0.3s ease;
        }

        .project-item:hover {
          padding-left: 20px;
          background: linear-gradient(90deg, rgba(246, 136, 10, 0.02), transparent);
        }

        .project-item:last-child {
          border-bottom: none;
        }

        .project-number {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f6880a, #e67e00);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(246, 136, 10, 0.3);
        }

        .project-content {
          flex: 1;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .project-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-title-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .project-title {
          color: #0f172a;
          font-size: 28px;
          margin: 0;
          font-weight: 700;
          line-height: 1.2;
        }

        .project-status {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(246, 136, 10, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid rgba(246, 136, 10, 0.2);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f6880a;
        }

        .status-text {
          color: #f6880a;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-description {
          color: #64748b;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
        }

        .project-features {
          margin-top: 15px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 8px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 6px 0;
          position: relative;
        }

        .feature-bullet {
          width: 6px;
          height: 6px;
          background: #f6880a;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
          position: relative;
        }

        .feature-bullet::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: rgba(246, 136, 10, 0.2);
          border-radius: 50%;
          animation: pulse-bullet 2s ease-in-out infinite;
        }

        .feature-text {
          color: #475569;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.4;
          flex: 1;
        }

        @keyframes pulse-bullet {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .project-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .tech-section {
          background: rgba(248, 250, 252, 0.8);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(246, 136, 10, 0.1);
        }

        .tech-title {
          color: #0f172a;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 15px 0;
        }

        .tech-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tech-item {
          background: linear-gradient(135deg, 
            rgba(246, 136, 10, 0.1) 0%, 
            rgba(230, 126, 0, 0.1) 100%);
          color: #e67e00;
          border: 1px solid rgba(246, 136, 10, 0.2);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          background: linear-gradient(135deg, 
            rgba(246, 136, 10, 0.2) 0%, 
            rgba(230, 126, 0, 0.2) 100%);
          transform: translateY(-1px);
        }

        .project-action {
          display: flex;
          justify-content: center;
        }

        .action-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #f6880a, #e67e00);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(246, 136, 10, 0.3);
          text-decoration: none;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(246, 136, 10, 0.4);
          color: white;
          text-decoration: none;
        }

        .action-arrow {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .action-button:hover .action-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .project-content {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .project-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
          
          .project-number {
            width: 50px;
            height: 50px;
            font-size: 16px;
          }
          
          .project-title {
            font-size: 24px;
          }
          
          .features-list {
            gap: 4px;
          }
          
          .feature-item {
            gap: 10px;
            padding: 4px 0;
          }
          
          .feature-text {
            font-size: 13px;
          }
          
          .feature-bullet {
            width: 5px;
            height: 5px;
            margin-top: 5px;
          }
          
          .project-title-section {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }
        }

        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .project-header {
            padding: 15px 20px;
          }
          
          .project-body {
            padding: 20px;
          }
          
          .project-title h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectShowcase
