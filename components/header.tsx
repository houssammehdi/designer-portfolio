"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileMenu } from "@/components/mobile-menu"
import { WorkDropdown } from "@/components/work-dropdown"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="font-bold text-xl">
          Hassan Fakhreddine
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {isHomePage ? (
            <>
              <WorkDropdown />
              <a href="#services" className="text-sm font-medium hover:text-black/70 transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm font-medium hover:text-black/70 transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-black/70 transition-colors">
                Contact
              </a>
            </>
          ) : (
            <>
              <WorkDropdown />
              <Link href="/#services" className="text-sm font-medium hover:text-black/70 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-black/70 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-black/70 transition-colors">
                Contact
              </Link>
            </>
          )}
        </nav>
        <div className="md:hidden">
          <MobileMenu isHomePage={isHomePage} />
        </div>
      </div>
    </header>
  )
}
