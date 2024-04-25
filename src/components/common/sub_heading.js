import React from 'react'

const SubHeading = ({ title }) => {
    return (
        <>
            <h2 className='text-center Experience-sub-heading' data-aos="zoom-in" data-aos-delay="0">{title}</h2>
            <div className="mb-3" data-aos="zoom-in-up">
                <div className='d-flex flex-column align-items-center'>
                    <div className="title-box"></div>
                    <div className="title-line"></div>
                </div>
            </div>
        </>
    )
}

export default SubHeading