"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Replace the entire component with this updated version
export function MobileMenu({ isHomePage }: { isHomePage: boolean }) {
  const [open, setOpen] = useState(false)
  const [workExpanded, setWorkExpanded] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  const toggleWorkExpanded = () => {
    setWorkExpanded(!workExpanded)
  }

  // Update the workCategories array to ensure consistency
  const workCategories = [
    { name: "UI/UX", path: "/projects/ui-ux" },
    { name: "Brand Identity", path: "/projects/brand-identity" },
    { name: "Logo Design", path: "/projects/logo-design" },
    { name: "Page Layout Design", path: "/projects/page-layout" },
    { name: "Clients", path: "/projects/clients" },
    { name: "Photography", path: "/projects/photography" },
    { name: "View All", path: "/projects" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left">Hassan Fakhreddine</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          <div>
            <button
              onClick={toggleWorkExpanded}
              className="flex items-center justify-between w-full text-lg font-medium py-2 hover:text-black/70 transition-colors"
            >
              Work
              {workExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>

            {workExpanded && (
              <div className="pl-4 mt-2 space-y-2">
                {workCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.path}
                    className="block text-base py-1 hover:text-black/70 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isHomePage ? (
            <>
              <a
                href="#services"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                href="/#services"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
