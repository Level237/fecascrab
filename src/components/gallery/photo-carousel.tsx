

import { useState } from 'react'
import { Dialog, DialogContent } from '../../components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel'
import { Album } from '../../types/gallery'
import { Calendar } from 'lucide-react'

interface PhotoCarouselProps {
  album: Album | null
  isOpen: boolean
  onClose: () => void
}

export function PhotoCarousel({ album, isOpen, onClose }: PhotoCarouselProps) {
  if (!album) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white p-0">
        <div className="relative w-full">
          <Carousel>
            <CarouselContent>
              {album.photos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <div className="relative flex flex-col">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rounded-b-lg">
                      <p className="text-lg font-medium">{photo.caption}</p>
                      {photo.date && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={photo.date}>
                            {new Date(photo.date).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}

