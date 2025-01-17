import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import logo from "../assets/logo.png"
import { initialStore } from '../store/store'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence,motion } from 'framer-motion'
export default function HeaderSection() {
    const [isScrolled, setIsScrolled] = useState(false)
    const openHeader=initialStore((state)=>state.openShowHeader)
    const [isHovered, setIsHovered] = React.useState(false);
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
    <header className={`sticky top-0 max-sm:top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-emerald-800  py-4' : 'bg-transparent mt-8'
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
              onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${isScrolled ? 'text-white hover:text-white' : 'text-[#00723e]'} flex items-center gap-3 relative hover:text-[#00723e]/80 font-medium`}
            >
              LA FÉDÉRATION <ChevronDown className="h-4 w-4" />
              <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-[2rem] ${isScrolled ? 'bg-white text-[#00723e]' : 'bg-[#00723e]'} left-0 w-48   shadow-lg py-2 z-50`}
            >
              
                <Link
                  key={"origine"}
                  to={"/origine"}
                  className={`block px-4 py-2 text-sm ${isScrolled ? 'text-[#00723e]' : 'text-white'} text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors`}
                >
                  ORIGINE
                </Link>
                <Link
                  key={"organisation"}
                  to={"/organisation"}
                  className={`block px-4 py-2 text-sm ${isScrolled ? 'text-[#00723e]' : 'text-white'} text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors`}
                >
                  ORGANISATION
                </Link>
                <Link
                  key={"club"}
                  to={"/clubs-afiliés"}
                  className={`block px-4 py-2 text-sm ${isScrolled ? 'text-[#00723e]' : 'text-white'} text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors`}
                >
                  CLUBS AFFILIÉS
                </Link>
                <Link
                  key={"Galerie"}
                  to={"/"}
                  className={`block px-4 py-2 text-sm ${isScrolled ? 'text-[#00723e]' : 'text-white'} text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors`}
                >
                  GALERIE
                </Link>
            </motion.div>
          )}
        </AnimatePresence>
            </Link>
             
              <Link 
                to="/palmares" 
                className={`${isScrolled ? 'text-white hover:text-white' : 'text-[#00723e]'} hover:text-[#00723e]/80 font-medium`}
              >
                PALMARÈS
              </Link>
              <Link 
                to="/events" 
                 className={`${isScrolled ? 'text-white hover:text-white' : 'text-[#00723e]'} hover:text-[#00723e]/80 font-medium`}
              >
                EVENTS
              </Link>
              <Link 
                to="/creation-club" 
                 className={`${isScrolled ? 'text-white hover:text-white' : 'text-[#00723e]'} hover:text-[#00723e]/80 font-medium`}
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
          <Link className='max-sm:hidden' to={"/inscription"}>
          <Button
              className="bg-red-600  px-10 py-5 hover:bg-red-700 text-white border-none"
            >
              Contactez-nous
            </Button>
          </Link>
            
          </div>
        </div>
      </header>
  )
}
