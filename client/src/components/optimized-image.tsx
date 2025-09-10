import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  placeholder = true
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "50px" } // Load images 50px before they enter viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={`relative ${className}`} style={{ width, height }}>
      {/* Placeholder while loading */}
      {placeholder && !isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>
      )}

      {/* Actual image - only load when in viewport or priority */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            console.warn(`Failed to load image: ${src}`);
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm"
          style={{ width, height }}
        >
          Erro ao carregar imagem
        </div>
      )}
    </div>
  );
}