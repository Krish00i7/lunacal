import { useState } from "react";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";

const initialImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
  "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80"
];

export function GalleryWidget() {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = 3;
  const totalSlides = Math.ceil(images.length / visibleImages);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleAddImage = () => {
    const newImage = `https://images.unsplash.com/photo-${Date.now() % 10000000000000}-random?w=800&q=80`;
    setImages([...images, newImage]);
  };

  const startIdx = currentIndex * visibleImages;
  const displayedImages = images.slice(startIdx, startIdx + visibleImages);

  return (
    <div className="bg-widget rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleAddImage}
            className="px-6 py-2.5 bg-tab-inactive hover:bg-tab-active text-foreground rounded-2xl font-medium transition-all duration-300 shadow-lg"
          >
            + ADD IMAGE
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-tab-inactive hover:bg-tab-active rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-tab-inactive hover:bg-tab-active rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-tab-inactive rounded-2xl px-8 py-4 mb-4">
        <h2 className="text-2xl font-semibold text-foreground">Gallery</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {displayedImages.map((image, idx) => (
          <div
            key={startIdx + idx}
            className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={`Gallery item ${startIdx + idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        <span className="text-muted-foreground text-sm">
          {currentIndex + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
}
