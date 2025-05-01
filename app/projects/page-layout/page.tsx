import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Page Layout Design Projects | Hassan Fakhreddine",
  description: "Explore my portfolio of page layout design projects.",
}

export default function PageLayoutProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tighter mb-4">Page Layout Design Projects</h1>
        <p className="text-gray-500 max-w-[600px] mb-12">
          A collection of page layout design projects including books, magazines, and publications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Lovebox Booklet"
            category="Page Layout Design"
            imageUrl="/images/lovebox-2.jpg"
            link="/project/lovebox-booklet"
            isInternal={true}
          />
        </div>
      </div>
    </div>
  )
}
