import { useState, useEffect } from "react";

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

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedbacks: FeedbackData[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function FeedbackModal({ isOpen, onClose, feedbacks, currentIndex, onNavigate }: FeedbackModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < feedbacks.length - 1) onNavigate(currentIndex + 1);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, feedbacks.length, onNavigate, onClose]);

  if (!isOpen || !feedbacks[currentIndex]) return null;

  const feedback = feedbacks[currentIndex];
  const platformConfig = {
    whatsapp: {
      bgColor: "bg-green-500",
      icon: "fab fa-whatsapp",
      name: "WhatsApp"
    },
    instagram: {
      bgColor: "bg-pink-500",
      icon: "fab fa-instagram", 
      name: "Instagram"
    }
  };

  const config = platformConfig[feedback.platform];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" data-testid="feedback-modal">
      {/* Background overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Modal content */}
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4 bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${config.bgColor} rounded-full flex items-center justify-center`}>
              <i className={`${config.icon} text-white`}></i>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{feedback.customerName} - {feedback.location}</h3>
              <p className="text-sm text-gray-500">{config.name} • {feedback.time}</p>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(feedback.rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-400"></i>
              ))}
            </div>
            {feedback.verified && (
              <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                <i className="fas fa-check-circle text-green-500 text-xs"></i>
                <span className="text-xs text-green-700 font-medium">Verificado</span>
              </div>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            data-testid="close-modal"
          >
            <i className="fas fa-times text-gray-600"></i>
          </button>
        </div>

        {/* Image container */}
        <div className="relative bg-gray-50 flex items-center justify-center" style={{ minHeight: "400px" }}>
          <img
            src={feedback.imageSrc}
            alt={`Feedback de ${feedback.customerName}`}
            className={`max-w-full max-h-[60vh] object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-baby-pink"></div>
            </div>
          )}

          {/* Navigation arrows */}
          {currentIndex > 0 && (
            <button
              onClick={() => onNavigate(currentIndex - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              data-testid="prev-feedback"
            >
              <i className="fas fa-chevron-left text-gray-700"></i>
            </button>
          )}
          
          {currentIndex < feedbacks.length - 1 && (
            <button
              onClick={() => onNavigate(currentIndex + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              data-testid="next-feedback"
            >
              <i className="fas fa-chevron-right text-gray-700"></i>
            </button>
          )}
        </div>

        {/* Message */}
        <div className="p-6 border-t">
          <p className="text-gray-700 text-lg leading-relaxed">"{feedback.message}"</p>
          
          {/* Navigation dots */}
          {feedbacks.length > 1 && (
            <div className="flex items-center justify-center space-x-2 mt-6">
              {feedbacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-baby-pink w-6' : 'bg-gray-300'
                  }`}
                  data-testid={`dot-${index}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}