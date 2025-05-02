import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  imageUrl: string
  link?: string
  isInternal?: boolean
  className?: string
  imageClassName?: string
  objectFit?: "cover" | "contain"
}

export function ProjectCard({
  title,
  category,
  imageUrl,
  link,
  isInternal = false,
  className,
  imageClassName,
  objectFit = "cover",
}: ProjectCardProps) {
  const CardWrapper = link ? (isInternal ? Link : "a") : "div"
  const wrapperProps = link
    ? isInternal
      ? { href: link }
      : { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <CardWrapper {...wrapperProps} className={cn("group cursor-pointer overflow-hidden rounded-lg", className)}>
      <Card className="border-0 overflow-hidden">
        <div className={cn("relative overflow-hidden", objectFit === "contain" ? "aspect-square" : "aspect-[4/3]")}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className={cn(
              objectFit === "contain"
                ? "object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                : "object-cover transition-transform duration-300 group-hover:scale-105",
              imageClassName,
            )}
          />
          {link && !isInternal && (
            <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="h-4 w-4" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}
