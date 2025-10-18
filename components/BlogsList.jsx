"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function BlogsList({ curent, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
      }
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
      className={`flex flex-col md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-center justify-center gap-8`}
    >
      {/* Image with Zoom Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full md:w-[500px] h-[300px] overflow-hidden rounded-lg shadow-md group"
      >
        <motion.img
          src={curent.img}
          alt={curent.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Content Card with Dark Theme Support */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(249,115,22,0.3)",
        }}
        className="border-2 border-orange-400 dark:border-orange-600 rounded-lg 
                   p-6 w-full md:w-[500px] 
                   bg-white dark:bg-gray-900 
                   text-gray-900 dark:text-gray-100 
                   shadow-sm"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-sans text-2xl font-bold text-center"
        >
          {curent.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-sans text-lg text-center mt-4"
        >
          {curent.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-6"
        >
          <Button variant="secondary">Learn More</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default BlogsList;
