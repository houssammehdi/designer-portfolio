export function generatePortfolioPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hassan Fakhreddine",
    url: "https://hassanfakhreddine.com",
    image: "https://hassanfakhreddine.com/images/hassan-illustration.jpeg",
    jobTitle: "Visual Designer",
    description:
      "Visual Designer creating impactful digital experiences with expertise in UI/UX, brand identity, and graphic design.",
    sameAs: [
      "https://www.linkedin.com/in/hassan-fakhreddine-8794b4193/",
      // Add other social profiles when available
    ],
    knowsAbout: ["UI/UX Design", "Brand Identity", "Graphic Design", "Logo Design", "Content Creation", "Photography"],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  }
}

export function generateProjectSchema(project: any) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: {
      "@type": "Person",
      name: "Hassan Fakhreddine",
    },
    description: project.description,
    image: `https://hassanfakhreddine.com${project.imageUrl}`,
    dateCreated: project.year,
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://hassanfakhreddine.com${item.url}`,
    })),
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hassan Fakhreddine Design",
    description: "Professional visual design services including UI/UX design, brand identity, and graphic design.",
    url: "https://hassanfakhreddine.com",
    telephone: "", // Add when available
    email: "Hassanfakhreddine.hf@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Lebanon",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "", // Add when available
      longitude: "", // Add when available
    },
    priceRange: "$$$",
    openingHours: "Mo-Fr 09:00-18:00",
    image: "https://hassanfakhreddine.com/images/hassan-illustration.jpeg",
    sameAs: [
      "https://www.linkedin.com/in/hassan-fakhreddine-8794b4193/",
      // Add other social profiles when available
    ],
  }
}
