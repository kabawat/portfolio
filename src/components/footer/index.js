import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="skewed-bg">
                <div className="content">
                    <h1 className="title">I&apos;m Mukesh Singh Kabawat</h1>
                    <p className="text">Web Application | Game Development</p>
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