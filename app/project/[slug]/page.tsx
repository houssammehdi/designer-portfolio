import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// This would typically come from a CMS or database
const getProjectData = (slug: string) => {
  const projects = {
    "fount-energy": {
      title: "Fount Energy",
      category: "UI/UX Design",
      client: "Fount Energy",
      year: "2023",
      link: "https://www.fount.energy/",
      imageUrl: "/images/fount.png",
      description:
        "A comprehensive UI/UX design project for Fount Energy, focusing on creating an intuitive and engaging user experience for their renewable energy platform.",
      challenge:
        "Fount Energy needed a user interface that could present complex energy data in an accessible way while maintaining a modern, professional aesthetic that aligned with their brand values.",
      solution:
        "I developed a clean, intuitive interface with data visualization components that make complex information easy to understand. The design system prioritizes clarity and ease of use while incorporating subtle animations to enhance user engagement.",
      results:
        "The new interface resulted in a 40% increase in user engagement and a 25% reduction in support tickets related to navigation issues. The client reported positive feedback from both new and existing users.",
      services: ["User Research", "Wireframing", "UI Design", "Prototyping", "Design System Creation"],
      testimonial: {
        quote:
          "Hassan delivered a design that perfectly balances functionality and aesthetics. Our users love the new interface, and we've seen a significant improvement in engagement metrics.",
        author: "Sarah Johnson",
        role: "Product Manager, Fount Energy",
      },
    },
    "mt-signals": {
      title: "MtSignals",
      category: "Co-Founder + UI/UX Design",
      client: "MtSignals",
      year: "2022",
      link: "https://www.mtsignals.com/",
      imageUrl: "/images/mtsignals.png",
      description:
        "As co-founder and lead designer, I developed the complete brand identity and user interface for MtSignals, a financial technology platform.",
      challenge:
        "Creating a comprehensive brand and user experience for a new fintech platform that needed to convey trust, innovation, and accessibility to both novice and experienced users.",
      solution:
        "I developed a distinctive brand identity and designed an intuitive interface that simplifies complex financial data. The design system emphasizes clarity and user confidence through thoughtful information architecture and visual hierarchy.",
      results:
        "MtSignals successfully launched with positive user feedback, particularly regarding the platform's ease of use. The distinctive brand identity has helped establish a strong market presence in a competitive industry.",
      services: ["Brand Identity", "UI/UX Design", "Design System", "Product Strategy", "User Testing"],
      testimonial: {
        quote:
          "Hassan's design work was instrumental in our successful launch. His ability to translate complex requirements into intuitive interfaces gave us a significant competitive advantage.",
        author: "Michael Chen",
        role: "Co-Founder, MtSignals",
      },
    },
    "mimou-bikini": {
      title: "Mimou Bikini",
      category: "Brand Identity + Shopify Store",
      client: "Mimou Bikini",
      year: "2022",
      link: "https://mimoubikini.com/",
      imageUrl: "/images/mimou.png",
      description: "A complete brand identity and e-commerce design project for Mimou Bikini, a luxury swimwear brand.",
      challenge:
        "Creating a distinctive and elegant brand identity for a new swimwear line that would appeal to a luxury market while designing a seamless shopping experience on Shopify.",
      solution:
        "I developed a sophisticated brand identity with a distinctive color palette and typography that conveys luxury and elegance. The Shopify store was designed with a focus on showcasing the products beautifully while ensuring a smooth purchasing journey.",
      results:
        "The brand launch was successful with strong initial sales and positive customer feedback. The distinctive visual identity has helped Mimou Bikini stand out in a competitive market.",
      services: [
        "Brand Identity",
        "Logo Design",
        "E-commerce Design",
        "Shopify Development",
        "Product Photography Direction",
      ],
      testimonial: {
        quote:
          "Hassan created a brand identity that perfectly captures the essence of our luxury swimwear line. The Shopify store design has been instrumental in our successful launch.",
        author: "Leila Haddad",
        role: "Founder, Mimou Bikini",
      },
    },
    cxg: {
      title: "CXG",
      category: "Graphic Design Services",
      client: "CXG",
      year: "2021",
      link: "https://www.cxg.com/",
      imageUrl: "/images/cxg.png",
      description:
        "A comprehensive graphic design service package for CXG, including brand identity refinement and marketing materials.",
      challenge:
        "CXG needed to refresh their visual identity and create a cohesive set of marketing materials that would effectively communicate their services to potential clients.",
      solution:
        "I refined their existing brand elements and developed a comprehensive set of marketing materials including brochures, presentation templates, and digital assets that maintain consistency while effectively communicating their value proposition.",
      results:
        "The refreshed brand identity and new marketing materials have helped CXG present a more professional and cohesive image to clients, contributing to increased engagement and conversion rates.",
      services: [
        "Brand Refinement",
        "Print Design",
        "Digital Asset Creation",
        "Marketing Collateral",
        "Style Guide Development",
      ],
      testimonial: {
        quote:
          "Hassan's design work has transformed how we present ourselves to clients. The cohesive visual language he created has significantly improved our brand perception in the market.",
        author: "Robert Taylor",
        role: "Marketing Director, CXG",
      },
    },
    "goose-valley": {
      title: "Goose Valley VC",
      category: "UI Design",
      client: "Goose Valley Venture Capital",
      year: "2023",
      link: "https://goosevalley.vc/",
      imageUrl: "/images/goose-valley.png",
      description:
        "A UI design project for Goose Valley Venture Capital's website, focusing on creating a professional yet approachable digital presence.",
      challenge:
        "Goose Valley VC needed a website that would convey trustworthiness and expertise while being approachable to startup founders seeking investment.",
      solution:
        "I designed a clean, modern interface that balances professionalism with accessibility. The design incorporates subtle nature-inspired elements that reference the company name while maintaining a sophisticated financial services aesthetic.",
      results:
        "The new website has received positive feedback from both investors and startup founders. Goose Valley reports increased quality in their inbound investment opportunities since the launch.",
      services: ["UI Design", "Website Design", "Information Architecture", "Visual Design", "Responsive Design"],
      testimonial: {
        quote:
          "Hassan understood exactly what we needed - a website that feels professional but not intimidating. The design perfectly captures our firm's ethos and has been well-received by our network.",
        author: "Jennifer Moss",
        role: "Partner, Goose Valley VC",
      },
    },
    "book-layout": {
      title: "Book Layout Design",
      category: "Print Design",
      client: "Independent Author",
      year: "2022",
      imageUrl: "/placeholder.svg?height=600&width=800",
      description: "A comprehensive book layout design project for an independent author's non-fiction publication.",
      challenge:
        "Creating a professional, engaging layout for a complex non-fiction book with various content types including text, images, charts, and sidebars.",
      solution:
        "I developed a clean, readable layout with a consistent typographic system that enhances readability while maintaining visual interest. Special attention was given to the hierarchy of information and the integration of visual elements.",
      results:
        "The book received praise for its professional design and readability, contributing to its commercial success and positive reviews.",
      services: ["Book Layout Design", "Typography", "Cover Design", "Print Preparation", "Image Editing"],
      testimonial: {
        quote:
          "Hassan's design transformed my manuscript into a professional publication. His attention to detail and understanding of typography made the complex content accessible and engaging.",
        author: "Dr. Emily Chen",
        role: "Author",
      },
    },
    // Additional projects would be defined here
  }

  return projects[slug as keyof typeof projects] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectData(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Hassan Fakhreddine",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Hassan Fakhreddine`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container px-4 md:px-6 py-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-500 mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    )
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
                src={project.imageUrl || "/placeholder.svg?height=720&width=1280"}
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
                    src="/placeholder.svg?height=600&width=600"
                    alt={`${project.title} Detail 1`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt={`${project.title} Detail 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Results</h2>
                <p className="text-gray-600">{project.results}</p>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt={`${project.title} Result`}
                  fill
                  className="object-cover"
                />
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

                {project.link && (
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-black hover:text-gray-700 flex items-center"
                    >
                      Visit Site <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </div>
                )}

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
