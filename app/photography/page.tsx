import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Photography Portfolio | Hassan Fakhreddine",
  description: "Explore my photography portfolio showcasing fashion, product, and lifestyle photography.",
}

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects/photography">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Photography Projects
          </Link>
        </Button>

        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl font-bold tracking-tighter mb-4">Photography Portfolio</h1>
          <p className="text-gray-500 text-lg">
            A collection of my photography work showcasing fashion, product, and lifestyle photography for various
            clients and projects.
          </p>
        </div>

        <Tabs defaultValue="fashion" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
          </TabsList>

          <TabsContent value="fashion" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/photography/bikini-yellow-1.jpeg"
                    alt="Fashion Photography - Yellow Bikini"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/photography/bikini-hearts-2.jpeg"
                    alt="Fashion Photography - Hearts Bikini"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/photography/bikini-pink-1.jpeg"
                    alt="Fashion Photography - Pink Bikini"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/photography/bikini-striped-1.jpeg"
                    alt="Fashion Photography - Striped Bikini"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/photography/bikini-red-1.jpeg"
                    alt="Fashion Photography - Red Bikini"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/photography/bikini-hearts-1.jpeg"
                    alt="Fashion Photography - Hearts Bikini Pose"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/photography/bikini-white-1.jpeg"
                  alt="Fashion Photography - White Bikini"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/photography/bikini-pink-2.jpeg"
                  alt="Fashion Photography - Pink Bikini Pose"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Mimou Bikini Campaign</h2>
              <p className="text-gray-600 mb-4">
                A fashion photography campaign for Mimou Bikini, showcasing their handcrafted crochet swimwear
                collection. The shoot focused on highlighting the intricate details, vibrant colors, and unique designs
                of the brand's signature pieces.
              </p>
              <p className="text-gray-600">
                The minimalist studio setting with clean backgrounds was chosen to emphasize the craftsmanship of the
                products while allowing the colors and textures to stand out. Lighting techniques were carefully
                selected to enhance the natural beauty of the models and the products.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="product" className="space-y-8">
            <div className="text-center py-16">
              <p className="text-gray-500">Product photography projects coming soon.</p>
            </div>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-8">
            <div className="text-center py-16">
              <p className="text-gray-500">Lifestyle photography projects coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-black text-white p-8 md:p-12 rounded-xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Photography Services</h2>
              <p className="text-gray-300 mb-6">
                Professional photography services tailored to your specific needs, whether it's fashion, product,
                lifestyle, or event photography.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Fashion & Editorial Photography</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Product & E-commerce Photography</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Lifestyle & Brand Photography</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Event & Campaign Photography</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/photography/bikini-yellow-1.jpeg"
                alt="Fashion Photography"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
