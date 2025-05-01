"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function WorkDropdown() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium hover:text-black/70 transition-colors bg-transparent">
            Work
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/projects/ui-ux" title="UI/UX">
                User interface and experience design projects
              </ListItem>
              <ListItem href="/projects/brand-identity" title="Brand Identity">
                Complete brand identity systems and guidelines
              </ListItem>
              <ListItem href="/projects/logo-design" title="Logo Design">
                Custom logo design and visual identity
              </ListItem>
              <ListItem href="/projects/page-layout" title="Page Layout Design">
                Book, magazine, and publication design
              </ListItem>
              <ListItem href="/projects/clients" title="Clients">
                Client projects and collaborations
              </ListItem>
              <ListItem href="/projects/photography" title="Photography">
                Professional photography projects
              </ListItem>
              <ListItem href="/projects" title="View All">
                Browse the complete portfolio
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
