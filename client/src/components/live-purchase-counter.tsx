import { useState, useEffect } from "react";

interface LivePurchaseCounterProps {
  className?: string;
}

// Mensagens variadas para criar mais dinamismo
const purchaseMessages = [
  "⚡ Última compra há {time}",
  "🔥 Alguém comprou há {time}",
  "✨ Compra realizada há {time}",
  "💫 Nova compra há {time}",
];

const timeVariations = [
  "agora mesmo",
  "1 minuto",
  "2 minutos", 
  "3 minutos",
  "4 minutos",
];

export function LivePurchaseCounter({ className = "" }: LivePurchaseCounterProps) {
  const [currentMessage, setCurrentMessage] = useState(purchaseMessages[0].replace("{time}", "2 minutos"));
  const [totalPurchases, setTotalPurchases] = useState(1247);

  useEffect(() => {
    // Função que gera uma nova mensagem realística
    const updateMessage = () => {
      // 40% chance de ser "agora mesmo" para criar urgência
      // 60% chance de ser 1-4 minutos
      const isRecent = Math.random() < 0.4;
      const timeText = isRecent 
        ? timeVariations[0] // "agora mesmo"
        : timeVariations[Math.floor(Math.random() * (timeVariations.length - 1)) + 1];
      
      // Seleciona mensagem aleatória
      const messageTemplate = purchaseMessages[Math.floor(Math.random() * purchaseMessages.length)];
      const newMessage = messageTemplate.replace("{time}", timeText);
      
      setCurrentMessage(newMessage);

      // Se foi "agora mesmo", incrementa contador de compras
      if (isRecent) {
        setTotalPurchases(prev => prev + Math.floor(Math.random() * 2) + 1); // +1 ou +2
      }
    };

    // Primeira atualização após 3-8 segundos (parece mais natural)
    const initialDelay = Math.random() * 5000 + 3000;
    const initialTimer = setTimeout(updateMessage, initialDelay);

    // Depois, atualiza a cada 15-45 segundos (frequência realística)
    const interval = setInterval(() => {
      updateMessage();
    }, Math.random() * 30000 + 15000); // 15-45 segundos

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`mt-4 md:mt-6 bg-baby-yellow text-gray-800 rounded-lg p-3 max-w-md mx-auto ${className}`}>
      <p className="text-xs md:text-sm font-bold" data-testid="total-purchases">
        👥 {totalPurchases.toLocaleString('pt-BR')} mães compraram hoje
      </p>
      <p className="text-xs" data-testid="last-purchase">
        {currentMessage}
      </p>
    </div>
  );
}