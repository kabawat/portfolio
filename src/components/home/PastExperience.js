import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '@/components/common/heading'

const PastExperience = () => {
    return (
        <>
            <div className='past-experience-container'>
                <Row className='justify-content-center'>
                    <Col xxl={8} xl={8} lg={8} md={10} sm={12} xs={12}>
                        <Heading title={'Past Experience'} />
                        <p className='text-center desc-text' data-aos="zoom-in">
                            A Journey Through Professional Growth: From Learning Fundamentals to Mastering Advanced Technologies
                        </p>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col xxl={10} xl={10} lg={12} md={12} sm={12} xs={12}>
                        <div className="timeline-container">
                            <ExperienceCard
                                position="Software Engineer"
                                company="Prismberry Technologies"
                                location="Noida"
                                duration="1 January 2024 - Present"
                                type="Full-time"
                                description="Developing scalable web applications and backend services using modern technologies. Building robust solutions with React, Next.js, and Python frameworks while ensuring optimal performance and reliability."
                                technologies={['React', 'Next.js', 'Node.js', 'FastAPI', 'Django', 'Docker', 'AWS', 'TypeScript', 'PostgreSQL']}
                                achievements={[
                                    "Led development of enterprise-level applications",
                                    "Improved system performance by 50% through optimization",
                                    "Mentored junior developers and conducted technical training",
                                    "Implemented microservices architecture for scalability",
                                    "Collaborated with product team on feature planning and execution"
                                ]}
                                delay="0"
                                isCurrent={true}
                            />
                            <ExperienceCard
                                position="MERN Stack Developer"
                                company="Techkilla Technologies"
                                location="Remote"
                                duration="Feb 2023 - Dec 2023"
                                type="Full-time"
                                description="Developed and maintained leaderboard systems and ranking algorithms for web applications. Focused on creating efficient data structures and real-time updates using MERN stack technologies while ensuring optimal performance and user experience."
                                technologies={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'React Native', 'PHP']}
                                achievements={[
                                    "Developed and deployed multiple full-stack applications",
                                    "Optimized database queries resulting in 40% performance improvement",
                                    "Mentored junior developers and conducted code reviews",
                                    "Implemented secure authentication and authorization systems",
                                    "Reduced application load time by 35% through optimization"
                                ]}
                                delay="200"
                            />
                            <ExperienceCard
                                position="React Developer"
                                company="Next Big Technology"
                                location="Jaipur, Rajasthan"
                                duration="Nov 2022 - Jan 2023"
                                type="Full-time"
                                description="Developed dynamic web applications using React.js and Next.js, focusing on creating intuitive user interfaces and seamless user experiences. Implemented state management solutions and integrated authentication systems."
                                technologies={['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Socket.io']}
                                achievements={[
                                    "Built responsive web applications with modern React patterns",
                                    "Implemented real-time features using Socket.io",
                                    "Collaborated with cross-functional teams on multiple projects",
                                    "Improved application performance by 25% through code optimization",
                                    "Participated in agile development processes and sprint planning"
                                ]}
                                delay="400"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default PastExperience

const ExperienceCard = ({ position, company, location, duration, type, description, technologies, achievements, delay, isCurrent = false }) => {
    return (
        <div className="experience-card" data-aos="fade-up" data-aos-delay={delay}>
            <div className="card-header">
                <div className="position-info">
                    <h3 className="position-title">{position}</h3>
                    <div className="company-details">
                        <span className="company-name">{company} <span className="location">({location})</span></span>
                    </div>
                </div>
                <div className="duration-info">
                    <span className="duration">{duration}</span>
                    <span className="job-type">{type}</span>
                </div>
            </div>
            
            <div className="card-body">
                <p className="description">{description}</p>
                
                <div className="technologies-section">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                        {technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
                
                <div className="achievements-section">
                    <h4>Key Achievements</h4>
                    <ul className="achievements-list">
                        {achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Advanced Technical Decorative Element */}
            <div className="card-decoration">
                <div className="tech-hologram">
                    <div className="hologram-grid"></div>
                    <div className="hologram-data">
                        <div className="data-stream stream-1"></div>
                        <div className="data-stream stream-2"></div>
                        <div className="data-stream stream-3"></div>
                    </div>
                    <div className="hologram-core">
                        <div className="core-ring ring-1"></div>
                        <div className="core-ring ring-2"></div>
                        <div className="core-ring ring-3"></div>
                        <div className="core-center"></div>
                    </div>
                </div>
                
                {/* Tech Position Display */}
                <div className="tech-position-display">
                    <div className="position-terminal">
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="terminal-title">SYSTEM_STATUS.exe</div>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="prompt">C:\portfolio&gt;</span>
                                <span className="command">position.exe</span>
                            </div>
                            <div className="terminal-output">
                                <div className="output-line">
                                    <span className="label">POSITION:</span>
                                    <span className="value">{position}</span>
                                </div>
                                <div className="output-line">
                                    <span className="label">COMPANY:</span>
                                    <span className="value">{company}</span>
                                </div>
                                <div className="output-line">
                                    <span className="label">STATUS:</span>
                                    <span className={`value ${isCurrent ? 'active' : 'completed'}`}>
                                        {isCurrent ? 'ACTIVE' : 'COMPLETED'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tech-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                </div>
                
                <div className="tech-scanline"></div>
                <div className="tech-glow"></div>
                
                {/* Advanced Tech Elements */}
                <div className="tech-circuits">
                    <div className="circuit circuit-1"></div>
                    <div className="circuit circuit-2"></div>
                    <div className="circuit circuit-3"></div>
                </div>
                
                <div className="tech-matrix">
                    <div className="matrix-column col-1"></div>
                    <div className="matrix-column col-2"></div>
                    <div className="matrix-column col-3"></div>
                </div>
            </div>
        </div>
    )
}
