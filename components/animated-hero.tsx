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
    <div className="relative w-full min-h-screen">
      {/* Floating NavBar with proper z-index */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <FloatingNavDemo />
      </div>

      {/* Main content with proper padding for floating navbar */}
      <div className="container mx-auto px-4 pt-20 sm:pt-16 md:pt-14 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-[calc(100vh-4rem)] items-center lg:mx-44">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center gap-6 text-center lg:text-left pt-8 lg:pt-0">
            <div className="w-full flex justify-center ">
              <Button variant="secondary" size="sm" className="">
                Kattia y Jean <Heart className="w-4 h-4 ml-2 text-red-500" />
              </Button>
            </div>

            <div className="flex flex-col gap-0 max-w-xl">
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tighter font-regular text-center">
                <span className="text-spektr-cyan-100">Kattia, tú eres</span>
                <span className="relative flex overflow-hidden h-16 md:h-20 items-center justify-center ">
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
              <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-center">
                Cada momento contigo se siente taan bien. Traes alegría, amor y
                luz a mi vida, y estoy muy agradecido por ti. Gracias por ser mi
                novia, mi pareja, mi compañera, mi mejor amiga, mi amante, mi
                todo.
              </p>
            </div>

            <div className="w-full flex justify-center ">
              <Button className="gap-4 text-sm md:text-base">
                Creemos más recuerdos <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Timer Card */}
          <div className="flex items-center justify-center w-full px-4 lg:px-0 mb-2">
            <Card className="p-4 md:p-6 lg:p-8 shadow-xl backdrop-blur-sm bg-background/10 w-full max-w-md">
              <Card className="flex flex-col items-center gap-2  mb-2 p-4 bg-background/20 ">
                <h2 className="text-xl md:text-2xl font-semibold text-center">
                  Ya llevamos
                </h2>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-full px-2">
                    <Timer />
                  </div>
                  <div className="flex items-center gap-2">
                    Juntos{" "}
                    <Heart className="w-5 md:w-6 h-5 md:h-6 text-red-500" />
                  </div>
                </div>
              </Card>
              <RotatingGifs />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
