import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects | Hassan Fakhreddine",
  description: "Explore my portfolio of UI/UX design, brand identity, and graphic design projects.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tighter mb-4">All Projects</h1>
        <p className="text-gray-500 max-w-[600px] mb-12">
          A comprehensive collection of my work across UI/UX design, brand identity, graphic design, and content
          creation.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Fount Energy"
            category="UI/UX Design"
            imageUrl="/images/fount.png"
            link="/project/fount-energy"
            isInternal={true}
          />
          <ProjectCard
            title="MtSignals"
            category="Co-Founder + UI/UX Design"
            imageUrl="/images/mtsignals.png"
            link="/project/mt-signals"
            isInternal={true}
          />
          <ProjectCard
            title="Mimou Bikini"
            category="Brand Identity + Shopify Store"
            imageUrl="/images/mimou.png"
            link="/project/mimou-bikini"
            isInternal={true}
          />
          <ProjectCard
            title="CXG"
            category="Graphic Design Services"
            imageUrl="/images/cxg.png"
            link="/project/cxg"
            isInternal={true}
          />
          <ProjectCard
            title="Goose Valley VC"
            category="UI Design"
            imageUrl="/images/goose-valley.png"
            link="/project/goose-valley"
            isInternal={true}
          />
          <ProjectCard
            title="Book Layout Design"
            category="Print Design"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/book-layout"
            isInternal={true}
          />
          <ProjectCard
            title="Mobile App UI"
            category="UI/UX Design"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/mobile-app-ui"
            isInternal={true}
          />
          <ProjectCard
            title="Brand Guidelines"
            category="Brand Identity"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/brand-guidelines"
            isInternal={true}
          />
          <ProjectCard
            title="Social Media Campaign"
            category="Content Creation"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/social-media-campaign"
            isInternal={true}
          />
          <ProjectCard
            title="Magazine Layout"
            category="Print Design"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/magazine-layout"
            isInternal={true}
          />
          <ProjectCard
            title="E-commerce Website"
            category="UI/UX Design"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/ecommerce-website"
            isInternal={true}
          />
          <ProjectCard
            title="Logo Collection"
            category="Brand Identity"
            imageUrl="/placeholder.svg?height=600&width=800"
            link="/project/logo-collection"
            isInternal={true}
          />
        </div>
      </div>
    </div>
  )
}
