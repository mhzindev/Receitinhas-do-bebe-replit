import { useState, useEffect } from "react";

const names = [
  "Ana de SP", "Maria do RJ", "Carla de MG", "Fernanda de RS", 
  "Patricia de PR", "Juliana de BA", "Camila de SC", "Lucia de PE",
  "Renata de GO", "Viviane de PB", "Sabrina de ES", "Claudia de MT"
];

export function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const showNotification = () => {
      setCurrentName(names[currentIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      currentIndex = (currentIndex + 1) % names.length;
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Show subsequent notifications every 8 seconds
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-white border border-baby-green rounded-lg shadow-lg p-3 max-w-xs floating-notification" data-testid="social-proof-notification">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-baby-green rounded-full flex items-center justify-center">
          <i className="fas fa-check text-white text-xs"></i>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-900" data-testid="social-proof-text">
            {currentName} garantiu o eBook agora mesmo!
          </p>
          <p className="text-xs text-gray-500">há 2 minutos</p>
        </div>
      </div>
    </div>
  );
}
