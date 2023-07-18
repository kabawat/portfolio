import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    const navList = [
        {
            title: 'home',
            link: '/'
        },
        {
            title: 'contact',
            link: '/'
        },
        {
            title: 'about us',
            link: '/'
        },
        {
            title: 'galary',
            link: '/'
        },
        {
            title: 'skills',
            link: '/'
        },
    ]
    return (
        <header>
            <Container className='d-flex justify-content-between align-items-center'>
                <div className="p-0">
                    <Link href='/' className="logo">
                        KABAWAT
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