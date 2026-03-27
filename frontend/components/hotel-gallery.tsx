'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImagePlus } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type HotelGalleryProps = {
  images: string[];
  hotelName: string;
};

export function HotelGallery({ images, hotelName }: HotelGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previewImages = useMemo(() => images.slice(0, 5), [images]);
  const extraImageCount = Math.max(images.length - 5, 0);

  const openGalleryAt = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) return null;

  return (
    <>
      <div className="relative grid gap-2 overflow-hidden rounded-2xl bg-muted sm:grid-cols-4 sm:grid-rows-2">
        <button
          type="button"
          className="relative min-h-67.5 text-left sm:col-span-2 sm:row-span-2 sm:min-h-105"
          onClick={() => openGalleryAt(0)}
          aria-label="Mở thư viện ảnh"
        >
          <Image src={previewImages[0]} alt={hotelName} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" priority />
        </button>

        {previewImages.slice(1).map((image, index) => (
          <button
            key={`${hotelName}-${index}`}
            type="button"
            onClick={() => openGalleryAt(index + 1)}
            className="relative hidden min-h-50 text-left sm:block"
            aria-label={`Mở ảnh ${index + 2}`}
          >
            <Image src={image} alt={`${hotelName} - ảnh ${index + 2}`} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </button>
        ))}

        <button
          type="button"
          onClick={() => openGalleryAt(0)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
          aria-label="Xem thư viện ảnh khách sạn"
        >
          <ImagePlus className="h-3.5 w-3.5" />
          {extraImageCount > 0 ? `+${extraImageCount}` : 'Xem ảnh'}
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[96vw] border-none bg-black/95 p-3 sm:p-4 lg:max-w-5xl"
        >
          <DialogTitle className="sr-only">Thư viện ảnh khách sạn</DialogTitle>

          <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-black">
            <Image
              src={images[currentIndex]}
              alt={`${hotelName} - ảnh ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="96vw"
              priority
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70"
                  aria-label="Ảnh trước"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70"
                  aria-label="Ảnh tiếp theo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
              {currentIndex + 1}/{images.length}
            </div>
          </div>

          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`${image}-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-14 overflow-hidden rounded-md border transition sm:h-16 ${
                    index === currentIndex ? 'border-white' : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Xem ảnh ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`${hotelName} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}