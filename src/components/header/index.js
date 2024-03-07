import navList from '@/data/navlist'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Container className='d-flex justify-content-between align-items-center'>
                <div className="p-0 " data-aos="zoom-in">
                    <Link href='/' className="logo">
                        <span>K</span>ABAWAT
                    </Link>
                </div>
                <nav className='nav-desktop'>
                    <div className="d-flex justify-content-between align-items-center">
                        {
                            navList?.map((item, key) => {
                                return <div key={key} className="link">
                                    <Link href={item?.link}>{item?.title}</Link>
                                </div>
                            })
                        }
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header