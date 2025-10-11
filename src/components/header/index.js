import navList from '@/data/navlist'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header role="banner">
            <Container className='d-flex justify-content-between align-items-center'>
                <div className="p-0 " data-aos="zoom-in">
                    <Link 
                        href='/' 
                        className="logo"
                        aria-label="Mukesh Singh Kabawat - Full Stack Developer Portfolio Home"
                    >
                        <span>K</span>ABAWAT
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className='nav-desktop' role="navigation" aria-label="Main navigation">
                    <div className="d-flex justify-content-between align-items-center">
                        {
                            navList?.map((item, key) => {
                                return <div key={key} className="link">
                                    <Link 
                                        href={item?.link}
                                        aria-label={`Navigate to ${item?.title} section`}
                                        onClick={closeMobileMenu}
                                    >
                                        {item?.title}
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-toggle d-md-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Mobile Navigation */}
                <nav 
                    className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
                    role="navigation"
                    aria-label="Mobile navigation"
                    id="mobile-menu"
                >
                    <div className="mobile-nav-content">
                        {
                            navList?.map((item, key) => {
                                return <div key={key} className="mobile-link">
                                    <Link 
                                        href={item?.link}
                                        aria-label={`Navigate to ${item?.title} section`}
                                        onClick={closeMobileMenu}
                                    >
                                        {item?.title}
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div 
                        className="mobile-menu-overlay"
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />
                )}
            </Container>
        </header>
    )
}

export default Header