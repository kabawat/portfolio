import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import skills from '@/data/skills';
import Heading from '@/components/common/heading';
const Expertise = () => {
    const { frontSkills, backendSkills, Database, other } = skills
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                    <Heading title={'My Areas Of Expertise'} />
                    <p className='text-center desc-text' data-aos="zoom-in">
                        Expertise in Web Development, App Development, UI/UX Design, delivering high-quality solutions tailored to client needs.
                    </p>
                </Col>
            </Row>
            <Row className="py-4">
                <Col>
                    <div className='benifit'>
                        <div className='benifit-icon'>
                            <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#f6880a' }}>
                                <MdOutlineDesignServices />
                            </div>
                        </div>
                        <h5 className='head'>
                            UX & UI Design
                        </h5>
                        <p>
                            Ensuring captivating UI/UX, clear and innovative. My sleek, precise designs deliver compelling messages, effortlessly capturing attention.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='benifit'>
                        <div className='benifit-icon'>
                            <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#4783c8' }}>
                                <FaLaptopCode />
                            </div>
                        </div>
                        <h5 className='head'>
                            Web Development
                        </h5>
                        <p>
                            Seeking a developer for your website&apos;s R&D? I&apos;m a seasoned professional ready to take charge. Let&apos;s elevate your online presence together.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='benifit'>
                        <div className='benifit-icon'>
                            <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#07929f' }}>
                                <TbDeviceMobileCode />
                            </div>
                        </div>
                        <h5 className='head'>
                            Mobile Development
                        </h5>
                        <p>
                            I design and build user-friendly apps using React Native, incorporating the latest trends for Android and iOS platforms. Let&apos;s create together!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Expertise
