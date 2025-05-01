import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Lovebox Booklet | Hassan Fakhreddine",
  description: "A comprehensive page layout design project for Lovebox's product booklet.",
}

export default function LoveboxBookletPage() {
  const project = {
    title: "Lovebox Booklet",
    category: "Page Layout Design",
    client: "Lovebox",
    year: "2022",
    imageUrl: "/images/lovebox-2.jpg", // Using book-2 as the thumbnail as requested
    description: "A comprehensive page layout design project for Lovebox's self-love subscription box booklet.",
    challenge:
      "Creating a professional, engaging layout for a product booklet with various content types including text, images, and product specifications while maintaining a cohesive brand identity.",
    solution:
      "I developed a clean, readable layout with a consistent typographic system that enhances readability while maintaining visual interest. Special attention was given to the hierarchy of information and the integration of visual elements to create an engaging and informative booklet.",
    results:
      "The booklet received praise for its professional design and readability, contributing to its effectiveness as a marketing tool and enhancing the overall unboxing experience for customers.",
    services: ["Page Layout Design", "Typography", "Print Preparation", "Image Editing", "Brand Implementation"],
    testimonial: {
      quote:
        "Hassan's design transformed our product information into an engaging publication. His attention to detail and understanding of typography made the content accessible and visually appealing.",
      author: "Sarah Johnson",
      role: "Marketing Director, Lovebox",
    },
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tighter mb-4">{project.title}</h1>
            <p className="text-gray-500 mb-8 text-lg">{project.description}</p>

            <div className="relative aspect-video overflow-hidden rounded-xl mb-8">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/lovebox-3.jpg"
                    alt="Lovebox Packaging and Booklet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src="/images/lovebox-1.jpg" alt="Lovebox Short Story Page" fill className="object-cover" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Results</h2>
                <p className="text-gray-600">{project.results}</p>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/images/lovebox-4.jpg" alt="Lovebox Booklet Interior Page" fill className="object-cover" />
              </div>

              {project.testimonial && (
                <div className="bg-gray-50 p-8 rounded-xl">
                  <blockquote className="text-xl italic text-gray-700 mb-4">"{project.testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <p className="font-medium">{project.testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
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
