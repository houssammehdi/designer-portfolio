"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <footer className="py-6 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hassan Fakhreddine. All rights reserved.
          </div>
          <nav className="flex gap-6">
            {isHomePage ? (
              <>
                <a href="#work" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Work
                </a>
                <a href="#services" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Services
                </a>
                <a href="#about" className="text-sm text-gray-500 hover:text-black transition-colors">
                  About
                </a>
                <a href="#contact" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link href="/#work" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Work
                </Link>
                <Link href="/#services" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-sm text-gray-500 hover:text-black transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Contact
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </footer>
  )
}
