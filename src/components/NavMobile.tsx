
import { Link } from 'react-router-dom'
import { AnimatePresence,motion } from "framer-motion";
import { X } from 'lucide-react'
import React from 'react';
import { initialStore } from '../store/store';
import logo from "../assets/logo.png"
export default function NavMobile() {

    const showHeader=initialStore((state)=>state.showHeader)
    const closeHeader=initialStore((state)=>state.closeShowHeader)
    const close=()=>{
         
       
      closeHeader()
  }
  return (
    <div>
       <AnimatePresence>
          {
           
            showHeader && (
              <>
                <motion.div 
              initial={{ 
                y:600
               }}

               animate={{ 
                y:2
                }}
                exit={{ 
                  x:600
                 }}
                 transition={{ 
                  duration:0.7
                  }}
              id='navbar' className=" lg:hidden fixed z-[99999999] top-0 right-0 bottom-[100%]   w-[100%] h-[100%]  bg-[#00723e]">
        <React.Fragment >
            <div className=" text-white text-4xl">
            <X className='mt-4 mx-4 mb-4' onClick={()=>close()}/>
            <Link to={'/'}>
              <div className="flex mt-2 mb-8 items-center justify-center">
              <img className='w-28 mr-8' src={logo} alt="" />
              
              </div>
            
              </Link>
            <div
              className='flex justify-center items-center mx-5  bg-gray-100 px-2 py-3 rounded outline outline-transparent focus-within:outline-[#007bff]'>
              <input type='text' placeholder='Recherchez'
                className='w-full text-sm bg-transparent rounded outline-none pr-2' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                className="cursor-pointer fill-gray-400">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>
            </div>
        
            <div className="mt-[12px] ml-10 text-white font-bold text-xl flex flex-col items-start">
            
                <div className='mt-8' >
                  <Link to='/' onClick={()=>closeHeader()} >
                    La Féderation
                    </Link>
                </div>
                <div  className="mt-5">
                <Link to='/actualites' onClick={()=>closeHeader()}>
                    Palmarès
                    </Link>
                </div>
                <div onClick={()=>closeHeader()} className="mt-5">
                <Link to='/calendrier'
                className=' text-white block'>Calendrier</Link>
                </div>
                <div onClick={()=>closeHeader()} className="mt-5">
                  <Link to='/classements'>
                  Events
                  </Link>
                
                </div>
                <div onClick={()=>closeHeader()} className="mt-5">
               Création Club
                </div>
               
            </div>
        </React.Fragment>
        
        </motion.div>
              <div onClick={()=>closeHeader()} className='absolute z-[999] backdrop-blur-sm   inset-0 w-full h-full'>

              </div>
              </>
            
            )
            
          }

          </AnimatePresence>
    </div>
  )
}