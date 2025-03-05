"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"




export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(4)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1)
      } else if (window.innerWidth < 768) {
        setVisibleProducts(2)
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(3)
      } else {
        setVisibleProducts(4)
      }
    }

    updateVisibleProducts()
    window.addEventListener("resize", updateVisibleProducts)
    return () => window.removeEventListener("resize", updateVisibleProducts)
  }, [])

  const totalSlides = Math.max(0, products.length - visibleProducts + 1)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(totalSlides - 1, prevIndex + 1))
  }

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
            width: `${(products.length / visibleProducts) * 100}%`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="px-2" style={{ width: `${(100 / products.length) * visibleProducts}%` }}>
              <Card className="border rounded-lg overflow-hidden h-full flex flex-col">
                <div className="p-4 flex flex-col items-center">
                  <div className="relative w-full aspect-square mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-center">{product.name}</h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white border-gray-200 shadow-md z-10"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white border-gray-200 shadow-md z-10"
        onClick={handleNext}
        disabled={currentIndex >= totalSlides - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

