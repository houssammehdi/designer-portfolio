import { Layout, Palette, PenTool, ImageIcon, Smartphone, Globe, Film, MessageSquare, Camera } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "layout":
        return <Layout className="h-10 w-10" />
      case "palette":
        return <Palette className="h-10 w-10" />
      case "pen-tool":
        return <PenTool className="h-10 w-10" />
      case "image":
        return <ImageIcon className="h-10 w-10" />
      case "smartphone":
        return <Smartphone className="h-10 w-10" />
      case "globe":
        return <Globe className="h-10 w-10" />
      case "film":
        return <Film className="h-10 w-10" />
      case "message-square":
        return <MessageSquare className="h-10 w-10" />
      case "camera":
        return <Camera className="h-10 w-10" />
      default:
        return <Layout className="h-10 w-10" />
    }
  }

  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="p-6 pb-2">{getIcon()}</CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
