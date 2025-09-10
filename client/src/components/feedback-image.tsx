import { useState } from "react";

interface FeedbackImageProps {
  imageSrc: string;
  platform: "whatsapp" | "instagram";
  customerName: string;
  location: string;
  message: string;
  time: string;
  rating?: number;
  verified?: boolean;
  onClick?: () => void;
}

export function FeedbackImage({
  imageSrc,
  platform,
  customerName,
  location,
  message,
  time,
  rating = 5,
  verified = true,
  onClick
}: FeedbackImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const platformConfig = {
    whatsapp: {
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      iconColor: "bg-green-400",
      icon: "fab fa-whatsapp"
    },
    instagram: {
      bgColor: "bg-pink-50", 
      borderColor: "border-pink-400",
      iconColor: "bg-pink-400",
      icon: "fab fa-instagram"
    }
  };

  const config = platformConfig[platform];

  if (imageError) {
    // Fallback to text-only testimonial
    return (
      <div className={`${config.bgColor} rounded-lg p-4 border-l-4 ${config.borderColor}`}>
        <div className="flex items-start space-x-3">
          <div className={`w-8 h-8 ${config.iconColor} rounded-full flex items-center justify-center`}>
            <i className={`${config.icon} text-white`}></i>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <p className="font-medium text-gray-800">{customerName} - {location}</p>
              {rating && (
                <div className="flex space-x-1">
                  {[...Array(rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">"{message}"</p>
            <p className="text-xs text-gray-500 mt-2">{time}</p>
            {verified && (
              <div className="flex items-center space-x-1 mt-1">
                <i className="fas fa-check-circle text-green-500 text-xs"></i>
                <span className="text-xs text-green-600 font-medium">Depoimento Verificado</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
      data-testid="feedback-image"
    >
      {/* Main Image Container */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageSrc}
          alt={`Feedback de ${customerName}`}
          className={`w-full h-auto transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">
              <i className="fas fa-image text-2xl"></i>
            </div>
          </div>
        )}

        {/* Overlay with customer info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-1">
              <div className={`w-6 h-6 ${config.iconColor} rounded-full flex items-center justify-center`}>
                <i className={`${config.icon} text-white text-xs`}></i>
              </div>
              <p className="font-medium text-sm">{customerName} - {location}</p>
              {rating && (
                <div className="flex space-x-1">
                  {[...Array(rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                  ))}
                </div>
              )}
            </div>
            <p className="text-xs opacity-90">{time}</p>
          </div>
        </div>

        {/* Verified badge */}
        {verified && (
          <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
            <i className="fas fa-check text-white text-xs"></i>
          </div>
        )}

        {/* Hover effect */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3">
            <i className="fas fa-expand text-gray-700"></i>
          </div>
        </div>
      </div>

      {/* Message preview (only show on hover for images) */}
      <div className="absolute -bottom-2 left-2 right-2 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <p className="text-xs text-gray-600 line-clamp-2">"{message}"</p>
      </div>
    </div>
  );
}