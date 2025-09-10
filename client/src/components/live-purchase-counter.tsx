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

// Sessão storage para persistir dados entre reloads
const SESSION_STORAGE_KEY = "live_purchase_counter";

interface SessionData {
  basePurchaseCount: number;
  sessionIncreaments: number;
  sessionStarted: number;
}

const getSessionData = (): SessionData => {
  try {
    const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.debug("Error reading session data:", error);
  }
  
  // Valores padrão para nova sessão
  const baseCount = 1247 + Math.floor(Math.random() * 50); // Varia entre 1247-1297
  return {
    basePurchaseCount: baseCount,
    sessionIncreaments: 0,
    sessionStarted: Date.now()
  };
};

const saveSessionData = (data: SessionData) => {
  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.debug("Error saving session data:", error);
  }
};

export function LivePurchaseCounter({ className = "" }: LivePurchaseCounterProps) {
  const [sessionData, setSessionData] = useState<SessionData>(getSessionData);
  const [lastPurchaseAt, setLastPurchaseAt] = useState(Date.now() - (Math.random() * 240000 + 60000)); // 1-5 min atrás
  const [wasLastRecent, setWasLastRecent] = useState(false);

  const getCurrentMessage = () => {
    const minutesAgo = Math.floor((Date.now() - lastPurchaseAt) / 60000);
    
    let timeText: string;
    if (minutesAgo < 1) {
      timeText = "agora mesmo";
    } else if (minutesAgo === 1) {
      timeText = "1 minuto";
    } else if (minutesAgo <= 4) {
      timeText = `${minutesAgo} minutos`;
    } else {
      // Reset para tempo mais recente se passou muito tempo
      const newTime = Date.now() - (Math.random() * 180000 + 60000); // 1-4 min atrás
      setLastPurchaseAt(newTime);
      timeText = `${Math.floor((Date.now() - newTime) / 60000)} minutos`;
    }

    const messageTemplate = purchaseMessages[Math.floor(Math.random() * purchaseMessages.length)];
    return messageTemplate.replace("{time}", timeText);
  };

  const [currentMessage, setCurrentMessage] = useState(getCurrentMessage());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNextUpdate = () => {
      // Intervalo variável entre 18-40 segundos
      const nextDelay = Math.random() * 22000 + 18000;
      
      timeoutId = setTimeout(() => {
        // 20% chance de "compra recente" (não consecutiva)
        const shouldBeRecent = Math.random() < 0.2 && !wasLastRecent;
        
        if (shouldBeRecent) {
          // Nova compra "agora mesmo"
          setLastPurchaseAt(Date.now());
          setWasLastRecent(true);
          
          // Incrementa contador se ainda não atingiu o limite da sessão (3-6 incrementos por sessão)
          const maxIncrements = 3 + Math.floor(Math.random() * 4); // 3-6
          if (sessionData.sessionIncreaments < maxIncrements) {
            const increment = Math.floor(Math.random() * 2) + 1; // +1 ou +2
            const newSessionData = {
              ...sessionData,
              sessionIncreaments: sessionData.sessionIncreaments + increment
            };
            setSessionData(newSessionData);
            saveSessionData(newSessionData);
          }
        } else {
          setWasLastRecent(false);
        }
        
        // Atualiza a mensagem baseada no timestamp
        setCurrentMessage(getCurrentMessage());
        
        // Agenda próxima atualização
        scheduleNextUpdate();
      }, nextDelay);
    };

    // Atualiza mensagem imediatamente baseada no timestamp atual
    const messageUpdateInterval = setInterval(() => {
      setCurrentMessage(getCurrentMessage());
    }, 30000); // Atualiza texto a cada 30s para refletir passagem do tempo

    // Primeira atualização após 3-8 segundos
    const initialDelay = Math.random() * 5000 + 3000;
    setTimeout(() => {
      setCurrentMessage(getCurrentMessage());
      scheduleNextUpdate();
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(messageUpdateInterval);
    };
  }, [sessionData, lastPurchaseAt, wasLastRecent]);

  const totalPurchases = sessionData.basePurchaseCount + sessionData.sessionIncreaments;

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