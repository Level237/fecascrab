import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import logo from "../assets/logo.png"
export default function HeaderSection() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return (
    <header className={`sticky top-12 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-emerald-800' : 'bg-transparent mt-8'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="FCS Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              </Link>
            </div>
  
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/federation" 
                className="text-[#00723e] font-medium"
              >
                LA FÉDÉRATION ▾
              </Link>
              <Link 
                to="/palmares" 
                className="text-[#00723e] font-medium"
              >
                PALMARÈS
              </Link>
              <Link 
                to="/events" 
                className="text-[#00723e] font-medium"
              >
                EVENTS
              </Link>
              <Link 
                to="/creation-club" 
                className="text-[#00723e] font-medium"
              >
                CRÉATION CLUB
              </Link>
            </nav>
  
            <Button
              className="bg-red-600 hover:bg-red-700 text-white border-none"
            >
              NOUS CONTACTER
            </Button>
          </div>
        </div>
      </header>
  )
}
