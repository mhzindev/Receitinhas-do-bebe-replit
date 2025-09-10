import { useState, useEffect } from "react";

// Histórias de sucesso (tipo 1)
const successStories = [
  "Ana de SP conseguiu fazer a filha comer brócolis!",
  "Maria do RJ viu o bebê pedir mais comida pela primeira vez!",
  "Carla de MG transformou a hora da refeição em momento de alegria!",
  "Fernanda de RS resolveu a seletividade alimentar em 1 semana!",
  "Patricia de PR acabou com o estresse das refeições!",
  "Juliana de BA conseguiu fazer o filho comer verduras!",
  "Camila de SC viu o peso do bebê aumentar 500g em 15 dias!",
  "Lucia de PE parou de se sentir culpada nas refeições!",
  "Renata de GO economizou R$ 200/mês em papinhas!",
  "Viviane de PB garantiu o desenvolvimento saudável do filho!"
];

// Compras realizadas (tipo 2)
const purchaseNotifications = [
  "Sofia de SP realizou compra de R$ 12,90",
  "Beatriz do RJ realizou compra de R$ 12,90",
  "Isabela de MG realizou compra de R$ 12,90",
  "Gabriela de RS realizou compra de R$ 12,90",
  "Helena de PR realizou compra de R$ 12,90",
  "Valentina de BA realizou compra de R$ 12,90",
  "Laura de SC realizou compra de R$ 12,90",
  "Manuela de PE realizou compra de R$ 12,90",
  "Alice de GO realizou compra de R$ 12,90",
  "Lívia de PB realizou compra de R$ 12,90"
];

// Entregas/downloads (tipo 3)
const deliveryNotifications = [
  "Larissa de SP recebeu o seu e-book",
  "Amanda do RJ recebeu o seu e-book",
  "Débora de MG recebeu o seu e-book",
  "Roberta de RS recebeu o seu e-book",
  "Mônica de PR recebeu o seu e-book",
  "Cristina de BA recebeu o seu e-book",
  "Tatiane de SC recebeu o seu e-book",
  "Vanessa de PE recebeu o seu e-book",
  "Simone de GO recebeu o seu e-book",
  "Priscila de PB recebeu o seu e-book"
];

type NotificationType = 'success' | 'purchase' | 'delivery';

interface NotificationData {
  message: string;
  type: NotificationType;
}

export function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<NotificationData>({ message: "", type: "success" });

  useEffect(() => {
    let successIndex = 0;
    let purchaseIndex = 0;
    let deliveryIndex = 0;
    let typeIndex = 0; // 0 = success, 1 = purchase, 2 = delivery

    const showNotification = () => {
      let notification: NotificationData;

      if (typeIndex === 0) {
        // História de sucesso
        notification = {
          message: successStories[successIndex],
          type: 'success'
        };
        successIndex = (successIndex + 1) % successStories.length;
      } else if (typeIndex === 1) {
        // Compra realizada
        notification = {
          message: purchaseNotifications[purchaseIndex],
          type: 'purchase'
        };
        purchaseIndex = (purchaseIndex + 1) % purchaseNotifications.length;
      } else {
        // Entrega/download
        notification = {
          message: deliveryNotifications[deliveryIndex],
          type: 'delivery'
        };
        deliveryIndex = (deliveryIndex + 1) % deliveryNotifications.length;
      }

      setCurrentNotification(notification);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4500);

      // Alternar tipo para próxima notificação
      typeIndex = (typeIndex + 1) % 3;
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Show subsequent notifications every 7 seconds
    const interval = setInterval(showNotification, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  // Configuração visual baseada no tipo
  const getNotificationStyle = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-baby-green',
          borderColor: 'border-baby-green',
          icon: 'fas fa-check',
          timeText: 'há poucos minutos'
        };
      case 'purchase':
        return {
          bgColor: 'bg-baby-blue',
          borderColor: 'border-baby-blue', 
          icon: 'fas fa-shopping-cart',
          timeText: 'agora'
        };
      case 'delivery':
        return {
          bgColor: 'bg-baby-pink',
          borderColor: 'border-baby-pink',
          icon: 'fas fa-download',
          timeText: 'há 2 minutos'
        };
    }
  };

  const style = getNotificationStyle(currentNotification.type);

  return (
    <div className={`fixed bottom-4 left-4 z-40 bg-white border ${style.borderColor} rounded-lg shadow-lg p-3 max-w-xs floating-notification`} data-testid="social-proof-notification">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 ${style.bgColor} rounded-full flex items-center justify-center`}>
          <i className={`${style.icon} text-white text-xs`}></i>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-900" data-testid="social-proof-text">
            {currentNotification.message}
          </p>
          <p className="text-xs text-gray-500">{style.timeText}</p>
        </div>
      </div>
    </div>
  );
}
