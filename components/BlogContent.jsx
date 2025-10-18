"use client"
import Image from "next/image";
import blog from "@/public/blog.jpg"

import { motion } from "motion/react";
import { Button } from "./ui/button";
import BlogsList from "./BlogsList";

function BlogContent() {
const posts = [
    {
      id: 1,
      img: "/pics1.jpg",
      title: "Improve design with typography?",
      desc: "Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!",
    },
    {
      id: 2,
      img: "/pics2.jpg",
      title: "How color balance affects design?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum aliquid fugiat.",
    },
    {
      id: 3,
      img: "/pics3.jpg",
      title: "Responsive layouts made easy",
      desc: "Earum ipsum quae voluptatem perspiciatis facere iure ducimus doloremque. Corporis, illum.",
    },
    {
      id: 4,
      img: "/pics4.jpg",
      title: "Modern design trends 2025",
      desc: "Inventore excepturi deserunt quod obcaecati dicta pariatur incidunt at adipisci sed.",
    },
  ];

  return (
    <>
        <div className="
            relative 
            w-full 
            max-w-7xl
            mx-auto
            px-3
            sm:px-8
            md:px-8
            lg:px-10
            ">
            <div className="
                border-b-2 border-black 
                shadow-[0_4px_8px_rgba(249,115,22,0.4)]
                sm:shadow-[0_6px_10px_rgba(249,115,22,0.5)]
                md:shadow-[0_8px_12px_rgba(249,115,22,0.6)]
                h-[16rem] 
                xs:h-[18rem]
                sm:h-[22rem] 
                md:h-[26rem] 
                lg:h-[30rem] 
                xl:h-[34rem]
                2xl:h-[38rem]
                w-full 
                relative 
                rounded-b-lg
                sm:rounded-b-xl
                md:rounded-b-2xl
                lg:rounded-b-3xl
                overflow-hidden
                group
            ">
                <Image 
                src={blog} 
                alt="blog page hero image" 
                placeholder="blur"   
                sizes="(max-width: 480px) 100vw, (max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, (max-width: 1280px) 80vw, 1200px" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                priority
                quality={90}
                />
                
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div 
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
                duration: 1,
                ease: "easeOut",
                type: "spring",
                bounce: 0.5
            }}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center mt-7 text-7xl font-sans space-x-0.5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]">
                Blogs
            </h1>
            </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 mb-9 space-y-16 px-4">
            {
                posts.map((curent, index) => {
                    return (
                        <BlogsList key={curent.id} curent={curent} index={index}/>
                    )
                })
            }


        </div>
    
    </>
  )
}

export default BlogContent