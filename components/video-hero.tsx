"use client"

import { useRef, useState } from "react"

interface VideoHeroProps {
  className?: string
}

export function VideoHero({ className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Direct MP4 video URL from Vercel Blob storage
  const videoUrl = "https://edyyifc1a03xf4de.public.blob.vercel-storage.com/video-57UREvuXxMroi6VrXcvFivsNZnKT50.mp4"

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsLoaded(true)
  }

  // Handle video error
  const handleVideoError = () => {
    setHasError(true)
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-xl ${className}`}>
      {hasError ? (
        // Fallback image if video fails to load
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <img
            src="/design-portfolio-showcase.png"
            alt="Design Portfolio Showcase"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            poster="/design-portfolio-showcase.png"
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
