import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Photography Projects | Hassan Fakhreddine",
  description: "Explore my portfolio of photography projects.",
}

export default function PhotographyProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tighter mb-4">Photography Projects</h1>
        <p className="text-gray-500 max-w-[600px] mb-12">
          A collection of photography projects showcasing product, lifestyle, and brand photography.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Mimou Bikini"
            category="Brand Identity + Photography"
            imageUrl="/images/mimou.png"
            link="/project/mimou-bikini"
            isInternal={true}
          />
          <ProjectCard
            title="Photography Portfolio"
            category="Fashion Photography"
            imageUrl="/images/photography/bikini-yellow-1.jpeg"
            link="/photography"
            isInternal={true}
          />
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Photography Services</h2>
              <p className="text-gray-600 mb-6">
                Professional photography services tailored to your specific needs, whether it's fashion, product,
                lifestyle, or event photography.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/photography/bikini-pink-1.jpeg"
                  alt="Fashion Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/photography/bikini-hearts-1.jpeg"
                  alt="Fashion Photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
