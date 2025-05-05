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
  metadataBase: new URL("https://hassanfakhreddine.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hassan Fakhreddine | Visual Designer",
    description:
      "Visual Designer creating impactful digital experiences with expertise in UI/UX, brand identity, and graphic design.",
    type: "website",
    locale: "en_US",
    url: "https://hassanfakhreddine.com",
    siteName: "Hassan Fakhreddine Portfolio",
    images: [
      {
        url: "/images/hassan-illustration.jpeg",
        width: 1200,
        height: 630,
        alt: "Hassan Fakhreddine - Visual Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Fakhreddine | Visual Designer",
    description:
      "Visual Designer creating impactful digital experiences with expertise in UI/UX, brand identity, and graphic design.",
    images: ["/images/hassan-illustration.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="HF" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://hassanfakhreddine.com" />
      </head>
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
