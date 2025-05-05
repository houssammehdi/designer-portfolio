import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hassanfakhreddine.com"
  const currentDate = new Date()

  // Define all project slugs
  const projectSlugs = [
    "fount-energy",
    "momentum-trading",
    "mimou-bikini",
    "cxg",
    "goose-valley",
    "lovebox-booklet",
    "jupiter",
    "silverstein-cakes",
    "pineland",
    "all-star-apparel",
    "amaken",
    "gitar-undervisning",
    "techrivo",
    "sheriff-dickles",
    "twoaeon",
  ]

  // Define all category pages
  const categoryPages = [
    "ui-ux",
    "brand-identity",
    "logo-design",
    "page-layout",
    "social-media",
    "clients",
    "photography",
  ]

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/photography`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Project pages
  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/project/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Category pages
  const categories = categoryPages.map((category) => ({
    url: `${baseUrl}/projects/${category}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...mainPages, ...projectPages, ...categories]
}
