

import { Dialog, DialogContent } from '../../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import { Photo } from '../../types/gallery';

interface PhotoCarouselProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex: number;
}

export function PhotoCarousel({ photos, isOpen, onClose, initialIndex }: PhotoCarouselProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent  className="flex items-center p-0">
        <Carousel className="w-full h-[100]" defaultValue={initialIndex} >
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id}>
                <div  className="relative">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="object-cover h-[100vh]  max-sm:h-72 rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

