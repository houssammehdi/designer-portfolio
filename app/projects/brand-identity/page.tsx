import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Brand Identity Projects | Hassan Fakhreddine",
  description: "Explore my portfolio of brand identity design projects.",
}

export default function BrandIdentityProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tighter mb-4">Brand Identity Projects</h1>
        <p className="text-gray-500 max-w-[600px] mb-12">
          A collection of brand identity projects that focus on creating cohesive visual identities that communicate
          brand values and vision.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Fount Energy"
            category="Brand Identity + UI/UX Design"
            imageUrl="/images/fount.png"
            link="/project/fount-energy"
            isInternal={true}
          />
          <ProjectCard
            title="Mimou Bikini"
            category="Brand Identity + Photography"
            imageUrl="/images/mimou.png"
            link="/project/mimou-bikini"
            isInternal={true}
          />
        </div>
      </div>
    </div>
  )
}
