import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hassan Fakhreddine | Visual Designer",
  description:
    "Visual Designer creating impactful digital experiences with expertise in UI/UX, brand identity, and graphic design.",
  keywords: ["visual designer", "UI/UX design", "brand identity", "graphic design", "portfolio", "Hassan Fakhreddine"],
  authors: [{ name: "Hassan Fakhreddine" }],
  openGraph: {
    title: "Hassan Fakhreddine | Visual Designer",
    description:
      "Visual Designer creating impactful digital experiences with expertise in UI/UX, brand identity, and graphic design.",
    type: "website",
    locale: "en_US",
    url: "https://hassanfakhreddine.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
