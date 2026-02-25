

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import hero from "../assets/hero.jpg"
import slide1 from "../assets/SliderWeb.jpeg"
import sliderResponsive from "../assets/responsive_MasterScrabble.jpg"

import sliderWomen from "../assets/sliderWomen.jpg"
import sliderWomenMobile from "../assets/sliderwomenMobile.jpg"

interface Slide {
  id: number
  title?: any
  subtitle?: string,
  imageMobile?: string,
  image: string,
}

const slides: Slide[] = [
  {
    id: 1,
    title: <> <h1 className="text-white title-bold text-3xl md:text-5xl lg:text-5xl font-bold max-w-5xl leading-tight">Bienvenue sur le site Officiel <br className='max-sm:hidden' /> de la féderation camerounaise <br className='max-sm:hidden' /> de Scrabble

    </h1></>,
    subtitle: "de la Fédération Internationale\nde Scrabble",
    imageMobile: hero,
    image: hero,
  },
  {
    id: 2,
    title: <> </>,
    subtitle: "",
    imageMobile: sliderResponsive,
    image: slide1
  },
  {
    id: 3,
    title: <> </>,
    subtitle: "",
    imageMobile: sliderWomenMobile,
    image: sliderWomen
  },

]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const handleArrowClick = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false)
    if (direction === 'prev') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    } else {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute max-sm:hidden inset-0 bg-[#00000063]"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#00000015]" />
          </div>
          <div
            className="absolute hidden max-sm:block inset-0 bg-transparent"
            style={{
              backgroundImage: `url(${slides[currentSlide].imageMobile})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#00000015]" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >

              {slides[currentSlide].title}



            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button

        onClick={() => handleArrowClick('prev')}
        className="absolute max-sm:hidden left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={() => handleArrowClick('next')}
        className="absolute max-sm:hidden right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="group p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              animate={{
                scale: currentSlide === index ? 1 : 0.7,
                opacity: currentSlide === index ? 1 : 0.5,
              }}
              className="w-2 h-2 bg-white rounded-full transition-transform group-hover:scale-125"
            />
          </button>
        ))}
      </div>
    </div>
  )
}