import React from 'react'

const CommanHeading = ({ title, align = "center", isLine = true }) => {
    return (
        <>
            <h2 className='Experience-sub-heading' style={{ textAlign: align }} data-aos="zoom-in" data-aos-delay="0">{title}</h2>
            {
                isLine ? <div className="mb-3" data-aos="zoom-in-up">
                    <div className='d-flex flex-column align-items-center'>
                        <div className="title-box"></div>
                        <div className="title-line"></div>
                    </div>
                </div> : <></>
            }

        </>
    )
}

export default CommanHeading
