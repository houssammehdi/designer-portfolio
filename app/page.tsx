import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { VideoHero } from "@/components/video-hero"
import { ProjectCarousel } from "@/components/project-carousel"
import { generatePortfolioPersonSchema, generateLocalBusinessSchema } from "@/components/structured-data"

export default function Home() {
  // Define projects for the carousel
  const featuredProjects = [
    {
      title: "Fount Energy",
      category: "Brand Identity + UI/UX Design",
      imageUrl: "/images/fount.png",
      link: "/project/fount-energy",
      isInternal: true,
    },
    {
      title: "Momentum Trading",
      category: "UI/UX Design",
      imageUrl: "/images/momentum-trading.png",
      link: "/project/momentum-trading",
      isInternal: true,
    },
    {
      title: "Mimou Bikini",
      category: "Brand Identity + Photography",
      imageUrl: "/images/mimou.png",
      link: "/project/mimou-bikini",
      isInternal: true,
    },
    {
      title: "CXG",
      category: "Freelance Graphic Design",
      imageUrl: "/images/cxg.png",
      link: "/project/cxg",
      isInternal: true,
    },
    {
      title: "Goose Valley VC",
      category: "UI Design",
      imageUrl: "/images/goose-valley-logo.jpeg",
      link: "/project/goose-valley",
      isInternal: true,
    },
    {
      title: "Lovebox Booklet",
      category: "Page Layout Design",
      imageUrl: "/images/lovebox-2.jpg",
      link: "/project/lovebox-booklet",
      isInternal: true,
    },
    {
      title: "Jupiter",
      category: "Logo Design",
      imageUrl: "/images/jupiter-logo.jpeg",
      link: "/project/jupiter",
      isInternal: true,
    },
    {
      title: "Silverstein Cakes",
      category: "Logo Design",
      imageUrl: "/images/silverstein-cakes-logo.jpeg",
      link: "/project/silverstein-cakes",
      isInternal: true,
    },
    {
      title: "PineLand",
      category: "Logo Design",
      imageUrl: "/images/pineland-logo.jpeg",
      link: "/project/pineland",
      isInternal: true,
    },
  ]

  const personSchema = generatePortfolioPersonSchema()
  const businessSchema = generateLocalBusinessSchema()

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Visual Designer Creating Impactful Digital Experiences
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Multidisciplinary designer specializing in UI/UX, brand identity, and graphic design with
                  international experience across industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <a href="#work">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#contact">Get in Touch</a>
                  </Button>
                </div>
              </div>
              <VideoHero />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="work" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Selected Work</h2>
                <p className="text-gray-500 max-w-[600px]">
                  A collection of projects showcasing my expertise in UI/UX design, brand identity, and graphic design.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" asChild>
                  <Link href="/projects">View All Projects</Link>
                </Button>
              </div>
            </div>

            <ProjectCarousel projects={featuredProjects} />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Services</h2>
            <p className="text-gray-500 max-w-[600px] mb-12">
              Comprehensive design solutions tailored to elevate your brand and digital presence.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <ServiceCard
                title="UI/UX Design"
                description="Creating intuitive, engaging user interfaces and experiences for web and mobile applications."
                icon="layout"
              />
              <ServiceCard
                title="Brand Identity"
                description="Developing cohesive visual identities that communicate your brand's values and vision."
                icon="palette"
              />
              <ServiceCard
                title="Graphic Design"
                description="Crafting visually compelling designs for print and digital media that capture attention."
                icon="pen-tool"
              />
              <ServiceCard
                title="Content Creation"
                description="Producing engaging visual content for social media, marketing, and advertising campaigns."
                icon="image"
              />
              <ServiceCard
                title="Photography"
                description="Professional photography services that capture the essence of your brand and products."
                icon="camera"
              />
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="lg">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/hassan-illustration.jpeg"
                  alt="Hassan Fakhreddine - Visual Designer Portrait Illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
                <p className="text-gray-500">
                  I'm Hassan Fakhreddine, a multidisciplinary Visual and Graphics Designer with international experience
                  across various industries. My passion lies in creating meaningful visual experiences that solve
                  problems and delight users.
                </p>
                <p className="text-gray-500">
                  With expertise in UI/UX Design, Brand Identity, Graphic Design, and Content Creation, I've had the
                  privilege of working with startups, established businesses, and creative agencies to bring their
                  visions to life.
                </p>
                <p className="text-gray-500">
                  My approach combines strategic thinking with creative execution, ensuring that every design not only
                  looks beautiful but also serves its intended purpose effectively.
                </p>
                <div className="pt-4">
                  <Button variant="outline" asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Let's Work Together</h2>
                <p className="text-gray-400 max-w-[500px]">
                  Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:Hassanfakhreddine.hf@gmail.com" className="hover:underline">
                      Hassanfakhreddine.hf@gmail.com
                    </a>
                  </div>
                  <SocialLinks />
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
