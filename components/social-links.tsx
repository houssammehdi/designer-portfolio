import { Linkedin, Instagram, Figma } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks({ variant = "default" }: { variant?: "default" | "footer" }) {
  const isDefault = variant === "default"

  return (
    <div className="flex gap-4">
      <Button
        variant={isDefault ? "outline" : "ghost"}
        size="icon"
        className={
          isDefault
            ? "rounded-full border-white/20 hover:bg-white/10"
            : "hover:bg-gray-100 rounded-full p-2 h-auto w-auto"
        }
        asChild
      >
        <a
          href="https://linkedin.com/in/hassan-fakhreddine"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className={isDefault ? "h-5 w-5" : "h-4 w-4 text-gray-600"} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button
        variant={isDefault ? "outline" : "ghost"}
        size="icon"
        className={
          isDefault
            ? "rounded-full border-white/20 hover:bg-white/10"
            : "hover:bg-gray-100 rounded-full p-2 h-auto w-auto"
        }
        asChild
      >
        <a
          href="https://instagram.com/hassan.fakhreddine"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className={isDefault ? "h-5 w-5" : "h-4 w-4 text-gray-600"} />
          <span className="sr-only">Instagram</span>
        </a>
      </Button>
      <Button
        variant={isDefault ? "outline" : "ghost"}
        size="icon"
        className={
          isDefault
            ? "rounded-full border-white/20 hover:bg-white/10"
            : "hover:bg-gray-100 rounded-full p-2 h-auto w-auto"
        }
        asChild
      >
        <a href="https://figma.com/@hassanfakhreddine" target="_blank" rel="noopener noreferrer" aria-label="Figma">
          <Figma className={isDefault ? "h-5 w-5" : "h-4 w-4 text-gray-600"} />
          <span className="sr-only">Figma</span>
        </a>
      </Button>
    </div>
  )
}
