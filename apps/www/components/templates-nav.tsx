"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"
import { registryCategories } from "@/registry/registry-categories"

export function TemplatesNav() {
  const pathname = usePathname()

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center">
          <TemplatesNavLink
            category={{ name: "Featured", slug: "", hidden: false }}
            isActive={pathname === "/templates"}
          />
          {registryCategories.map((category) => (
            <TemplatesNavLink
              key={category.slug}
              category={category}
              isActive={pathname === `/templates/${category.slug}`}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

function TemplatesNavLink({
  category,
  isActive,
}: {
  category: (typeof registryCategories)[number]
  isActive: boolean
}) {
  if (category.hidden) {
    return null
  }

  return (
    <Link
      href={`/templates/${category.slug}`}
      key={category.slug}
      className="flex h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
      data-active={isActive}
    >
      {category.name}
    </Link>
  )
}
