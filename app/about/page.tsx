import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter mb-4">About Me</h1>
            <p className="text-gray-500 text-lg mb-8">
              I'm Hassan Fakhreddine, a multidisciplinary Visual and Graphics Designer with international experience
              across various industries.
            </p>

            <div className="space-y-6 text-gray-600">
              <p>
                With over a decade of experience in the design industry, I've had the privilege of working with
                startups, established businesses, and creative agencies to bring their visions to life. My passion lies
                in creating meaningful visual experiences that solve problems and delight users.
              </p>
              <p>
                My approach combines strategic thinking with creative execution, ensuring that every design not only
                looks beautiful but also serves its intended purpose effectively. I believe that great design is not
                just about aesthetics, but about creating solutions that work for both is not just about aesthetics, but
                about creating solutions that work for both businesses and their users.
              </p>
              <p>
                Throughout my career, I've specialized in UI/UX Design, Brand Identity, Graphic Design, and Content
                Creation, developing a versatile skill set that allows me to tackle diverse design challenges with
                confidence and creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-500">Based in Lebanon, Working Globally</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Experience</h3>
                <p className="text-gray-500">6+ Years in Design</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Education</h3>
                <p className="text-gray-500">BA in Graphic Design, AUST</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Languages</h3>
                <p className="text-gray-500">English, French & Arabic</p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">My Approach</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Research & Strategy</h3>
                    <p className="text-sm text-gray-500">
                      Understanding your business, audience, and goals to create strategic design solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Collaborative Process</h3>
                    <p className="text-sm text-gray-500">
                      Working closely with clients to ensure designs align with their vision and objectives.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Attention to Detail</h3>
                    <p className="text-sm text-gray-500">
                      Focusing on the fine details that elevate designs from good to exceptional.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Continuous Learning</h3>
                    <p className="text-sm text-gray-500">
                      Staying current with design trends and technologies to deliver cutting-edge solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/hassan-illustration.jpeg"
                alt="Hassan Fakhreddine Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Experience</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Lead Designer</h3>
                    <p className="text-sm text-gray-500">MtSignals • 2022 - Present</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Leading the design strategy and implementation for the fintech platform, overseeing all visual
                      aspects from brand identity to user interface.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Senior UI/UX Designer</h3>
                    <p className="text-sm text-gray-500">Fount Energy • 2020 - 2022</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Designed intuitive user interfaces for renewable energy platforms, focusing on data visualization
                      and user experience optimization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Freelance Graphic Designer</h3>
                    <p className="text-sm text-gray-500">CXG • 2025 - Present</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Ongoing freelance graphic design services for CXG, including social media content, animations,
                      presentations, and interactive PDFs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Bachelor of Arts - BA, Graphic Design</h3>
                    <p className="text-sm text-gray-500">American University of Science & Technology • 2015 - 2019</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">UI/UX Design Certification</h3>
                    <p className="text-sm text-gray-500">Interaction Design Foundation • 2020</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">AI for Design Certification</h3>
                    <p className="text-sm text-gray-500">Design+AI Academy • 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-500">
              I've had the pleasure of working with amazing clients who have trusted me with their design needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-gray-600">
                    "Hassan has worked with me on a number of design projects for my companies and venture funds in
                    Norway and Sweden. He has a great eye for detail and a creative flair, making him the ideal designer
                    for corporate and technology based assignments. He delivers on time and is very thorough in his
                    preparation and mindful in his communication."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Richard L Garnier</p>
                      <p className="text-sm text-gray-500">
                        Managing Partner, Capital Horizon & General Partner, GV Ventures
                      </p>
                      <a
                        href="https://www.linkedin.com/in/richard-garnier-1151723/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-gray-600">
                    "I've worked with many designers, but Hassan stands out. He combines a deep understanding of UI/UX
                    principles with a sharp sense for brand identity, which makes his work not only visually polished
                    but strategically aligned. He's professional, collaborative, and brings real clarity to complex
                    design challenges."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Houssam Mehdi</p>
                      <p className="text-sm text-gray-500">Chief Technology Officer, Fount Energy</p>
                      <a
                        href="https://www.linkedin.com/in/houssam-mehdi-831048161/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="italic text-gray-600">
                    "Working with Hassan was a game-changer for our brand. His ability to translate our vision into a
                    cohesive visual identity exceeded our expectations and helped us stand out in a competitive market."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Diana</p>
                      <p className="text-sm text-gray-500">Founder, Mimou Bikini</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">
                Work With Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
