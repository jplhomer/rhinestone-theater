import { useEffect, useState, useMemo } from "react"

export default function Countdown({ untilDateString }) {
  const targetDate = new Date(untilDateString);
  const [time, setTime] = useState(Date.now());
  const msRemaining = targetDate.getTime() - time;

  if (msRemaining < 0) {
    return null;
  }

  const { seconds, minutes, hours } = useMemo(() => {
    const seconds = Math.floor((msRemaining / 1000) % 60)
    const minutes = Math.floor((msRemaining / (1000 * 60)) % 60);
    const hours = Math.floor((msRemaining / (1000 * 60 * 60)) % 24);

   return {
     seconds: (seconds < 10) ? "0" + seconds : seconds,
     minutes: (minutes < 10) ? "0" + minutes : minutes,
     hours,
   }
  }, [msRemaining]);

  useEffect(() => {
    const updateTime = () => setTime(Date.now());
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [setTime]);

  return <p className="countdown">{hours}:{minutes}:{seconds}</p>
}
