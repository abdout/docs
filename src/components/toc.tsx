// @ts-nocheck
"use client"

import * as React from "react"

import { TableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"

interface TocProps {
  toc: TableOfContents
  className?: string
}

export function DashboardTableOfContents({ toc, className }: TocProps) {
  const mounted = useMounted()
  const [activeItem, setActiveItem] = React.useState<string>("")
  
  React.useEffect(() => {
    if (!mounted) return
    
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2, h3, h4")
      const scrollY = window.scrollY
      
      const activeHeading = Array.from(headings)
        .map((heading) => ({
          id: heading.id,
          offsetTop: heading.getBoundingClientRect().top + scrollY,
        }))
        .filter(({ offsetTop }) => offsetTop < scrollY + 100)
        .pop()
        
      setActiveItem(activeHeading?.id || "")
    }
    
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])
  
  if (!toc?.items?.length) {
    return null
  }
  
  return (
    <div className={cn("space-y-2", className)}>
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeItem} />
    </div>
  )
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.items?.length ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                item.url === `#${activeItem}`
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={{ items: item.items }} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
