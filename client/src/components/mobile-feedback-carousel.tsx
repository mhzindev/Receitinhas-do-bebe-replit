import { useState, useEffect, useRef, useCallback } from "react";
import { FeedbackImage } from "./feedback-image";

interface FeedbackData {
  id: string;
  imageSrc: string;
  platform: "whatsapp" | "instagram";
  customerName: string;
  location: string;
  message: string;
  time: string;
  rating: number;
  verified: boolean;
}

interface MobileFeedbackCarouselProps {
  feedbacks: FeedbackData[];
  onImageClick: (index: number) => void;
}

export function MobileFeedbackCarousel({ feedbacks, onImageClick }: MobileFeedbackCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showControls, setShowControls] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
  }, [feedbacks.length, isAutoPlaying]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  // Navigation functions
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [feedbacks.length, stopAutoPlay]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [feedbacks.length, stopAutoPlay]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [stopAutoPlay]);

  // Touch/Swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(0);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    setTranslateX(diffX);
  }, [isDragging, startX]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setTranslateX(0);
  }, [isDragging, translateX, handleNext, handlePrev]);

  // Mouse handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diffX = currentX - startX;
    setTranslateX(diffX);
  }, [isDragging, startX]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = 50;
    
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setTranslateX(0);
  }, [isDragging, translateX, handleNext, handlePrev]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => {
      const newState = !prev;
      if (newState) {
        startAutoPlay();
      } else {
        stopAutoPlay();
      }
      return newState;
    });
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <div 
      className="relative md:hidden"
      data-testid="mobile-carousel"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Enhanced Stats */}
      <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
        <span className="flex items-center space-x-1">
          <i className="fas fa-images"></i>
          <span>{currentIndex + 1} de {feedbacks.length}</span>
        </span>
        <span className="flex items-center space-x-1">
          <i className="fas fa-clock"></i>
          <span>{isAutoPlaying ? 'Auto' : 'Manual'}</span>
        </span>
      </div>

      {/* Enhanced Carousel Container */}
      <div 
        ref={touchRef}
        className="overflow-hidden rounded-xl shadow-lg relative cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
            transitionDuration: isDragging ? '0ms' : '300ms'
          }}
        >
          {feedbacks.map((feedback, index) => (
            <div key={feedback.id} className="min-w-full px-1">
              <div className="relative">
                <FeedbackImage
                  imageSrc={feedback.imageSrc}
                  platform={feedback.platform}
                  customerName={feedback.customerName}
                  location={feedback.location}
                  message={feedback.message}
                  time={feedback.time}
                  rating={feedback.rating}
                  verified={feedback.verified}
                  onClick={() => onImageClick(index)}
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={handlePrev}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:bg-white hover:scale-105 ${
            showControls || !isAutoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          data-testid="carousel-prev"
        >
          <i className="fas fa-chevron-left text-gray-700"></i>
        </button>

        <button
          onClick={handleNext}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:bg-white hover:scale-105 ${
            showControls || !isAutoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          data-testid="carousel-next"
        >
          <i className="fas fa-chevron-right text-gray-700"></i>
        </button>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
            <div 
              className="h-full bg-baby-pink transition-all duration-100"
              style={{ 
                width: `${((Date.now() % 5000) / 5000) * 100}%`,
                animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-8 h-3 bg-baby-pink shadow-md' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Enhanced Controls */}
      <div className="flex items-center justify-between mt-3">
        <button
          onClick={toggleAutoPlay}
          className="flex items-center space-x-2 text-xs text-gray-600 hover:text-baby-pink transition-colors bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full"
        >
          <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          <span>{isAutoPlaying ? 'Pausar' : 'Reproduzir'}</span>
        </button>
        
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <i className="fas fa-hand-paper"></i>
          <span>Deslize para navegar</span>
        </div>
      </div>
    </div>
  );
}