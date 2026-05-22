'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#expertise', label: 'Expertise' },
    { href: '#projects', label: 'Work' },
    { href: '#experience', label: 'Experience' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-bg/95 backdrop-blur-md border-b border-border' : 'py-5 bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="#hero" className="text-2xl font-extrabold">
          Isaac Rabin<span className="text-accent">.</span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-text2 hover:text-accent transition-colors duration-200 font-medium">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="px-5 py-2 rounded-full border border-border2 text-text hover:border-accent hover:text-accent transition-all duration-200">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
