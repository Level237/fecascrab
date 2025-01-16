
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { Button } from './ui/button'
import { initialStore } from '../store/store'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import React from 'react'
export default function Header() {
  const openHeader=initialStore((state)=>state.openShowHeader)
  const [isHovered, setIsHovered] = React.useState(false);
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
              onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
              className="text-white relative flex items-center gap-3 hover:text-white/80 font-medium"
            >
              LA FÉDÉRATION <ChevronDown className="h-4 w-4" />
              <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[2rem] left-0 w-48 bg-white  shadow-lg py-2 z-50"
            >
              
                <Link
                  key={"origine"}
                  to={"/origine"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  ORIGINE
                </Link>
                <Link
                  key={"organisation"}
                  to={"/organisation"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  ORGANISATION
                </Link>
                <Link
                  key={"club"}
                  to={"/clubs-afiliés"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  CLUBS AFFILIÉS
                </Link>
                <Link
                  key={"Galerie"}
                  to={"/"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  GALERIE
                </Link>
            </motion.div>
          )}
        </AnimatePresence>
            </Link>
            <Link 
              to="/palmares" 
              className="text-white hover:text-white/80 font-medium"
            >
              PALMARÈS
            </Link>
            <Link 
              to="/" 
              className="text-white hover:text-white/80 font-medium"
            >
              EVENTS
            </Link>
            <Link 
              to="/" 
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
          <Link className='max-sm:hidden' to={"/inscription"}> <Button
            variant="outline" 
            className="bg-white  rounded-2xl py-6 font-bold text-emerald-800 hover:bg-white/90"
          >
            S'INSCRIRE
          </Button></Link>
         
        </div>
      </div>
    </header>
  )
}
