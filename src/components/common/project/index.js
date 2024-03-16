import React, { useEffect, useState } from 'react'
import Heading from '../heading'
import { Container, Col, Row } from 'react-bootstrap'
import Image from 'next/image'
const Project = () => {
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

            <div className="project-layout">
                <Container className='py-5'>
                    <Row className='align-items-center'>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='py-5'>
                            <h3 data-aos="fade-up" data-aos-delay="0">Quadra Freelancers</h3>
                            <p data-aos="fade-up" data-aos-delay="100" className='desc-text'>
                                Quadra: Elevate Your Freelance Experience. Seamlessly connect clients with skilled professionals for tailored projects. Experience the power of efficient collaboration and productivity.
                            </p>
                            <ul className='px-0 py-3 m-0'>
                                <li data-aos="fade-up" data-aos-delay="0" className='list-item desc-text py-2'>
                                    Clients find and Con nect with Skilled Professionals Easily.
                                </li>
                                <li data-aos="fade-up" data-aos-delay="100" className='list-item desc-text py-2'>
                                    Seamlessly work toge ther to fulfill project needs.
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200" className='list-item desc-text py-2'>
                                    Efficient project co mpletion with Quadra&apos;s platform.
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
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='drop-shadow imgsection' data-aos="zoom-in" data-aos-delay="100">
                            {
                                curItem == 1 ? <Image src="/image/quadra.png" aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={1080} height={1080} /> : <></>
                            }

                            {
                                curItem == 2 ? <Image src="/image/tech.png" aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={1080} height={1080} /> : <></>
                            }
                            {
                                curItem == 3 ? <Image src="/image/quadra-logo.png" aria-label="Mukesh singh" alt="kabawat" aria-labelledby="kabawat" width={1080} height={1080} /> : <></>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Project