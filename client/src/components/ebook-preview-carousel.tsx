import { useState, useEffect, useRef, useCallback } from "react";

// Importar imagens reais do eBook
import ebookCover from "@/assets/ebook-pages/ebook-cover.jpg";
import planoAlimentar from "@/assets/ebook-pages/plano-alimentar.jpg";
import listaSubstituicoes from "@/assets/ebook-pages/lista-substituicoes.jpg";
import guiaSono from "@/assets/ebook-pages/guia-sono.jpg";
import dicasArmazenamento from "@/assets/ebook-pages/dicas-armazenamento.jpg";

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
  realPageImage?: string; // Nova propriedade para páginas reais
}

interface EBookPreviewCarouselProps {
  contents: EBookContent[];
}

// Mapeamento das imagens reais para cada conteúdo
const realPageImages = {
  "1": ebookCover, // Mingau de Aveia
  "2": planoAlimentar, // Plano Alimentar  
  "3": listaSubstituicoes, // Lista de Substituições
  "4": guiaSono, // Guia do Sono
  "5": dicasArmazenamento, // Dicas de Armazenamento
};

export function EBookPreviewCarousel({ contents }: EBookPreviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [viewMode, setViewMode] = useState<"structured" | "real">("structured");
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
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

  // Função para alternar modo de visualização
  const toggleViewMode = useCallback(() => {
    setViewMode(prev => prev === "structured" ? "real" : "structured");
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [stopAutoPlay]);

  // Função para abrir modal de zoom
  const openZoomModal = useCallback((imageUrl: string) => {
    setZoomedImage(imageUrl);
    setIsZoomModalOpen(true);
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [stopAutoPlay]);

  // Função para fechar modal de zoom
  const closeZoomModal = useCallback(() => {
    setIsZoomModalOpen(false);
    setZoomedImage(null);
  }, []);

  // Obter imagem real para o conteúdo atual
  const getCurrentRealImage = useCallback((contentId: string) => {
    return realPageImages[contentId as keyof typeof realPageImages];
  }, []);

  return (
    <div 
      className="relative w-full"
      data-testid="ebook-preview-carousel"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Enhanced Stats with View Mode Toggle */}
      <div className="flex justify-between items-center mb-4 px-2 gap-2">
        <span className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
          <i className="fas fa-book-open text-baby-pink"></i>
          <span>{currentIndex + 1} de {contents.length}</span>
        </span>
        
        {/* Toggle de modo de visualização */}
        <button
          onClick={toggleViewMode}
          className={`flex items-center space-x-2 text-sm font-semibold rounded-full px-4 py-2 transition-all duration-300 shadow-md ${
            viewMode === "real" 
              ? "bg-baby-pink text-white hover:bg-pink-600" 
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
          data-testid="view-mode-toggle"
        >
          <i className={`fas ${viewMode === "real" ? "fa-image" : "fa-list-alt"}`}></i>
          <span>{viewMode === "real" ? "Páginas Reais" : "Ver Páginas"}</span>
        </button>
        
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
          {contents.map((content, index) => {
            const realImage = getCurrentRealImage(content.id);
            
            return (
              <div key={content.id} className="min-w-full">
                {viewMode === "structured" ? (
                  // Visualização Estruturada (Original)
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
                ) : (
                  // Visualização de Páginas Reais
                  <div className="relative bg-gray-50 p-4 md:p-6 min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center">
                    {realImage ? (
                      <div className="relative w-full max-w-md mx-auto">
                        {/* Imagem da página real */}
                        <div 
                          className="relative cursor-pointer group overflow-hidden rounded-xl shadow-2xl bg-white p-2"
                          onClick={() => openZoomModal(realImage)}
                        >
                          <img
                            src={realImage}
                            alt={`Página real: ${content.title}`}
                            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          
                          {/* Overlay de zoom */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                              <i className="fas fa-search-plus text-gray-700 text-xl"></i>
                            </div>
                          </div>
                        </div>

                        {/* Informações da página */}
                        <div className="mt-4 text-center">
                          <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2">
                            {content.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base mb-3">
                            {content.description}
                          </p>
                          
                          {/* Botão de zoom */}
                          <button
                            onClick={() => openZoomModal(realImage)}
                            className="inline-flex items-center space-x-2 bg-baby-pink text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                            data-testid={`zoom-page-${content.id}`}
                          >
                            <i className="fas fa-expand-arrows-alt"></i>
                            <span>Ver em Tamanho Real</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Fallback se não houver imagem real
                      <div className="text-center">
                        <div className="text-6xl mb-4 opacity-50">{content.icon}</div>
                        <h3 className="font-poppins text-xl font-bold text-gray-600 mb-2">
                          Página em breve!
                        </h3>
                        <p className="text-gray-500">
                          Esta página real será adicionada em breve.
                        </p>
                      </div>
                    )}

                    {/* Real Page Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PÁGINA REAL
                      </div>
                    </div>

                    {/* Page indicator */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                        Página {index + 1}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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

      {/* Modal de Zoom para Páginas Reais */}
      {isZoomModalOpen && zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeZoomModal}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-baby-pink to-baby-blue text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <i className="fas fa-book-open text-xl"></i>
                <h3 className="font-poppins font-bold text-lg">Página Real do eBook</h3>
              </div>
              <button
                onClick={closeZoomModal}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                data-testid="close-zoom-modal"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="p-6 max-h-[80vh] overflow-auto">
              <img
                src={zoomedImage}
                alt="Página real do eBook em tamanho ampliado"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Footer do Modal */}
            <div className="bg-gray-50 p-4 text-center border-t">
              <p className="text-gray-600 text-sm mb-3">
                ✨ Esta é uma das páginas reais do eBook "Receitinhas do Bebê"
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  📖 Conteúdo Real
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  ✅ Qualidade Garantida
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                  🎯 +100 Receitas
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}