import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { SocialMediaVideo } from "@/components/social-media-video"

export const metadata: Metadata = {
  title: "Social Media Content | Hassan Fakhreddine",
  description: "Social media content creation and campaign designs for various brands and businesses.",
}

export default function SocialMediaPage() {
  const socialMediaItems = [
    {
      id: 1,
      title: "Valentine's Day Tech Gifts",
      client: "Queen Cell",
      description:
        "Promotional content for Valentine's Day tech gifts featuring smartphones, smartwatches, and earbuds.",
      imageUrl: "/images/social-media/queen-cell-valentine-gifts.jpeg",
    },
    {
      id: 2,
      title: "Valentine's Day Connection",
      client: "Queen Cell",
      description: "Social media post promoting staying connected on Valentine's Day with messaging theme.",
      imageUrl: "/images/social-media/queen-cell-stay-connected.jpeg",
    },
    {
      id: 3,
      title: "Stay Home Delivery Service",
      client: "The All Americans",
      description: "Promotional content for food delivery service with illustrated motorcycle delivery graphic.",
      imageUrl: "/images/social-media/all-americans-delivery.jpeg",
    },
    {
      id: 4,
      title: "Online Menu Access",
      client: "The All Americans",
      description: "Social media post promoting online menu access through the Coverbox platform.",
      imageUrl: "/images/social-media/all-americans-menu.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tighter mb-4">Social Media Content</h1>
        <p className="text-gray-500 max-w-[700px] mb-12">
          Creative and engaging social media content designed to capture attention and drive engagement. From
          promotional campaigns to seasonal content, these designs help brands connect with their audience effectively.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Animation</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden p-6">
            <div className="max-w-3xl mx-auto">
              <SocialMediaVideo src="https://edyyifc1a03xf4de.public.blob.vercel-storage.com/WhatsApp%20Video%202025-05-01%20at%2023.07.34_840457ab-W2FT3yMyu4raK2anwFYkMW4Yu7VawY.mp4" />
              <div className="mt-4">
                <h3 className="text-xl font-medium mb-2">Promotional Animation</h3>
                <p className="text-gray-600">
                  An engaging animated promotional video created for social media campaigns, showcasing dynamic content
                  that captures audience attention and drives engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Social Media Posts</h2>
        <div className="grid gap-8 md:gap-12">
          {socialMediaItems.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-auto">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">Client: {item.client}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
