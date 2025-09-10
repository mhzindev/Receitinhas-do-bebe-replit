import { useState, useEffect } from "react";

const notifications = [
  "Ana de SP garantiu o eBook e em 3 dias seu bebê já comia brócolis!",
  "Maria do RJ economizou R$ 200/mês em papinhas com as receitas!",
  "Carla de MG transformou a hora da refeição em momento de alegria!",
  "Fernanda de RS viu seu bebê pedir mais comida pela primeira vez!",
  "Patricia de PR resolveu a seletividade alimentar em 1 semana!",
  "Juliana de BA conseguiu fazer o filho comer verduras!",
  "Camila de SC acabou com o estresse das refeições!",
  "Lucia de PE viu o peso do bebê aumentar 500g em 15 dias!",
  "Renata de GO garantiu o desenvolvimento saudável do filho!",
  "Viviane de PB parou de se sentir culpada nas refeições!"
];

export function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const showNotification = () => {
      setCurrentName(notifications[currentIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      currentIndex = (currentIndex + 1) % notifications.length;
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
            {currentName}
          </p>
          <p className="text-xs text-gray-500">há poucos minutos</p>
        </div>
      </div>
    </div>
  );
}
