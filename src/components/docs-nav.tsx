"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { cn } from "@/lib/utils"
import { SidebarNavItem } from "@/config/docs"

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNavItems({ items }: DocsSidebarNavItemsProps) {
  const pathname = usePathname()

  return items?.length ? (
    <div className="relative grid grid-flow-row auto-rows-max text-sm">
      <div className="absolute left-4 h-full w-[1px] bg-border" />
      <div className="relative ml-8">
        {items.map((item: SidebarNavItem, index: number) =>
          item.href ? (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex w-full items-center rounded-md p-1.5  hover:bg-accent",
                {
                  "bg-accent": pathname === item.href,
                }
              )}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >
              {item.title}
              {item.label && (
                <span className="ml-auto rounded-md bg-red-500 px-1.5 py-0.5 text-xs text-primary-foreground">
                  {item.label}
                </span>
              )}
            </Link>
          ) : (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
            >
              {item.title}
              {item.label && (
                <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-xs">
                  {item.label}
                </span>
              )}
            </span>
          )
        )}
      </div>
    </div>
  ) : null
}

export function DocsNav({ config }: { config: { sidebarNav: SidebarNavItem[] } }) {
  return (
    <div className="w-full">
      {config.sidebarNav?.map((item, index) => (
        <div key={index} className="pb-4">
          <Collapsible defaultOpen className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
            <CollapsibleTrigger asChild>
              <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-accent">
                <ChevronRight className="h-4 w-4 transition-transform" />
                {item.title}
                {item.label && (
                  <span className="ml-auto rounded-md bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                    {item.label}
                  </span>
                )}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {item.items && <DocsSidebarNavItems items={item.items} />}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  )
}
