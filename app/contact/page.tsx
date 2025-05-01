import Link from "next/link"
import { ArrowLeft, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { SocialLinks } from "@/components/social-links"

export default function ContactPage() {
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
          <h1 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h1>
          <p className="text-gray-500 text-lg">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you. Fill out the
            form below or reach out directly through the contact information provided.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          <div>
            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:Hassanfakhreddine.hf@gmail.com" className="text-gray-600 hover:text-black">
                        Hassanfakhreddine.hf@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-600">Based in Lebanon, Working Globally</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Me</h3>
                <SocialLinks variant="footer" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">What is your design process?</h3>
                  <p className="text-gray-600">
                    My design process typically includes discovery, research, conceptualization, design, feedback, and
                    refinement. I work collaboratively with clients throughout each stage to ensure the final product
                    meets their needs and expectations.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How long does a typical project take?</h3>
                  <p className="text-gray-600">
                    Project timelines vary depending on scope and complexity. A brand identity project might take 4-6
                    weeks, while a comprehensive website design could take 8-12 weeks. I'll provide a detailed timeline
                    during our initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Do you work with clients internationally?</h3>
                  <p className="text-gray-600">
                    Yes, I work with clients globally. With modern communication tools, distance is not a barrier to
                    successful collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-medium mb-4">Project Inquiry</h3>
              <p className="text-gray-600 mb-6">
                For faster response on project inquiries, please include the following information:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <span>Project type and scope</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <span>Timeline and budget expectations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <span>Brief description of your business/project goals</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">4</span>
                  </div>
                  <span>Any specific requirements or preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
