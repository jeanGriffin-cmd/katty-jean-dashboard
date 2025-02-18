"use client";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timeTogether, setTimeTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-10-30"); // Replace with your start date
    const interval = setInterval(() => {
      const now = new Date();
      const diffInSeconds = Math.floor(
        (now.getTime() - startDate.getTime()) / 1000
      );
      setTimeTogether(diffInSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60; // Add seconds
    return `${days}d ${hours}h ${minutes}m ${secs}s`; // Include seconds in the output
  };

  return (
    <div>
      <p className="text-4xl font-bold">{formatTime(timeTogether)}</p>
    </div>
  );
};

export default Timer;