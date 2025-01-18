

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../components/ui/card'
import { Album } from '../../types/gallery'
import { albums } from '../data/album'
import { PhotoCarousel } from './photo-carousel'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)

  return (
    <div className="container mx-auto py-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {albums.map((album) => (
          <motion.div
            key={album.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              onClick={() => setSelectedAlbum(album)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <img
                    src={album.coverImage || "/placeholder.svg"}
                    alt={`${album.title} ${album.year}`}
                   
                    className="object-cover rounded-t-lg transform transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">
                      {album.title} {album.year}
                    </h3>
                    <p className="text-sm text-white/80">
                      {album.photoCount} photos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          
          </motion.div>
        ))}
      </motion.div>

      <PhotoCarousel
        album={selectedAlbum}
        isOpen={!!selectedAlbum}
        onClose={() => setSelectedAlbum(null)}
      />
    </div>
  )
}

