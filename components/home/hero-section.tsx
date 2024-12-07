"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Boxes, CircuitBoard, Code2, Github } from "lucide-react";
import Link from "next/link";

export const FloatingShape = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      x: [0, 20, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

export const Spotlight = () => (
  <div className="pointer-events-none absolute inset-0 z-30 transition-all">
    <div className="absolute inset-auto h-[300px] w-[300px] bg-gradient-to-r from-primary/30 to-purple-500/30 dark:from-primary/20 dark:to-purple-500/20 blur-[100px]" />
  </div>
);

const FloatingTechIcon = ({
  icon: Icon,
  className,
}: {
  icon: React.ElementType; // updated type
  className?: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: ["0%", "-50%", "0%"],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Icon className="w-8 h-8 text-foreground/60 dark:text-foreground/40 stroke-[1.5]" />
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-background">
      <FloatingShape className="bg-primary/40 dark:bg-primary/30 w-72 h-72 top-1/4 -left-20" />
      <FloatingShape className="bg-blue-400/40 dark:bg-blue-400/30 w-96 h-96 top-1/3 -right-20" />
      <FloatingShape className="bg-purple-400/40 dark:bg-purple-400/30 w-64 h-64 bottom-1/4 left-1/3" />

      <div className="absolute inset-0 bg-grid-slate dark:bg-grid-white bg-[size:50px_50px] opacity-25 dark:opacity-[0.05]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20 dark:from-transparent dark:via-background/5 dark:to-background/20" />

      <Spotlight />

      <FloatingTechIcon icon={Code2} className="top-1/4 left-1/4" />
      <FloatingTechIcon icon={CircuitBoard} className="top-1/3 right-1/4" />
      <FloatingTechIcon icon={Boxes} className="bottom-1/4 left-1/3" />
      <FloatingTechIcon icon={Github} className="bottom-1/3 right-1/3" />

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="relative">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-foreground dark:text-foreground">
            Transforming Ideas into
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400">
              Digital Reality
            </span>
          </h1>

          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 dark:from-primary/5 dark:to-purple-500/5 blur-xl" />
        </div>

        <p className="text-2xl text-muted-foreground dark:text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting cutting-edge digital experiences with modern technologies and
          innovative design solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="min-w-[200px] relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-primary/20 dark:border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors"
            >
              View Our Work
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 dark:border-primary/50 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-primary/50 dark:bg-primary/50 rounded-full"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
