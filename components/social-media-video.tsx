"use client"

import { useRef, useState } from "react"

interface SocialMediaVideoProps {
  src: string
  className?: string
}

export function SocialMediaVideo({ src, className = "" }: SocialMediaVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsLoaded(true)
  }

  // Handle video error
  const handleVideoError = () => {
    setHasError(true)
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-lg ${className}`}>
      {hasError ? (
        // Fallback if video fails to load
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Video could not be loaded</p>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls
            playsInline
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            poster="/images/design-portfolio-showcase.png"
          />

          {/* Loading state overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="animate-pulse text-gray-400">Loading video...</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
