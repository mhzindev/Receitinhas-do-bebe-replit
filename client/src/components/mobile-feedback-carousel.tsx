import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [feedbacks.length, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative md:hidden" data-testid="mobile-carousel">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {feedbacks.map((feedback, index) => (
            <div key={feedback.id} className="min-w-full px-2">
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
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
        data-testid="carousel-prev"
      >
        <i className="fas fa-chevron-left text-gray-700 text-sm"></i>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
        data-testid="carousel-next"
      >
        <i className="fas fa-chevron-right text-gray-700 text-sm"></i>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-baby-pink w-6' : 'bg-gray-300'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex items-center justify-center mt-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-gray-500 flex items-center space-x-1"
        >
          <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'} text-xs`}></i>
          <span>{isAutoPlaying ? 'Pausar' : 'Reproduzir'}</span>
        </button>
      </div>
    </div>
  );
}