import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logow.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[96%] max-w-6xl z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? 'nav-glass py-2 bg-black/40 animate-[bgPulse_4s_ease-in-out_infinite]'
          : 'bg-black/20 backdrop-blur-md border border-white/5 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Elite Club Logo" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-base md:text-lg font-medium transition-all duration-300 ${
                  isActive ? 'text-primary text-glow font-semibold' : 'text-gray-300 hover:text-white hover:text-glow'
                } group`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_10px_rgba(142,3,211,0.8)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(142,3,211,0.8)]'
                  }`}
                ></span>
              </Link>
            )
          })}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-primary transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[300px] border-b border-white/10 glass' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg transition-colors duration-300 ${
                  isActive ? 'text-primary font-bold text-glow' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
