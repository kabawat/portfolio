import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SubHeading from '@/components/common/sub_heading'
import CommanHeading from '@/components/common/comman_heading'
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from 'next/navigation';
const Contect = () => {
    const handleSendEmail = () => {
        window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMvkMhgHxzsdVKhCLLCfDxfQxTfMrsvzMFwsHgfmPbCPxwtnKSLdhnWxFPgvHMKMxfqbbh');
    };
    return (
        <Container>
            <Row>
                <Col className='py-5'>
                    <CommanHeading align="left" isLine={false} title={<> <span> Let's Chat.</span> <br /> Tell me about your <br /> project</>} />
                    <p className='desc-text'>
                        Let's collaborate, blend our ideas, and weave something wonderful, a creation that reflects our combined creativity and unique perspectives.
                    </p>
                    <div className="d-flex">
                        <div className='email_card d-flex align-items-center' onClick={handleSendEmail}>
                            <div className="icon">
                                <MdOutlineEmail />
                            </div>
                            <div className='px-3'>
                                <div className="title">
                                    Mail Me At
                                </div>
                                <div className="desc-text">
                                    kshatriyakabawat@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex justify-content-center">
                        <div className="form">
                            <div className='form_heading'>
                                Send us a message 🚀
                            </div>
                            <div class="group">
                                <div class="form_control">
                                    <input class="input input-alt" placeholder="Full Name" required="" type="text" />
                                    <span class="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <div class="group">
                                <div class="form_control">
                                    <input class="input input-alt" placeholder="Email Address" required="" type="text" />
                                    <span class="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <div class="group">
                                <div class="form_control">
                                    <input class="input input-alt" placeholder="Subject" required="" type="text" />
                                    <span class="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <div class="group">
                                <div class="form_control">
                                    <textarea class="input input-alt" placeholder="Tell me more about your project" required="" type="text" />
                                    <span class="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <button class="send_button mt-4 d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div class="text">Send Message</div>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contect
