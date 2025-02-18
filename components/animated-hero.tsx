"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timer from "./Timer";
import { FloatingNavDemo } from "./navBar";
import { Card } from "@/components/ui/card";
import RotatingGifs from "./roatingLoveGifs";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["guapa", "maravillosa", "hermosa", "especial", "linda", "preciosa"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-0 w-full">
        <FloatingNavDemo />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 min-h-screen">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex justify-between items-center">
              <Button variant="secondary" size="sm" className="animate-pulse">
                Kattia y Jean <Heart className="w-4 h-4 ml-2 text-red-500" />
              </Button>
            </div>

            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl tracking-tighter font-regular">
                <span className="text-spektr-cyan-100">Kattia, tú eres</span>
                <span className="relative flex overflow-hidden md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold bg-gradient-to-r text-primary bg-clip-text"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight">
                Cada momento contigo se siente taan bien. Traes alegría, amor y
                luz a mi vida, y estoy muy agradecido por ti. Gracias por ser mi
                novia, mi pareja, mi compañera, mi mejor amiga, mi amante, mi
                todo.
              </p>
            </div>

            <Button size="lg" className="gap-4 w-fit">
              Creemos más recuerdos <MoveRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Timer Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <Card className="p-8 shadow-xl backdrop-blur-sm bg-white/50 dark:bg-gray-800/80 w-full max-w-md">
              <RotatingGifs />
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-2xl font-semibold text-center mt-4">
                  Ya llevamos
                </h2>
                <div className="flex flex-col items-center justify-center ">
                  <div>
                    <Timer />
                  </div>
                  Juntos <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
