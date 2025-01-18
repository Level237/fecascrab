'use client'

import React, { useEffect, useState } from "react"
import { useMediaQuery } from "../hooks/use-media-query"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import img1 from "../assets/events/masterscrabble/img1.jpg"
import img2 from "../assets/events/masterscrabble/img2.jpg"
import img3 from "../assets/events/masterscrabble/img3.jpg"
import img4 from "../assets/events/masterscrabble/img4.jpg"
import img5 from "../assets/events/masterscrabble/img5.jpg"
import img6 from "../assets/events/masterscrabble/img6.jpg"
import img7 from "../assets/events/masterscrabble/img7.jpg"
import img8 from "../assets/events/masterscrabble/img8.jpg"
import img9 from "../assets/events/masterscrabble/img9.jpg"

interface Photo {
  id: number
  src: string
  alt: string
  className?: string
}

const photos: Photo[] = [
  {
    id: 1,
    src: img1,
    alt: "Swimming pool view",
    className: "col-span-1 row-span-1"
  },
  {
    id: 2,
    src: img5,
    alt: "Resort merchandise",
    className: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: img6,
    alt: "Construction site",
    className: "col-span-1 row-span-1"
  },
  {
    id: 4,
    src: img2,
    alt: "Building exterior",
    className: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: img7,
    alt: "Resort panorama",
    className: "col-span-1 row-span-1"
  },
  {
    id: 6,
    src:img3,
    alt: "Lounge area",
    className: "col-span-2   row-span-1"
  },
  {
    id: 7,
    src: img4,
    alt: "Board game table",
    className: "col-span-1 row-span-1"
  },
  {
    id: 8,
    src: img8,
    alt: "Lake view",
    className: "col-span-1 row-span-1"
  },
  {
    id: 9,
    src: img9,
    alt: "Lake view",
    className: "col-span-1 row-span-1"
  },
  
]

export default function PhotoGallery() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction:false, stopOnMouseEnter: true })
  )

  

  if (isMobile) {
    return (
      <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
        className="w-full"
        
      >
        <CarouselContent>
          {photos.map((photo) => (
            <CarouselItem key={photo.id}>
              <div className="relative aspect-[4/3]">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    )
  }

  const filteredPartie1 = photos.filter((photo) => photo.id  !== 4 && photo.id !== 5 && photo.id !== 6 && photo.id !== 8 && photo.id !== 9 && photo.id!== 7)
  const filteredPartie2 = photos.filter((photo) => photo.id === 4 || photo.id === 5 || photo.id === 6)
  const filteredPartie3 = photos.filter((photo) => photo.id === 7 || photo.id === 8 || photo.id === 9)
  return (

    <section className="flex flex-col w-full gap-2">
             <div className="grid grid-cols-3 gap-4">
      {filteredPartie1.map((photo) => (
        <div
          key={photo.id}
          className={`relative aspect-[4/3] ${photo.className}`}
        >
          <img
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 p-4">
      <div className="col-span-1"><div
          key={filteredPartie2[0].id}
          className={` ${filteredPartie2[0].className}`}
        >
          <img
            src={filteredPartie2[0].src || "/placeholder.svg"}
            alt={filteredPartie2[0].alt}
            className="object-cover rounded-lg"
          />
        </div></div>
      <div className="col-span bg-black"><div
          key={filteredPartie2[2].id}
          className={` ${filteredPartie2[2].className}`}
        >
          <img
            src={filteredPartie2[2].src || "/placeholder.svg"}
            alt={filteredPartie2[2].alt}
            className="object-cover rounded-lg"
          />
        </div></div>
  <div className="row-span-2 col-span-2"><div
          key={filteredPartie2[1].id}
          className={` ${filteredPartie2[1].className}`}
        >
          <img
            src={filteredPartie2[1].src || "/placeholder.svg"}
            alt={filteredPartie2[1].alt}
            className="object-cover rounded-lg"
          />
        </div></div>
  
</div>
<div className="grid -mt-[15rem] grid-cols-3 gap-4 ">
      {filteredPartie3.map((photo) => (
        <div
          key={photo.id}
          className={`relative aspect-[4/3] ${photo.className}`}
        >
          <img
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
      </div>

    </section>
   
  )
}

