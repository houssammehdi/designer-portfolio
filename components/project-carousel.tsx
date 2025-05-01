"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  category: string
  imageUrl: string
  link: string
  isInternal?: boolean
  imageClassName?: string
}

interface ProjectCarouselProps {
  projects: Project[]
  itemsPerPage?: number
  autoRotateInterval?: number
  className?: string
}

export function ProjectCarousel({
  projects,
  itemsPerPage = 3,
  autoRotateInterval = 5000,
  className,
}: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const goToPage = useCallback(
    (page: number) => {
      // Handle wrapping around
      if (page < 0) {
        setCurrentPage(totalPages - 1)
      } else if (page >= totalPages) {
        setCurrentPage(0)
      } else {
        setCurrentPage(page)
      }
    },
    [totalPages],
  )

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1)
  }, [currentPage, goToPage])

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1)
  }, [currentPage, goToPage])

  // Auto-rotate
  useEffect(() => {
    if (autoRotateInterval <= 0) return

    const interval = setInterval(() => {
      nextPage()
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [nextPage, autoRotateInterval])

  // Get current projects to display
  const currentProjects = projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className={cn("relative", className)}>
      {/* Navigation Arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
          onClick={prevPage}
          aria-label="Previous projects"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
          onClick={nextPage}
          aria-label="Next projects"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            title={project.title}
            category={project.category}
            imageUrl={project.imageUrl}
            link={project.link}
            isInternal={project.isInternal}
            imageClassName={project.imageClassName}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              currentPage === index ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400",
            )}
            aria-label={`Go to page ${index + 1}`}
            aria-current={currentPage === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
