"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import OptimizedImage from "../../ui/common/OptimizedImage"

export default function ImageSlider({ images, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !images || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [autoPlay, images])

  if (!images || images.length === 0) {
    return null
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setAutoPlay(false)
  }

  // If only one image, show it without slider controls
  if (images.length === 1) {
    return (
      <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
        <OptimizedImage
          src={images[0]}
          alt={projectTitle}
          className="w-full aspect-video object-cover"
        />
      </div>
    )
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Image Container */}
      <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <OptimizedImage
              src={images[currentIndex]}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentIndex === index
                  ? "border-purple-500 ring-2 ring-purple-500/50 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            >
              <OptimizedImage
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
              {currentIndex === index && (
                <div className="absolute inset-0 border-2 border-purple-500" />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  projectTitle: PropTypes.string.isRequired,
}

ImageSlider.defaultProps = {
  images: [],
}
