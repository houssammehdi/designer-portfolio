"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface MobileMenuProps {
  isHomePage: boolean
}

export function MobileMenu({ isHomePage }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

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
          {isHomePage ? (
            <>
              <a
                href="#work"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                Work
              </a>
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
                href="/#work"
                className="text-lg font-medium py-2 hover:text-black/70 transition-colors"
                onClick={handleLinkClick}
              >
                Work
              </Link>
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
