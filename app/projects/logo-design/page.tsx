import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Logo Design Projects | Hassan Fakhreddine",
  description: "Explore my portfolio of logo design projects.",
}

export default function LogoDesignProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tighter mb-4">Logo Design Projects</h1>
        <p className="text-gray-500 max-w-[600px] mb-12">
          A collection of logo design projects that create distinctive visual identities for brands.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Jupiter"
            category="Logo Design"
            imageUrl="/images/jupiter-logo.jpeg"
            link="/project/jupiter"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="Silverstein Cakes"
            category="Logo Design"
            imageUrl="/images/silverstein-cakes-logo.jpeg"
            link="/project/silverstein-cakes"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="PineLand"
            category="Logo Design"
            imageUrl="/images/pineland-logo.jpeg"
            link="/project/pineland"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="All Star Apparel"
            category="Logo Design"
            imageUrl="/images/all-star-apparel-logo.jpeg"
            link="/project/all-star-apparel"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="Amaken"
            category="Arabic Logo Design"
            imageUrl="/images/amaken-logo.jpeg"
            link="/project/amaken"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="Gitar Undervisning"
            category="Logo Design"
            imageUrl="/images/gitar-undervisning-logo.jpeg"
            link="/project/gitar-undervisning"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="TechRivo"
            category="Logo Design"
            imageUrl="/images/techrivo-logo.jpeg"
            link="/project/techrivo"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="Sheriff Dickles"
            category="Gaming Logo Design"
            imageUrl="/images/sheriff-dickles-logo.jpeg"
            link="/project/sheriff-dickles"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="TwoAeon"
            category="Logo Design"
            imageUrl="/images/twoaeon-logo.jpeg"
            link="/project/twoaeon"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="Mimou Bikini"
            category="Brand Identity + Photography"
            imageUrl="/images/mimou.png"
            link="/project/mimou-bikini"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
          <ProjectCard
            title="Fount Energy"
            category="Brand Identity + UI/UX Design"
            imageUrl="/images/fount.png"
            link="/project/fount-energy"
            isInternal={true}
            objectFit="contain"
            className="bg-white"
          />
        </div>
      </div>
    </div>
  )
}
