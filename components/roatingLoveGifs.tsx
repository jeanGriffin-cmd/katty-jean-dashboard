import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const RotatingGifs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the number of GIFs in your folder
  const gifCount = 18; // Assuming you have 5 GIFs: gifCat (1).gif to gifCat (5).gif

  // Generate an array of GIF URLs dynamically
  const content = Array.from({ length: gifCount }, (_, index) => ({
    gifUrl: `/gifs/gifCat (${index + 1}).gif`,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * content.length); // Generate a random index
      setCurrentIndex(randomIndex);
    }, 3000); // Change GIF every 3 seconds

    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r blur-xl rounded-lg" />

      <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6">
        <div className="flex flex-col items-center space-y-4">
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