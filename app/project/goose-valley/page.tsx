import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Goose Valley VC | Hassan Fakhreddine",
  description: "UI Design project for Goose Valley Venture Capital firm.",
}

export default function GooseValleyProject() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid gap-8 md:gap-12">
          {/* Project Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Goose Valley VC</h1>
            <p className="text-xl text-gray-500">UI Design</p>
          </div>

          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/images/goose-valley-logo.jpeg"
              alt="Goose Valley VC Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Project Details */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-gray-600">
                  Goose Valley Venture Capital needed a modern, professional UI design for their investment platform
                  that would appeal to both startups seeking funding and investors looking for opportunities. The design
                  needed to convey trust, innovation, and financial expertise while maintaining a clean, intuitive user
                  experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
                <p className="text-gray-600">
                  I created a UI design system that incorporated Goose Valley's brand colors and identity while focusing
                  on clarity and ease of use. The interface features a dashboard for investors to track their portfolio
                  performance, a discovery section for exploring new investment opportunities, and a streamlined
                  application process for startups.
                </p>
                <p className="text-gray-600 mt-4">
                  The design uses data visualization components to present complex financial information in an
                  accessible way, with a focus on mobile responsiveness to accommodate users on all devices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">The Results</h2>
                <p className="text-gray-600">
                  The new UI design was implemented across Goose Valley's digital platform, resulting in a 40% increase
                  in user engagement and a 25% reduction in the average time startups spent completing their funding
                  applications. Investors reported higher satisfaction with the platform's usability and information
                  presentation.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Client</h3>
                <p className="text-gray-600">Goose Valley Venture Capital</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Services</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>UI Design</li>
                  <li>User Experience</li>
                  <li>Information Architecture</li>
                  <li>Data Visualization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Year</h3>
                <p className="text-gray-600">2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
