import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="skewed-bg">
                <div className="content">
                    <h2 className="title">I&apos;m Mukesh Singh Kabawat</h2>
                    {/* <p className="text">Web Application | Game Development</p> */}
                    <p className="text">
                    Pathway to Progress: Innovating Tomorrow&apos;s Solutions
                    </p>
                </div>
            </div>

            <footer className="footer">
                <p className="credits">
                    Pen by Ms Rajputana <Link className="link" href="/">@Kabawat</Link>
                </p>
            </footer>
        </footer>
    )
}

export default Footer