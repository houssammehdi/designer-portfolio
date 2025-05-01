import type React from "react"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

export function SocialLinks({ variant = "default" }: { variant?: "default" | "footer" }) {
  const isDefault = variant === "default"

  return (
    <div className="flex gap-4">
      <SocialLink
        href="https://www.linkedin.com/in/hassan-fakhreddine-8794b4193/"
        aria-label="LinkedIn"
        isDefault={isDefault}
      >
        <Linkedin className={isDefault ? "h-5 w-5 text-white" : "h-4 w-4 text-gray-600"} />
      </SocialLink>
    </div>
  )
}

// Component for the social link to control styling
function SocialLink({
  href,
  children,
  "aria-label": ariaLabel,
  isDefault,
}: {
  href: string
  children: React.ReactNode
  "aria-label": string
  isDefault: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex items-center justify-center rounded-full",
        isDefault ? "w-10 h-10 border border-white/20 hover:bg-white/10" : "w-8 h-8 text-gray-600 hover:bg-gray-100",
      )}
    >
      {children}
      <span className="sr-only">{ariaLabel}</span>
    </a>
  )
}
