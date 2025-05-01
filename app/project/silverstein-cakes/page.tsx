import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Silverstein Cakes Logo Design | Hassan Fakhreddine",
  description: "A vibrant, retro-inspired logo design for Silverstein Cakes that captures joy and creativity.",
}

export default function SilversteinCakesProjectPage() {
  const project = {
    title: "Silverstein Cakes",
    category: "Logo Design",
    client: "Silverstein Cakes",
    year: "2023",
    imageUrl: "/images/silverstein-cakes-logo.jpeg",
    description: "A vibrant, retro-inspired logo design for Silverstein Cakes that captures joy and creativity.",
    challenge:
      "Silverstein Cakes needed a logo that captured the joy and creativity of their vibrant, multi-colored bakes—something handmade, fun, and instantly recognizable.",
    solution:
      "I created a custom retro-script wordmark with offset rainbow shadows inspired by stacked frosting, set against a rich red backdrop to enhance warmth and visual pop.",
    results:
      "The logo stands out on packaging and social media, boosting brand recall and helping drive new orders through its playful, memorable design.",
    services: ["Logo Design", "Typography", "Brand Identity", "Packaging Design"],
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects/logo-design">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Logo Design Projects
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tighter mb-4">{project.title}</h1>
            <p className="text-gray-500 mb-8 text-lg">{project.description}</p>

            <div className="relative aspect-video overflow-hidden rounded-xl mb-8 bg-[#e63b2e] flex items-center justify-center">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={450}
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-gray-600">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-gray-600">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Results</h2>
                <p className="text-gray-600">{project.results}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>

                <Separator className="my-4" />

                <div>
                  <p className="text-sm text-gray-500 mb-2">Services</p>
                  <ul className="space-y-1">
                    {project.services.map((service, index) => (
                      <li key={index} className="font-medium">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-4" />

                <div className="pt-2">
                  <Button asChild className="w-full">
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
