import React, { useEffect, useState } from 'react'
import Heading from '../heading'
import { Container, Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const ProjectThree = () => {
    const [curItem, setCurItem] = useState(1)
    const handalChange = ({ target }) => {
        const { value } = target
        setCurItem(value)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (curItem < 3) {
                setCurItem(curItem + 1);
            } else {
                setCurItem(1);
            }
        }, 4000);
        return () => clearTimeout(timeout);
    }, [curItem]); // Dependency array
    return (
        <>
            <div className="project-layout">
                <Container className='py-5'>
                    <Row className='align-items-center'>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='py-5'>
                            <h3 data-aos="fade-up" data-aos-delay="0">TaxSpanner</h3>
                            <p data-aos="fade-up" data-aos-delay="100" className='desc-text'>
                                TaxSpanner is India&apos;s leading online tax filing platform, simplifying income tax return preparation and e-filing for individuals and businesses. Experience seamless tax compliance with our user-friendly interface.
                            </p>
                            <ul className='px-0 py-3 m-0'>
                                <li data-aos="fade-up" data-aos-delay="0" className='list-item desc-text py-2'>
                                    Individual Tax Return (ITR) Filing
                                </li>
                                <li data-aos="fade-up" data-aos-delay="100" className='list-item desc-text py-2'>
                                    Business Tax Solutions &amp; Compliance
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200" className='list-item desc-text py-2'>
                                    GST &amp; TDS Compliance Services
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200" className='list-item desc-text py-2'>
                                    Bookkeeping &amp; Audit Services
                                </li>
                            </ul>
                            <div className=" d-flex py-2 justify-content-between flex-column align-items-center" data-aos="fade-up" data-aos-delay="100">
                                <div className="dotSelect d-flex justify-content-between">
                                    <input type="radio" onChange={handalChange} value={1} id="start" name='project' />
                                    <input type="radio" onChange={handalChange} value={2} id="progress" name='project' />
                                    <input type="radio" onChange={handalChange} value={3} id="end" name='project' />

                                    <label htmlFor="start" className={`dot ${curItem == 1 && 'active'}`}>
                                        <span> Discover</span>
                                    </label>
                                    <label htmlFor="progress" className={`dot ${curItem == 2 && 'active'}`}>
                                        <span>Technology</span>
                                    </label>
                                    <label htmlFor="end" className={`dot ${curItem == 3 && 'active'}`}>
                                        <span>Product</span>
                                    </label>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='drop-shadow imgsection'>
                            {
                                curItem == 1 ?
                                    <div className="" data-aos="zoom-out-up" data-aos-delay="0">
                                        <Image 
                                            src="/image/quadra.png" 
                                            alt="TaxSpanner Project - Tax Filing Platform by Mukesh Singh Kabawat" 
                                            title="TaxSpanner Project - Professional Tax Filing Solution"
                                            width={1080} 
                                            height={1080}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjY4OGZhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K"
                                        />
                                    </div> : <></>
                            }

                            {
                                curItem == 2 ? <div className="" data-aos="zoom-in" data-aos-delay="0">
                                    <Image src="/image/tech.png" aria-label="TaxSpanner Technology Stack" alt="TaxSpanner Technology Stack" aria-labelledby="TaxSpanner Technology Stack" width={1080} height={1080} />
                                </div>
                                    : <></>
                            }
                            {
                                curItem == 3 ? <div className="" data-aos="zoom-in" data-aos-delay="0">
                                    <Image src="/image/taxspanner.svg" aria-label="TaxSpanner Logo" alt="TaxSpanner Logo" aria-labelledby="TaxSpanner Logo" width={1080} height={1080} />
                                </div>
                                    : <></>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProjectThree
