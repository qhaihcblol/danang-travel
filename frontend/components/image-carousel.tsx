'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  onImageChange?: (index: number) => void;
  autoSlideInterval?: number;
  className?: string;
}

export function ImageCarousel({ images, onImageChange, autoSlideInterval = 5000, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, autoSlideInterval);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isHovered, images.length, autoSlideInterval]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onImageChange?.(newIndex);
    resetAutoSlide();
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onImageChange?.(newIndex);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    // Restart the auto-slide timer
    if (!isHovered) {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, autoSlideInterval);
    }
  };

  return (
    <div
      className={cn('relative w-full h-88 sm:h-117.5 rounded-2xl overflow-hidden group', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Edge click zones for navigation */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-0 top-0 h-full w-16 sm:w-20 z-10 flex items-center justify-center bg-black/0 hover:bg-black/25 active:bg-black/35 transition-colors duration-200"
        aria-label="Previous image"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/90">
          <ChevronLeft className="w-7 h-7" />
        </span>
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-0 top-0 h-full w-16 sm:w-20 z-10 flex items-center justify-center bg-black/0 hover:bg-black/25 active:bg-black/35 transition-colors duration-200"
        aria-label="Next image"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/90">
          <ChevronRight className="w-7 h-7" />
        </span>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              onImageChange?.(index);
              resetAutoSlide();
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-white shadow-md'
                : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>

      {/* Auto-slide indicator */}
      {!isHovered && images.length > 1 && (
        <div className="absolute bottom-2 right-4 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          Tự động tượt
        </div>
      )}
    </div>
  );
}
