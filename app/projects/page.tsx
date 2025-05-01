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

        <h2 className="text-2xl font-semibold mb-6">UI/UX & Brand Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <ProjectCard
            title="Fount Energy"
            category="Brand Identity + UI/UX Design"
            imageUrl="/images/fount.png"
            link="/project/fount-energy"
            isInternal={true}
          />
          <ProjectCard
            title="Momentum Trading"
            category="UI/UX Design"
            imageUrl="/images/momentum-trading.png"
            link="/project/momentum-trading"
            isInternal={true}
          />
          <ProjectCard
            title="Mimou Bikini"
            category="Brand Identity + Photography"
            imageUrl="/images/mimou.png"
            link="/project/mimou-bikini"
            isInternal={true}
          />
          <ProjectCard
            title="CXG"
            category="Freelance Graphic Design"
            imageUrl="/images/cxg.png"
            link="/project/cxg"
            isInternal={true}
          />
          <ProjectCard
            title="Goose Valley VC"
            category="UI Design"
            imageUrl="/images/goose-valley-logo.jpeg"
            link="/project/goose-valley"
            isInternal={true}
          />
          <ProjectCard
            title="Lovebox Booklet"
            category="Page Layout Design"
            imageUrl="/images/lovebox-2.jpg"
            link="/project/lovebox-booklet"
            isInternal={true}
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6">Logo Design</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <ProjectCard
            title="Jupiter"
            category="Logo Design"
            imageUrl="/images/jupiter-logo.jpeg"
            link="/project/jupiter"
            isInternal={true}
          />
          <ProjectCard
            title="Silverstein Cakes"
            category="Logo Design"
            imageUrl="/images/silverstein-cakes-logo.jpeg"
            link="/project/silverstein-cakes"
            isInternal={true}
          />
          <ProjectCard
            title="PineLand"
            category="Logo Design"
            imageUrl="/images/pineland-logo.jpeg"
            link="/project/pineland"
            isInternal={true}
          />
          <ProjectCard
            title="All Star Apparel"
            category="Logo Design"
            imageUrl="/images/all-star-apparel-logo.jpeg"
            link="/project/all-star-apparel"
            isInternal={true}
          />
          <ProjectCard
            title="Amaken"
            category="Logo Design"
            imageUrl="/images/amaken-logo.jpeg"
            link="/project/amaken"
            isInternal={true}
          />
          <ProjectCard
            title="Gitar Undervisning"
            category="Logo Design"
            imageUrl="/images/gitar-undervisning-logo.jpeg"
            link="/project/gitar-undervisning"
            isInternal={true}
          />
          <ProjectCard
            title="TechRivo"
            category="Logo Design"
            imageUrl="/images/techrivo-logo.jpeg"
            link="/project/techrivo"
            isInternal={true}
          />
          <ProjectCard
            title="Sheriff Dickles"
            category="Logo Design"
            imageUrl="/images/sheriff-dickles-logo.jpeg"
            link="/project/sheriff-dickles"
            isInternal={true}
          />
          <ProjectCard
            title="TwoAeon"
            category="Logo Design"
            imageUrl="/images/twoaeon-logo.jpeg"
            link="/project/twoaeon"
            isInternal={true}
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6">Photography</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Mimou Bikini Collection"
            category="Fashion Photography"
            imageUrl="/images/photography/bikini-hearts-1.jpeg"
            link="/photography"
            isInternal={true}
          />
        </div>
      </div>
    </div>
  )
}
