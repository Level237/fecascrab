import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { Button } from './ui/button'
import { initialStore } from '../store/store'
export default function Header() {
  const openHeader=initialStore((state)=>state.openShowHeader)

  const openHeaderMobile=()=>{
    //props.open()
   openHeader()
  }
  return (
    <header className="absolute  top-8 w-full z-50 bg-transparent">
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
              className="text-white hover:text-white/80 font-medium"
            >
              LA FÉDÉRATION ▾
            </Link>
            <Link 
              to="/palmares" 
              className="text-white hover:text-white/80 font-medium"
            >
              PALMARÈS
            </Link>
            <Link 
              to="/events" 
              className="text-white hover:text-white/80 font-medium"
            >
              EVENTS
            </Link>
            <Link 
              to="/creation-club" 
              className="text-white hover:text-white/80 font-medium"
            >
              CRÉATION CLUB
            </Link>
          </nav>
          <div className='lg:hidden'>
          <svg onClick={()=>openHeaderMobile()} className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <Button
            variant="outline" 
            className="bg-white max-sm:hidden rounded-2xl py-6 font-bold text-emerald-800 hover:bg-white/90"
          >
            NOUS CONTACTER
          </Button>
        </div>
      </div>
    </header>
  )
}
