import { useState, useEffect, useRef, useCallback } from "react";

interface EBookContent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  type: "recipe" | "guide" | "plan" | "tips";
  preview: {
    ingredients?: string[];
    steps?: string[];
    highlights?: string[];
    ageRange?: string;
  };
  icon: string;
  bgGradient: string;
  textColor: string;
}

interface EBookPreviewCarouselProps {
  contents: EBookContent[];
}

export function EBookPreviewCarousel({ contents }: EBookPreviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showControls, setShowControls] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contents.length);
    }, 6000);
  }, [contents.length, isAutoPlaying]);

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
    setCurrentIndex((prev) => (prev + 1) % contents.length);
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [contents.length, stopAutoPlay]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + contents.length) % contents.length);
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [contents.length, stopAutoPlay]);

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
      className="relative w-full"
      data-testid="ebook-preview-carousel"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Enhanced Stats */}
      <div className="flex justify-between items-center mb-4 px-2">
        <span className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
          <i className="fas fa-book-open text-baby-pink"></i>
          <span>{currentIndex + 1} de {contents.length}</span>
        </span>
        <span className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
          <i className="fas fa-eye text-baby-blue"></i>
          <span>Prévia Exclusiva</span>
        </span>
      </div>

      {/* Enhanced Carousel Container */}
      <div 
        className="overflow-hidden rounded-2xl shadow-2xl relative cursor-grab active:cursor-grabbing"
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
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
            transitionDuration: isDragging ? '0ms' : '500ms'
          }}
        >
          {contents.map((content, index) => (
            <div key={content.id} className="min-w-full">
              <div className={`relative ${content.bgGradient} p-6 md:p-8 min-h-[500px] md:min-h-[600px] flex flex-col`}>
                
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{content.icon}</div>
                  <h3 className={`font-poppins text-xl md:text-2xl font-bold ${content.textColor} mb-2`}>
                    {content.title}
                  </h3>
                  {content.subtitle && (
                    <p className={`text-sm md:text-base ${content.textColor} opacity-80`}>
                      {content.subtitle}
                    </p>
                  )}
                  {content.preview.ageRange && (
                    <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mt-3">
                      <span className="text-gray-800 font-semibold text-sm">
                        {content.preview.ageRange}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Preview */}
                <div className="flex-1 space-y-4">
                  <p className={`text-center ${content.textColor} text-base md:text-lg leading-relaxed`}>
                    {content.description}
                  </p>

                  {/* Ingredients */}
                  {content.preview.ingredients && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-poppins font-bold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-utensils text-baby-pink mr-2"></i>
                        Ingredientes:
                      </h4>
                      <ul className="space-y-2">
                        {content.preview.ingredients.map((ingredient, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-baby-pink rounded-full mr-3 flex-shrink-0"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Steps */}
                  {content.preview.steps && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-poppins font-bold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-list-ol text-baby-blue mr-2"></i>
                        Modo de Preparo:
                      </h4>
                      <ol className="space-y-2">
                        {content.preview.steps.map((step, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="bg-baby-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Highlights */}
                  {content.preview.highlights && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-poppins font-bold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-star text-gold mr-2"></i>
                        Destaques:
                      </h4>
                      <ul className="space-y-2">
                        {content.preview.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-green-500 mr-3"></i>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Preview Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    PRÉVIA
                  </div>
                </div>

                {/* Page indicator */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    Página {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={handlePrev}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:bg-white hover:scale-105 ${
            showControls || !isAutoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          data-testid="ebook-carousel-prev"
        >
          <i className="fas fa-chevron-left text-gray-700 text-lg"></i>
        </button>

        <button
          onClick={handleNext}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:bg-white hover:scale-105 ${
            showControls || !isAutoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          data-testid="ebook-carousel-next"
        >
          <i className="fas fa-chevron-right text-gray-700 text-lg"></i>
        </button>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
            <div 
              className="h-full bg-white transition-all duration-100"
              style={{ 
                width: `${((Date.now() % 6000) / 6000) * 100}%`,
                animation: isAutoPlaying ? 'progress 6s linear infinite' : 'none'
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center items-center mt-6 space-x-3">
        {contents.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-10 h-4 bg-baby-pink shadow-lg' 
                : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
            }`}
            data-testid={`ebook-carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Enhanced Controls */}
      <div className="flex items-center justify-between mt-4 px-2">
        <button
          onClick={toggleAutoPlay}
          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-baby-pink transition-colors bg-white/80 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full shadow-md"
        >
          <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          <span>{isAutoPlaying ? 'Pausar' : 'Reproduzir'}</span>
        </button>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
          <i className="fas fa-hand-paper"></i>
          <span className="hidden sm:inline">Deslize para navegar</span>
          <span className="sm:hidden">Deslize</span>
        </div>
      </div>
    </div>
  );
}