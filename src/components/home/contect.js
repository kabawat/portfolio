"use client"
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SubHeading from '@/components/common/sub_heading'
import CommanHeading from '@/components/common/comman_heading'
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from 'next/navigation';
import axios from 'axios'
const Contect = () => {
    const formInit = {
        "name": "",
        "email": "",
        "subject": "",
        "messages": ""
    }
    const [formData, setFormData] = useState(formInit)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const handalChange = ({ target }) => {
        const { name, value } = target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handalSubmit = async () => {
        try {
            const { data } = await axios.post('/api/contact', formData)
            setMessage(data.message)
            setTimeout(() => {
                setMessage('')
            }, 5000)
            setFormData(formInit)
        } catch (error) {
            setError(error?.response?.data?.error || error?.message)
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }
    const handleSendEmail = () => {
        window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMvkMhgHxzsdVKhCLLCfDxfQxTfMrsvzMFwsHgfmPbCPxwtnKSLdhnWxFPgvHMKMxfqbbh');
    };
    return (
        <Container>
            <Row>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='py-5'>
                    <CommanHeading align="left" isLine={false} title={<> <span> Let&apos;s Chat.</span> <br /> Tell me about your <br /> project</>} />
                    <p className='desc-text' data-aos="zoom-in">
                        Let&apos;s collaborate, blend our ideas, and weave something wonderful, a creation that reflects our combined creativity and unique perspectives.
                    </p>
                    <div className="d-flex" data-aos="zoom-in-up">
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
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="d-flex justify-content-center" data-aos="zoom-in-up">
                        <div className="form">
                            <div className='form_heading'>
                                Send us a message 🚀
                            </div>
                            <div className="group">
                                <div className="form_control">
                                    <input onChange={handalChange} name='name' value={formData?.name} className="input input-alt" placeholder="Full Name" required="" type="text" />
                                    <span className="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="form_control">
                                    <input onChange={handalChange} name='email' value={formData?.email} className="input input-alt" placeholder="Email Address" required="" type="text" />
                                    <span className="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="form_control">
                                    <input onChange={handalChange} name='subject' value={formData?.subject} className="input input-alt" placeholder="Subject" required="" type="text" />
                                    <span className="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="form_control">
                                    <textarea onChange={handalChange} name='messages' value={formData?.messages} className="input input-alt" placeholder="Tell me more about your project" required="" type="text" />
                                    <span className="input-border input-border-alt"></span>
                                </div>
                            </div>
                            <button onClick={handalSubmit} className="send_button mt-4 d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div className="text">Send Message</div>
                            </button>
                            {error ? <div className="text-danger">{error}</div> : <></>}
                            {message ? <div className="text-success text-wrap mt-2"> {message}</div> : <></>}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contect
