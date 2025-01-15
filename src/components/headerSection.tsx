import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import logo from "../assets/logo.png"
import { initialStore } from '../store/store'
export default function HeaderSection() {
    const [isScrolled, setIsScrolled] = useState(false)
    const openHeader=initialStore((state)=>state.openShowHeader)

    const openHeaderMobile=()=>{
      //props.open()
     openHeader()
    }
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
    <header className={`sticky top-12 max-sm:top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-emerald-800 top-0 py-4' : 'bg-transparent mt-8'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex  items-center">
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
                className={`${isScrolled ? 'text-white' : 'text-[#00723e]'} hover:text-white/80 font-medium`}
              >
                LA FÉDÉRATION ▾
              </Link>
              <Link 
                to="/palmares" 
                className={`${isScrolled ? 'text-white' : 'text-[#00723e]'} hover:text-white/80 font-medium`}
              >
                PALMARÈS
              </Link>
              <Link 
                to="/events" 
                 className={`${isScrolled ? 'text-white' : 'text-[#00723e]'} hover:text-white/80 font-medium`}
              >
                EVENTS
              </Link>
              <Link 
                to="/creation-club" 
                 className={`${isScrolled ? 'text-white' : 'text-[#00723e]'} hover:text-white/80 font-medium`}
              >
                CRÉATION CLUB
              </Link>
            </nav>
            <div  className='lg:hidden'>
          <svg onClick={()=>openHeaderMobile()} className="w-7 h-7" fill={isScrolled ? 'white' : '#00723e'} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
            <Button
              className="bg-red-600 max-sm:hidden hover:bg-red-700 text-white border-none"
            >
              NOUS CONTACTER
            </Button>
          </div>
        </div>
      </header>
  )
}
