import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

// Animated Text Component
function AnimatedText({ children, delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`animated-text ${className} ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  )
}


// Particle Disturbance System
function ParticleSystem() {
  const [particles, setParticles] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isMouseActive, setIsMouseActive] = useState(false)
  const [ripples, setRipples] = useState([])
  const ripplesRef = useRef([])
  const mousePositionRef = useRef({ x: 50, y: 50 })
  const isMouseActiveRef = useRef(false)
  
  useEffect(() => {
    const total = 200
    const cols = Math.ceil(Math.sqrt(total))
    const rows = Math.ceil(total / cols)
    const cellW = 100 / cols
    const cellH = 100 / rows

    const newParticles = []
    for (let i = 0; i < total; i++) {
      const r = Math.floor(i / cols)
      const c = i % cols
      const jitterX = (Math.random() - 0.5) * (cellW * 0.6)
      const jitterY = (Math.random() - 0.5) * (cellH * 0.6)

      const baseX = c * cellW + cellW / 2
      const baseY = r * cellH + cellH / 2
      const px = Math.max(0, Math.min(100, baseX + jitterX))
      const py = Math.max(0, Math.min(100, baseY + jitterY))

      newParticles.push({
        id: i,
        x: px,
        y: py,
        originalX: px,
        originalY: py,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
        speed: Math.random() * 0.3 + 0.2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.4,
        velocityX: 0,
        velocityY: 0,
        damping: 0.95,
        stiffness: 0.02,
      })
    }
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    let animationFrame
    let mouseTimeout

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      setMousePosition({ x, y })
      mousePositionRef.current = { x, y }
      setIsMouseActive(true)
      isMouseActiveRef.current = true
      
      // Emit a new ripple on movement
      const newRipples = [
        ...ripplesRef.current.slice(-8),
        {
          id: Date.now() + Math.random(),
          x,
          y,
          radius: 0,
          strength: 1, // 0..1
        }
      ]
      ripplesRef.current = newRipples
      setRipples(newRipples)
      
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        setIsMouseActive(false)
        isMouseActiveRef.current = false
      }, 200)
    }

    const handleMouseEnter = () => {
      setIsMouseActive(true)
      isMouseActiveRef.current = true
      clearTimeout(mouseTimeout)
    }

    const handleMouseLeave = () => {
      setIsMouseActive(false)
      isMouseActiveRef.current = false
      clearTimeout(mouseTimeout)
    }

    const animateParticles = () => {
      // Evolve ripples (expand + decay)
      const evolvedRipples = ripplesRef.current
        .map(r => ({
          ...r,
          radius: r.radius + 1.2, // expansion speed per frame
          strength: r.strength * 0.97 // decay per frame
        }))
        .filter(r => r.strength > 0.05 && r.radius < 120)
      ripplesRef.current = evolvedRipples
      setRipples(evolvedRipples)

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Water-like physics simulation
          const dx = mousePositionRef.current.x - particle.x
          const dy = mousePositionRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Calculate forces
          let forceX = 0
          let forceY = 0
          
          if (isMouseActiveRef.current && distance < 40) {
            // Mouse disturbance force (like dropping stone in water)
            const mouseForce = (40 - distance) / 40
            const angle = Math.atan2(dy, dx)
            const pushStrength = mouseForce * 1.2
            
            forceX = -Math.cos(angle) * pushStrength
            forceY = -Math.sin(angle) * pushStrength
          }

          // Ripple forces: expanding circular wave that displaces particles along radial direction
          if (ripplesRef.current.length > 0) {
            for (let i = 0; i < ripplesRef.current.length; i++) {
              const ripple = ripplesRef.current[i]
              const rdx = ripple.x - particle.x
              const rdy = ripple.y - particle.y
              const rDist = Math.sqrt(rdx * rdx + rdy * rdy) + 0.0001
              
              // Wave is strongest around the ripple front (ring)
              const waveFront = rDist - ripple.radius
              const frequency = 0.4 // smaller -> wider waves
              const envelope = Math.exp(-Math.abs(waveFront) * 0.15) // decay away from ring
              const amplitude = 0.9 * ripple.strength * envelope
              const wave = Math.sin(waveFront * frequency) * amplitude
              
              // Unit radial vector away from ripple center
              const ux = rdx / rDist
              const uy = rdy / rDist
              
              // Distance attenuation so far particles move less
              const distanceFalloff = 1 / (1 + rDist * 0.05)
              
              forceX += ux * wave * distanceFalloff
              forceY += uy * wave * distanceFalloff
            }
          }

          
          // Restoring force to original position (like water surface tension)
          const restoreDx = particle.originalX - particle.x
          const restoreDy = particle.originalY - particle.y
          const restoreDistance = Math.sqrt(restoreDx * restoreDx + restoreDy * restoreDy)
          
          if (restoreDistance > 0.5) {
            const restoreForce = restoreDistance * particle.stiffness
            forceX += restoreDx * restoreForce
            forceY += restoreDy * restoreForce
          }
          
          // Apply forces to velocity (water-like momentum)
          particle.velocityX += forceX
          particle.velocityY += forceY
          
          // Apply damping (water viscosity)
          particle.velocityX *= particle.damping
          particle.velocityY *= particle.damping
          
          // Update position based on velocity
          const newX = particle.x + particle.velocityX
          const newY = particle.y + particle.velocityY
          
          // Boundary constraints (like container walls)
          const constrainedX = Math.max(0, Math.min(100, newX))
          const constrainedY = Math.max(0, Math.min(100, newY))
          
          // Update opacity based on disturbance
          const disturbanceLevel = Math.sqrt(particle.velocityX * particle.velocityX + particle.velocityY * particle.velocityY)
          const targetOpacity = Math.min(1, Math.max(0.3, 0.4 + disturbanceLevel * 0.3))
          
          return {
            ...particle,
            x: constrainedX,
            y: constrainedY,
            velocityX: particle.velocityX,
            velocityY: particle.velocityY,
            opacity: particle.opacity + (targetOpacity - particle.opacity) * 0.1
          }
        })
      )
      
      animationFrame = requestAnimationFrame(animateParticles)
    }

    const particleSystem = document.querySelector('.particle-system')
    if (particleSystem) {
      particleSystem.addEventListener('mousemove', handleMouseMove)
      particleSystem.addEventListener('mouseenter', handleMouseEnter)
      particleSystem.addEventListener('mouseleave', handleMouseLeave)
      animateParticles()
    }

    return () => {
      if (particleSystem) {
        particleSystem.removeEventListener('mousemove', handleMouseMove)
        particleSystem.removeEventListener('mouseenter', handleMouseEnter)
        particleSystem.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      clearTimeout(mouseTimeout)
    }
  }, [])

  return (
    <div className="particle-system">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: isMouseActiveRef.current ? 'none' : 'all 0.4s ease-out'
          }}
        />
      ))}
    </div>
  )
}

// Main Footer Component
const Footer = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <footer className="footer-3d">
            <div className="footer-3d-container">
                {/* Animated Scene */}
                <div className="animated-scene">
                    <ParticleSystem />
                    
                    <div className="scene-content">
                        <AnimatedText delay={0} className="main-title">
                            Mukesh Singh Kabawat
                        </AnimatedText>
                        
                        <AnimatedText delay={500} className="subtitle">
                            Full Stack Developer
                        </AnimatedText>
                        
                        <AnimatedText delay={1000} className="role">
                            DevOps Engineer | Software Engineer
                        </AnimatedText>
                        
                        <AnimatedText delay={1500} className="tagline">
                            Pathway to Progress: Innovating Tomorrow&apos;s Solutions
                        </AnimatedText>
                    </div>
                </div>
                
                {/* Modern Footer Content */}
                <div className="footer-modern">
                    <div className="footer-main">
                        {/* Left Section - About */}
                        <div className="footer-left">
                            <div className="footer-brand">
                                <h2>Mukesh Singh Kabawat</h2>
                                <p>Full Stack Developer &amp; DevOps Engineer</p>
                                <p className="footer-description">
                                    Passionate about creating innovative solutions and delivering exceptional user experiences through modern web technologies.
                                </p>
                            </div>
                            
                            <div className="footer-social">
                                <div className="connect-header">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="social-icons-row">
                                    <a href="https://github.com/kabawat/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn github">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/kabawat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn linkedin">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/w3codingclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-btn instagram">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href="http://wa.me/916377576922" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="icon-btn whatsapp">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                    </a>
                                    <a href="mailto:kabawat@zohomail.in" aria-label="Email" className="icon-btn github">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 6.574a1 1 0 001.228 0L20 8.236V18H4z"/>
                                        </svg>
                                    </a>
                                    <a href="tel:+916377576922" aria-label="Phone" className="icon-btn linkedin">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.4 22 2 13.6 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z"/>
                                        </svg>
                                    </a>
                                    <a href="https://maps.google.com/?q=Sanchore,%20Rajasthan" target="_blank" rel="noopener noreferrer" aria-label="Location" className="icon-btn instagram">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Quick Links */}
                        <div className="footer-right">
                            <div className="footer-services">
                                <h4>Services</h4>
                                <div className="services-grid">
                                    <div className="service-item">
                                        <div className="service-icon">🌐</div>
                                        <span>Web Development</span>
                                    </div>
                                    <div className="service-item">
                                        <div className="service-icon">📱</div>
                                        <span>Mobile Apps</span>
                                    </div>
                                    <div className="service-item">
                                        <div className="service-icon">🤖</div>
                                        <span>AI/ML Solutions</span>
                                    </div>
                                    <div className="service-item">
                                        <div className="service-icon">⚙️</div>
                                        <span>DevOps</span>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-tech">
                                <h4>Technologies</h4>
                                <div className="tech-grid">
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">Node.js</span>
                                    <span className="tech-item">Next.js</span>
                                    <span className="tech-item">MongoDB</span>
                                    <span className="tech-item">Python</span>
                                    <span className="tech-item">TypeScript</span>
                                    <span className="tech-item">Docker</span>
                                    <span className="tech-item">AWS</span>
                                </div>
                            </div>

                        
                        </div>
                    </div>
                </div>
                
                {/* Bottom Credits */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="credits">
                            © 2024 Mukesh Singh Kabawat. All rights reserved.
                        </p>
                        <p className="credits">
                            Designed &amp; Developed with ❤️ by <Link className="link" href="/">@Kabawat</Link>
                        </p>
                        {/* SEO-only keywords removed from UI */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer