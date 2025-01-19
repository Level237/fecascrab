'use client'

import React, { useState, useEffect } from 'react';

import { Photo } from '../../types/gallery';
import { ScrollRestoration } from 'react-router-dom';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
  const [visiblePhotos, setVisiblePhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMorePhotos();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadMorePhotos = () => {
    if (loading) return;
    setLoading(true);
    const nextPhotos = photos.slice(visiblePhotos.length, visiblePhotos.length + 20);
    setVisiblePhotos(prev => [...prev, ...nextPhotos]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    loadMorePhotos();
  };

  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ScrollRestoration/>
      {visiblePhotos.map((photo) => (
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
  );
};

