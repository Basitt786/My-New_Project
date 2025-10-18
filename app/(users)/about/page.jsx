import Image from "next/image";
import about from "@/public/about.jpg"



export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
      src={about} 
      alt="about page hero image" 
      placeholder="blur"   
      sizes="(max-width: 480px) 100vw, (max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, (max-width: 1280px) 80vw, 1200px" 
      fill 
      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
      priority
      quality={90}
    />
    
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
</div>
   </>
  )
}
