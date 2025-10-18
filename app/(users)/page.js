"use client";

import { CarouselPlugin } from "@/components/Carousel";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const videos = [
    "/aivideo.mp4",
    "/mixkit.mp4",
    "/rate.mp4",
    "/robot.mp4",
  ];

  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-6">
     
      <div className="relative w-full h-[60vh] md:h-[80vh] max-w-6xl overflow-hidden rounded-b-full bg-gradient-to-b from-transparent via-black/100 to-gray-400/50  border-t-0 border-2 border-amber-500 shadow-2xl bg-black">
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[current]}
            src={videos[current]}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full object-cover to-black opacity-100"
          />
        </AnimatePresence>

        
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/100 to-gray-400/50"></div>

        
        <div className="absolute top-9 inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold font-sans drop-shadow-lg animate-fadeIn">
            Welcome to Portfolio
          </h1>
          <p className="text-white text-lg md:text-2xl drop-shadow-md mt-2 font-sans animate-fadeIn delay-200">
            View My Work
          </p>
        </div>
      </div>

      
      <div className="w-full flex justify-center ">
        <CarouselPlugin />
      </div>
    </div>
  );
}












