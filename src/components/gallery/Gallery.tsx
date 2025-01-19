'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { PhotoGrid } from './photo-grid';
import { PhotoCarousel } from './photo-carousel';
import { albums } from "../data/album";
import { Album, Photo } from '../../types/gallery';
import { ScrollRestoration } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(-1);

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
  };

  const handlePhotoClick = (photo: Photo) => {
    if (selectedAlbum) {
      const index = selectedAlbum.photos.findIndex(p => p.id === photo.id);
      setSelectedPhotoIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8">
      
      {!selectedAlbum ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                onClick={() => handleAlbumClick(album)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={album.coverImage || "/placeholder.svg"}
                      alt={`${album.title} ${album.year}`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">
                        {album.title} {album.year}
                      </h3>
                      <p className="text-sm text-white/80">
                        {album.photos.length} photos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{selectedAlbum.title}</h2>
            <Button 
              onClick={() => setSelectedAlbum(null)}
              className='border border-red-600 text-red-600 rounded-full text-lg max-sm:text-sm max-sm:py-6 max-sm:px-8  py-6 px-12'
            >
              Retour aux albums
            </Button>
          </div>
          <PhotoGrid
            photos={selectedAlbum.photos}
            onPhotoClick={handlePhotoClick}
          />
        </div>
      )}

      {selectedAlbum && (
        <PhotoCarousel
          photos={selectedAlbum.photos}
          isOpen={selectedPhotoIndex !== -1}
          onClose={() => setSelectedPhotoIndex(-1)}
          initialIndex={selectedPhotoIndex}
        />
      )}
    </div>
  );
}

