import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl font-bold tracking-tighter mb-4">Design Insights</h1>
          <p className="text-gray-500 text-lg">
            Thoughts, insights, and perspectives on design, creativity, and the industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-6">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Featured Blog Post"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  April 15, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />5 min read
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3">The Evolution of UI Design: Trends to Watch in 2023</h2>
              <p className="text-gray-600 mb-4">
                An exploration of the latest UI design trends that are shaping the digital landscape in 2023, from
                neumorphism to glassmorphism and beyond.
              </p>
              <Button asChild variant="outline">
                <Link href="/blog/evolution-of-ui-design">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium mb-4">Search</h3>
              <div className="flex gap-2">
                <Input placeholder="Search articles..." className="flex-1" />
                <Button type="submit" variant="outline">
                  Search
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    UI/UX Design (8)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Brand Identity (5)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Graphic Design (7)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Design Process (4)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Industry Insights (6)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium mb-4">Subscribe</h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated with the latest design insights and articles delivered to your inbox.
              </p>
              <div className="space-y-2">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src="/placeholder.svg?height=480&width=640" alt="Blog Post" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 28, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />4 min read
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">The Psychology of Color in Brand Design</h3>
              <p className="text-gray-600 text-sm mb-4">
                Understanding how color influences perception and emotion, and how to leverage this knowledge in brand
                design.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog/psychology-of-color">Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-0 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src="/placeholder.svg?height=480&width=640" alt="Blog Post" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 15, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />6 min read
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Designing for Accessibility: Best Practices</h3>
              <p className="text-gray-600 text-sm mb-4">
                How to create inclusive designs that work for everyone, including people with disabilities.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog/designing-for-accessibility">Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-0 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src="/placeholder.svg?height=480&width=640" alt="Blog Post" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  February 28, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />3 min read
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">From Concept to Completion: The Design Process</h3>
              <p className="text-gray-600 text-sm mb-4">
                A behind-the-scenes look at my design process, from initial concept to final delivery.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog/design-process">Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-0 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src="/placeholder.svg?height=480&width=640" alt="Blog Post" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  February 15, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />5 min read
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">The Art of Typography in Web Design</h3>
              <p className="text-gray-600 text-sm mb-4">
                How typography choices can make or break your web design, and tips for effective type selection.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog/typography-in-web-design">Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-0 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src="/placeholder.svg?height=480&width=640" alt="Blog Post" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  January 30, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />4 min read
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Designing for E-commerce: Conversion Optimization</h3>
              <p className="text-gray-600 text-sm mb-4">
                Design strategies that enhance user experience and drive conversions in e-commerce websites.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog/ecommerce-design">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/blog/archive">View All Articles</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
