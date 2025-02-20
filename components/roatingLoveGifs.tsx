import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const RotatingGifs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gifCount = 18;

  const content = Array.from({ length: gifCount }, (_, index) => ({
    gifUrl: `/gifs/gifCat (${index + 1}).gif`,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * content.length);
      setCurrentIndex(randomIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r blur-xl rounded-lg" />

      <Card className="relative overflow-hidden backdrop-blur-sm p-3 sm:p-4 md:p-6 bg-background/20">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square relative overflow-hidden rounded-lg">
            {content.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={item.gifUrl}
                  alt={`GIF ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RotatingGifs;