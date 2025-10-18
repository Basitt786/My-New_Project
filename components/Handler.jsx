"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const videos = [
  "/aivideo.mp4",
  "/mixkit.mp4",
  "/rate.mp4",
  "/robot.mp4",
];

export default function Handler() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence>
        <motion.video
          key={videos[current]}
          src={videos[current]}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

