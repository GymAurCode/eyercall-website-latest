

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Custom hook for typewriter effect
 * @param {string} text - Text to display with typewriter effect
 * @param {number} speed - Speed of typing in milliseconds
 * @param {number} delay - Delay before starting the effect
 * @returns {object} displayText and isVisible state
 */
const useTypewriter = (text, speed = 100, delay = 1000) => {
  const [displayText, setDisplayText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!text) return

    const timer = setTimeout(() => {
      setIsVisible(true)
      setDisplayText(text)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return { displayText, isVisible }
}

/**
 * Home Component - Main landing page
 * Features: Hero section, project showcase, contact form, and footer
 */
function Home() {
  const navigate = useNavigate()
  
  // Refs for DOM elements
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const video3Ref = useRef(null)
  const sideBarRef = useRef(null)
  const menuRef = useRef(null)
  const closeIconRef = useRef(null)
  const hoverSignRef = useRef(null)
  const footerRef = useRef(null)
  const mobileMenuToggleRef = useRef(null)

  // Typewriter effect for the tagline
  const typewriter = useTypewriter("Eyercall Confirms It.", 50, 4000)

  useEffect(() => {
    // Video hover functionality - play/pause videos on hover
    const videoList = [video1Ref.current, video2Ref.current, video3Ref.current]

    videoList.forEach(function (video) {
      if (video) {
        video.addEventListener("mouseover", function () {
          video.play()
          if (hoverSignRef.current) {
            hoverSignRef.current.classList.add("active")
          }
        })
        video.addEventListener("mouseout", function () {
          video.pause()
          if (hoverSignRef.current) {
            hoverSignRef.current.classList.remove("active")
          }
        })
      }
    })

    // Sidebar functionality for mobile navigation
    if (menuRef.current) {
      menuRef.current.addEventListener("click", function () {
        if (sideBarRef.current) {
          sideBarRef.current.classList.remove("close-sidebar")
          sideBarRef.current.classList.add("open-sidebar")
        }
      })
    }

    // Footer scroll detection - show footer when near bottom
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show footer when user is near the bottom (within 100px)
      if (scrollTop + windowHeight >= documentHeight - 100) {
        if (footerRef.current) {
          footerRef.current.classList.add("show")
        }
      } else {
        if (footerRef.current) {
          footerRef.current.classList.remove("show")
        }
      }
    }

    // Create animated starfield background effect
    const createStarfield = () => {
      const starfield = document.getElementById('starfield-bg')
      if (!starfield) return

      // Clear existing stars
      starfield.innerHTML = ''

      // Create different types of stars with varying sizes and speeds
      const starTypes = [
        { class: 'small', count: 100, duration: '3s' },
        { class: 'medium', count: 50, duration: '4s' },
        { class: 'large', count: 25, duration: '5s' },
        { class: 'shooting', count: 8, duration: '8s' }
      ]

      starTypes.forEach(type => {
        for (let i = 0; i < type.count; i++) {
          const star = document.createElement('div')
          star.className = `star ${type.class}`
          star.style.setProperty('--duration', type.duration)
          star.style.left = Math.random() * 100 + '%'
          star.style.top = Math.random() * 100 + '%'
          star.style.animationDelay = Math.random() * 5 + 's'
          starfield.appendChild(star)
        }
      })
    }

    // Initialize starfield animation
    createStarfield()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Close sidebar functionality
    if (closeIconRef.current) {
      closeIconRef.current.addEventListener("click", function () {
        if (sideBarRef.current) {
          sideBarRef.current.classList.remove("open-sidebar")
          sideBarRef.current.classList.add("close-sidebar")
        }
      })
    }

    // Mobile menu toggle functionality
    if (mobileMenuToggleRef.current) {
      mobileMenuToggleRef.current.addEventListener("click", function () {
        this.classList.toggle("active")
        // You can add mobile menu dropdown logic here
      })
    }

    // Cleanup function to remove event listeners
    return () => {
      videoList.forEach(function (video) {
        if (video) {
          video.removeEventListener("mouseover", function () { })
          video.removeEventListener("mouseout", function () { })
        }
      })

      // Remove scroll event listener
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="container">
        
        {/* Animated background elements */}
        <div className="anim-ball4"></div>
        <div className="anim-ball5"></div>
        
        {/* Header Navigation */}
        <header>
          <div className="left">
            <img src="/images/eyercall.png" alt="Eyercall Logo" />
            <h2><span style={{ color: '#999' }}>Eyercall</span></h2>
          </div>

          {/* Navigation Menu */}
          <ul>
            <li><a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</a></li>
            <li><a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact Us</a></li>
            <li><a onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>Projects</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="box-icons">
            <p><i className='bx bxl-youtube'></i></p>
            <p><i className='bx bxl-github'></i></p>
            <p><i className='bx bxl-linkedin-square'></i></p>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="mobile-menu-toggle" ref={mobileMenuToggleRef}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-info">
            <h1>Your Eyes Say You're Present</h1>
            <div className="wrap">
              <span className="reveal-clip gradient">Eyercall Confirms It.</span>
            </div>
            <p>
              Eyercall is redefining online communication by ensuring real presence in every interaction. 
              Unlike traditional tools, we help businesses, educators, and teams stay truly connected and engaged.
            </p>
            <button><i className='bx bx-send'></i> Contact Me</button>

            {/* Animated background ball */}
            <div style={{ zIndex: -999 }} className="anim-ball"></div>
          </div>
          
          {/* Scroll indicator */}
          <div className="scroll-down"></div>
        </section>

        {/* Info Section - Problem Statement */}
        <section className="info-section">
          <h1 className="section-title autoDisplay">
            <span className="gradient">Logged In,</span> But Not Really There
          </h1>
          <div className="info-cards">
            <div className="anim-ball2"></div>

            <div className="card">
              <h1 className='gradient'>Traditional conferencing tools can't guarantee real presence. Eyercall can</h1>
              <p>Employees "multitask" instead of focusing. Businesses lose productivity, and educators lose connection.</p>
              <span>In today's online world, people often join meetings but don't stay engaged. Students turn on class but stop paying attention.</span>
              <button><i className='bx bx-send'></i> Contact Me</button>
            </div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section className="my-project">
          <div className="anim-ball3"></div>
          <h1 className="section-title autoDisplay">Presence Verified by <span className='gradient'>Eyercall</span></h1>
          
          {/* Project Card 1 - AI Eye Detection */}
          <div className="project-card">
            <div className="project-vidbox autoBlur">
              <video loop ref={video1Ref} src="/videos/project1.mp4"></video>
              <div className="hover-sign" ref={hoverSignRef}></div>
            </div>
            <div className="project-info fadein-left">
              <h1><span className="gradient">AI-Powered Eye Detection</span></h1>
              <p>Eyercall uses advanced eye-tracking technology to verify participants' focus in real time — ensuring they're attentive, present, and truly engaged.</p>
              <button><i className='bx bx-link-external'></i> Website</button>
            </div>
          </div>

          {/* Project Card 2 - Engagement Reports */}
          <div className="project-card">
            <div className="project-vidbox autoBlur">
              <video loop ref={video2Ref} src="/videos/project2.mp4"></video>
            </div>
            <div className="project-info fadein-left pcard-2">
              <h1><span className="gradient">Engagement Reports</span></h1>
              <p>Discover exactly who stayed focused, interacted, and participated the most during your session — turning raw data into powerful insights that help you measure true audience attention.</p>
              <button><i className='bx bx-link-external'></i> Website</button>
            </div>
          </div>

          {/* Project Card 3 - Video Conferencing */}
          <div className="project-card pcard-3">
            <div className="project-vidbox autoBlur">
              <video loop ref={video3Ref} src="/videos/project3.mp4"></video>
            </div>
            <div className="project-info fadein-left">
              <h1><span className="gradient">Reliable Video Conferencing</span></h1>
              <p>Experience crystal-clear video calls with Eyercall — seamlessly integrated chat, secure file sharing, and smart breakout rooms for better collaboration.</p>
              <button><i className='bx bx-link-external'></i> Website</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h1 className="section-title autoDisplay">Let's <span className='gradient'>talk</span>😊</h1>

          {/* Social Contact Information */}
          <div className="social-box autoBlur">
            <a href="#"><i className='bx bxs-phone'></i> +92-3064493249</a>
            <a href="#"><i className='bx bxl-telegram'></i>eyercall@gmail.com</a>
            <a href="#"><i className='bx bxl-linkedin-square'></i> eyercall.in</a>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-youtube'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-box">
            <p >Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, We're here to help.</p>

            <p className='gradient'>Full Name</p>
            <input  placeholder="Your Full name" type="text" />

            <p className='gradient'>Email Address</p>
            <input placeholder="Your Email" type="email" />

            <p className='gradient'>Your Message</p>
            <input className="input-message" type="text" placeholder="Share your thoughts..." />

            <button>Send Message <i className='bx bx-mail-send'></i></button>
              <div class="pendulum">
    <div class="rope">
      <div class="bead"></div>
    </div>

    <svg class="hook" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M22 8
               A8 8 0 1 0 22 20"
            fill="none"
            stroke="#ffff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="custom-footer" ref={footerRef}>
        {/* Logo */}
        <div className="footer-logo">
          <img src="/images/eyercall.png" alt="Eyercall" /> 
        </div>
        
        {/* Social Media Links */}
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 2.718v4.897H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.141.79-1.892.79s-1.402-.3-1.892-.79c-.49-.49-.79-1.141-.79-1.892s.3-1.402.79-1.892c.49-.49 1.141-.79 1.892-.79s1.402.3 1.892.79c.49.49.79 1.141.79 1.892s-.3 1.402-.79 1.892z" />
            </svg>
          </a>
        </div>
       

        {/* Footer Navigation Links */}
        <h1 className="footer-data">
          <span className='gradient'>Eyercall</span>
        </h1>
      </footer>

      {/* Extra space for footer reveal on scroll */}
      <div className="ext-space"></div>
    </>
  )
}

export default Home
