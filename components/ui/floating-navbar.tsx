"use client";
import React, { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { ThemeSwitcher } from "../themeSwitcher";
import { KeyRound } from "lucide-react";
import { Button } from "./button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, 
        }}
        animate={{
          y: 0, 
          opacity: 1, 
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-background pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map(
          (
            navItem: { name: string; link: string; icon?: JSX.Element },
            idx: number
          ) => {
            const isActive = pathname === navItem.link; 
            return (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                  isActive && "text-primary font-bold" 
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            );
          }
        )}
        <Button
          variant="ghost"
          size={"icon"}
          className="text-sm font-medium relative p-2 rounded-lg"
        >
          <KeyRound />
        </Button>
        <div className="pr-4">
          <ThemeSwitcher />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};