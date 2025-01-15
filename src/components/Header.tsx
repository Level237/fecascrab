import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { Button } from './ui/button'
export default function Header() {
  return (
    <header className="absolute top-8 w-full z-50 bg-transparent">
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

          <Button
            variant="outline" 
            className="bg-white rounded-2xl py-6 font-bold text-emerald-800 hover:bg-white/90"
          >
            NOUS CONTACTER
          </Button>
        </div>
      </div>
    </header>
  )
}
