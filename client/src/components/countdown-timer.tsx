import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Verifica se já existe um timer ativo no localStorage
    const savedEndTime = localStorage.getItem('countdown-end-time');
    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
      // Se o timer expirou, cria um novo
      if (endTime <= new Date().getTime()) {
        endTime = new Date().getTime() + (6 * 60 * 60 * 1000); // 6 horas a partir de agora
        localStorage.setItem('countdown-end-time', endTime.toString());
      }
    } else {
      // Primeiro acesso - cria timer de 6 horas
      endTime = new Date().getTime() + (6 * 60 * 60 * 1000);
      localStorage.setItem('countdown-end-time', endTime.toString());
    }

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const timeLeftMs = endTime - currentTime;

      if (timeLeftMs <= 0) {
        // Timer expirou - criar novo timer de 6 horas
        const newEndTime = new Date().getTime() + (6 * 60 * 60 * 1000);
        localStorage.setItem('countdown-end-time', newEndTime.toString());
        endTime = newEndTime;
        return;
      }

      const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    // Atualiza imediatamente
    updateTimer();

    // Continua atualizando a cada segundo
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <span className="font-mono">OFERTA EXPIRADA!</span>;
  }

  return (
    <span className="font-mono">
      {timeLeft.hours.toString().padStart(2, '0')}:
      {timeLeft.minutes.toString().padStart(2, '0')}:
      {timeLeft.seconds.toString().padStart(2, '0')}
    </span>
  );
}
