
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { Button } from './ui/button'
import { initialStore } from '../store/store'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import React from 'react'
export default function Header() {
  const openHeader = initialStore((state) => state.openShowHeader)
  const [isHovered, setIsHovered] = React.useState({
    isOpen: false,
    name: ""
  });
  const openHeaderMobile = () => {
    //props.open()
    openHeader()
  }
  return (
    <header className="absolute   top-8 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center">
            <Link to="/" className="flex  items-center">
              <img
                src={logo}
                alt="FCS Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>

          <nav className="hidden title-font text-2xl w-[50%] md:flex items-center space-x-8">
            <Link
              to="/federation"
              onMouseEnter={() => setIsHovered({ isOpen: true, name: "federation" })}
              onMouseLeave={() => setIsHovered({ isOpen: false, name: "" })}
              className="text-white   relative flex items-center gap-3 hover:text-white/80 font-medium"
            >
              LA FÉDÉRATION <ChevronDown className="h-4 w-4" />
              <AnimatePresence>
                {isHovered.isOpen && isHovered.name === "federation" && (
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
                      className="block px-4 py-2 text-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      ORIGINE
                    </Link>
                    <Link
                      key={"organisation"}
                      to={"/organisation"}
                      className="block px-4 py-2 text-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      ORGANISATION
                    </Link>
                    <Link
                      key={"club"}
                      to={"/clubs-afiliés"}
                      className="block px-4 py-2 text-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      CLUBS AFFILIÉS
                    </Link>
                    <Link
                      key={"Galerie"}
                      to={"/gallerie"}
                      className="block px-4 py-2 text-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
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
              to="#"
              onMouseEnter={() => setIsHovered({ isOpen: true, name: "competitions" })}
              onMouseLeave={() => setIsHovered({ isOpen: false, name: "" })}
              className="text-white   relative flex items-center gap-3 hover:text-white/80 font-medium"
            >
              COMPÉTITIONS À VENIR <ChevronDown className="h-4 w-4" />
              <AnimatePresence>
                {isHovered.isOpen && isHovered.name === "competitions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[2rem] left-0 w-48 bg-white  shadow-lg py-2 z-50"
                  >

                    <Link
                      key={"inscription-scrabble-2026"}
                      to={"/inscription-scrabble-2026"}
                      className="block px-4 py-2 text-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      Super Master Scrabble 2026
                    </Link>
                    <Link
                      key={"inscription-tournoi-feminin-2026"}
                      to={"/inscription-tournoi-feminin-2026"}
                      className="block px-4 py-2 text-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      Tournoi Féminin de Scrabble 2026
                    </Link>

                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
            <Link
              to="/creation-club"
              className="text-white hover:text-white/80 font-medium"
            >
              CRÉATION CLUB
            </Link>

            <Link
              to="/articles"
              className="text-white hover:text-white/80 font-medium"
            >
              ARTICLES
            </Link>
          </nav>
          <div className='lg:hidden'>
            <svg onClick={() => openHeaderMobile()} className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <Link className='max-sm:hidden' to={"/contact"}> <Button
            variant="outline"
            className="bg-red-500 title-font text-xl border-none text-white  rounded-2xl py-6 px-6 font-bold "
          >
            Contactez-nous
          </Button></Link>

        </div>
      </div>
    </header>
  )
}
