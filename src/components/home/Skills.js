import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import skills from '@/data/skills';

function getTotalYearsAndMonths(pastDate) {
    const currentDate = new Date();
    const past = new Date(pastDate);

    const yearDiff = currentDate.getFullYear() - past.getFullYear();
    const monthDiff = currentDate.getMonth() - past.getMonth();

    let totalYears = yearDiff;
    let totalMonths = monthDiff;

    if (monthDiff < 0) {
        totalYears--;
        totalMonths = 12 + monthDiff;
    }

    return `${totalYears}.${totalMonths}`;
}

const Skills = () => {
    return (
        <Container>
            <Row>
                {
                    skills?.map((item, keys) => {
                        return <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className='py-4' data-aos="fade-up" data-aos-delay={`${keys * 100}`}>
                            <div className="skils-container d-flex align-items-center">
                                <div className="skill-icon-box">
                                    <div className="skill-icon">
                                        <Image src={item?.icon} alt={item?.skill} width={80} height={80} />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="skill-heading">
                                        {item?.skill}
                                    </h5>
                                    <p className='skill-desc'>
                                        Expriance : <strong>{getTotalYearsAndMonths(item?.expriance)}</strong> years
                                    </p>
                                </div>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </Container>
    )
}

export default Skills