import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl font-bold tracking-tighter mb-4">Services</h1>
          <p className="text-gray-500 text-lg">
            I offer comprehensive design solutions tailored to elevate your brand and digital presence. Each service is
            customized to meet your specific needs and goals.
          </p>
        </div>

        <Tabs defaultValue="ui-ux" className="mb-16">
          <TabsList className="mb-8">
            <TabsTrigger value="ui-ux">UI/UX Design</TabsTrigger>
            <TabsTrigger value="brand">Brand Identity</TabsTrigger>
            <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
            <TabsTrigger value="content">Content Creation</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
          </TabsList>
          <TabsContent value="ui-ux" className="space-y-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
                <p className="text-gray-600 mb-6">
                  Creating intuitive, engaging user interfaces and experiences for web and mobile applications that
                  delight users and achieve business goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>User Research & Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Responsive Web Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Mobile App Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Design Systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Usability Testing</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=800&width=800" alt="UI/UX Design" fill className="object-cover" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Discovery</h3>
                    <p className="text-gray-500 text-sm">
                      Understanding your business, users, and goals through research and analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Design</h3>
                    <p className="text-gray-500 text-sm">
                      Creating wireframes, prototypes, and high-fidelity designs based on research insights.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Delivery</h3>
                    <p className="text-gray-500 text-sm">
                      Finalizing designs, creating documentation, and supporting implementation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="brand" className="space-y-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Brand Identity</h2>
                <p className="text-gray-600 mb-6">
                  Developing cohesive visual identities that communicate your brand's values and vision, creating a
                  memorable impression on your audience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Logo Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Brand Guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Visual Identity Systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Brand Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Brand Collateral</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Rebranding</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=800&width=800" alt="Brand Identity" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="graphic" className="space-y-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Graphic Design</h2>
                <p className="text-gray-600 mb-6">
                  Crafting visually compelling designs for print and digital media that capture attention and
                  effectively communicate your message.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Print Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Digital Graphics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Marketing Materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Packaging Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Publication Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Illustration</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=800&width=800" alt="Graphic Design" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="content" className="space-y-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Content Creation</h2>
                <p className="text-gray-600 mb-6">
                  Producing engaging visual content for social media, marketing, and advertising campaigns that
                  resonates with your target audience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Social Media Graphics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Digital Advertising</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Email Marketing Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Infographics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Content Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Campaign Design</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Content Creation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="photography" className="space-y-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Photography</h2>
                <p className="text-gray-600 mb-6">
                  Professional photography services that capture the essence of your brand, products, and events with a
                  creative and artistic approach.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Product Photography</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Brand Photography</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Event Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Lifestyle Photography</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Photo Editing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Art Direction</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mt-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how I can help bring your vision to life with tailored design solutions that meet your
                specific needs and goals.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/images/fount.png" alt="Fount Energy Project" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/momentum-trading.png"
                  alt="Momentum Trading Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/images/mimou.png" alt="Mimou Bikini Project" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/images/cxg.png" alt="CXG Project" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
