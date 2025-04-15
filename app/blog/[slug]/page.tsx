import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a CMS or database
const getBlogData = (slug: string) => {
  const blogs = {
    "evolution-of-ui-design": {
      title: "The Evolution of UI Design: Trends to Watch in 2023",
      date: "April 15, 2023",
      readTime: "5 min read",
      author: "Hassan Fakhreddine",
      category: "UI/UX Design",
      content: `
        <p>The landscape of UI design is constantly evolving, with new trends emerging and old ones fading away. As we move through 2023, several key trends are shaping the way designers approach user interfaces.</p>
        
        <h2>The Rise of Neumorphism</h2>
        <p>Neumorphism, a design trend that combines elements of skeuomorphism and flat design, has gained significant traction. This style creates soft, extruded plastic looks with subtle shadows and highlights, giving interfaces a tactile feel while maintaining a modern aesthetic.</p>
        
        <h2>Glassmorphism Continues to Shine</h2>
        <p>Glassmorphism, characterized by frosted glass-like elements with background blur effects, continues to be popular. This trend creates depth and hierarchy while maintaining a light, airy feel that works well in both light and dark modes.</p>
        
        <h2>Micro-interactions for Enhanced Engagement</h2>
        <p>Micro-interactions—small, functional animations that provide feedback and enhance user experience—are becoming increasingly sophisticated. These subtle movements guide users through interfaces and add personality to digital products.</p>
        
        <h2>Dark Mode as a Standard</h2>
        <p>Dark mode has transitioned from a trendy feature to a standard expectation. Designers are now creating interfaces with both light and dark modes in mind from the beginning of the design process.</p>
        
        <h2>3D Elements and Depth</h2>
        <p>With advancements in browser capabilities and device processing power, 3D elements are becoming more prevalent in UI design. These elements add depth and interest to interfaces, creating more immersive experiences.</p>
        
        <h2>Conclusion</h2>
        <p>As UI design continues to evolve, the focus remains on creating interfaces that are not only visually appealing but also functional and accessible. By staying aware of these trends while prioritizing user needs, designers can create interfaces that feel both contemporary and timeless.</p>
      `,
      relatedPosts: [
        {
          title: "The Psychology of Color in Brand Design",
          slug: "psychology-of-color",
          image: "/placeholder.svg?height=480&width=640",
        },
        {
          title: "Designing for Accessibility: Best Practices",
          slug: "designing-for-accessibility",
          image: "/placeholder.svg?height=480&width=640",
        },
        {
          title: "From Concept to Completion: The Design Process",
          slug: "design-process",
          image: "/placeholder.svg?height=480&width=640",
        },
      ],
    },
    // Additional blog posts would be defined here
  }

  return blogs[slug as keyof typeof blogs] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = getBlogData(params.slug)

  if (!blog) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container px-4 md:px-6 py-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-500 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link href="/blog">View All Articles</Link>
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
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tighter mb-4">{blog.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {blog.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {blog.readTime}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {blog.author}
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />

            <Separator className="my-8" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium">{blog.author}</p>
                  <p className="text-sm text-gray-500">Visual Designer</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
            </div>

            {blog.relatedPosts && blog.relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {blog.relatedPosts.map((post, index) => (
                    <Card key={index} className="border-0 overflow-hidden shadow-sm">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-base mb-2">{post.title}</h3>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
              <h3 className="font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className={`hover:text-black ${
                      blog.category === "UI/UX Design" ? "text-black font-medium" : "text-gray-600"
                    }`}
                  >
                    UI/UX Design (8)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-black ${
                      blog.category === "Brand Identity" ? "text-black font-medium" : "text-gray-600"
                    }`}
                  >
                    Brand Identity (5)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-black ${
                      blog.category === "Graphic Design" ? "text-black font-medium" : "text-gray-600"
                    }`}
                  >
                    Graphic Design (7)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-black ${
                      blog.category === "Design Process" ? "text-black font-medium" : "text-gray-600"
                    }`}
                  >
                    Design Process (4)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-black ${
                      blog.category === "Industry Insights" ? "text-black font-medium" : "text-gray-600"
                    }`}
                  >
                    Industry Insights (6)
                  </Link>
                </li>
              </ul>

              <Separator className="my-6" />

              <h3 className="font-medium mb-4">Popular Articles</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Popular Article"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">The Psychology of Color in Brand Design</h4>
                    <p className="text-xs text-gray-500">March 28, 2023</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Popular Article"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Designing for Accessibility: Best Practices</h4>
                    <p className="text-xs text-gray-500">March 15, 2023</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Popular Article"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">From Concept to Completion: The Design Process</h4>
                    <p className="text-xs text-gray-500">February 28, 2023</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="font-medium mb-4">Subscribe to Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest design insights and articles delivered to your inbox.
                </p>
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
