'use client'

import React, { useState} from 'react';

import { Photo } from '../../types/gallery';
import { ScrollRestoration } from 'react-router-dom';
import { Button } from '../ui/button';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); 

  const loadMoreImages = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prevCount => Math.min(prevCount + 8, photos.length)); // Charge 8 images supplémentaires
      setLoading(false);
    }, 500); // Simule un chargement
  };



  return (

    <section>
            <div className="grid  grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ScrollRestoration/>
        {photos.slice(0, visibleCount).map((photo) => (
        <div
          key={photo.id}
          className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
          onClick={() => onPhotoClick(photo)}
        >
          <img
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            className="object-cover h-full w-full"
          />
        </div>
      ))}
      
    </div>

    {visibleCount < photos.length && (
        <div className='flex items-center text-center w-full mt-8 justify-center'>
 <Button className='bg-red-600 title-font text-2xl py-6 px-12 text-white' onClick={loadMoreImages} disabled={loading}>
          {loading ? 'Chargement...' : 'Charger plus d\'images'}
        </Button>
        </div>
       
      )}
    </section>
    
  );
};

