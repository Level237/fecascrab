import React from 'react'
import slide from "../assets/hero.jpg"
export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${slide})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-emerald-900/80" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-80px)] flex items-center justify-center text-center">
      <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold max-w-5xl leading-tight">
        Bienvenue sur le site officiel
        <br className='max-sm:hidden' />
        de la Fédération Internationale
        <br className='max-sm:hidden'/>
        de Scrabble
      </h1>
    </div>

    {/* Pagination Dots */}
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
      <span className="w-2 h-2 rounded-full bg-white"></span>
      <span className="w-2 h-2 rounded-full bg-white/50"></span>
      <span className="w-2 h-2 rounded-full bg-white/50"></span>
    </div>
  </section>
  )
}
