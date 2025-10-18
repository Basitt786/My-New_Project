"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Star, Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// ✅ Custom Dots
function CarouselDots({ totalSlides, currentSlide, onDotClick }) {
  return (
    <div className="flex justify-center mt-6 space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  )
}

export function CarouselPlugin() {
  const [api, setApi] = React.useState(null)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  )

  const images = [
    { src: "/image1.jpg", title: "Mountain Paradise", description: "Breathtaking mountain views", rating: 4.8, likes: 124 },
    { src: "/image2.jpg", title: "Ocean Bliss", description: "Crystal clear blue waters", rating: 4.9, likes: 256 },
    { src: "/image3.jpg", title: "Forest Retreat", description: "Serene forest pathways", rating: 4.7, likes: 189 },
    { src: "/image4.jpg", title: "City Lights", description: "Urban nightscape magic", rating: 4.6, likes: 312 },
    { src: "/image4.jpg", title: "City Lights", description: "Urban nightscape magic", rating: 4.6, likes: 312 },
  ]

  const totalSlides = images.length

  // ✅ Carousel state management
  React.useEffect(() => {
    if (!api) return

    const updateSlide = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    updateSlide()
    api.on("select", updateSlide)

    return () => {
      api.off("select", updateSlide)
    }
  }, [api])

  // Navigation functions
  const scrollPrev = () => api?.scrollPrev()
  const scrollNext = () => api?.scrollNext()

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-sans font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Collections
        <div className="flex justify-center mt-3">
       <div className="w-1/4 h-[6px] bg-amber-500 rounded-full ml-[0rem]"></div>
    </div>
      </h2>
      

      <div className="relative">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
            align: "center",
          }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {images.map((item, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-105 border-0 group">
                  <CardContent className="relative h-80 p-0">
<Image
  src={item.src}
  alt={item.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover transition-all duration-700 group-hover:scale-110"
/>


                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex justify-between text-sm mb-2">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-yellow-400" /> {item.rating}
                        </div>
                        <div className="flex items-center gap-1 text-pink-500">
                          <Heart className="w-4 h-4 fill-pink-500" /> {item.likes}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">
                        {item.description}
                      </p>
                      <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

       
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 border-none shadow-xl hover:scale-110 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 border-none shadow-xl hover:scale-110 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <CarouselDots
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onDotClick={(i) => api?.scrollTo(i)}
      />
    </div>
  )
}