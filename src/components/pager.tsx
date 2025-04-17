// @ts-nocheck
import Link from "next/link"
import { Doc } from "contentlayer/generated"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { NavItem, NavItemWithChildren } from "types/nav"

import { docsConfig } from "@/config/docs"
import { Button } from "@/registry/new-york/ui/button"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DocsPagerProps {
  doc: Doc
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev ? (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "outline" }), "gap-1")}
        >
          <ChevronLeft className="h-4 w-4" />
          {pager.prev.title}
        </Link>
      ) : (
        <div />
      )}
      {pager?.next ? (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "gap-1")}
        >
          {pager.next.title}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

export function getPagerForDoc(doc: Doc) {
  const nav = doc.slug.startsWith("/docs/charts")
    ? docsConfig.chartsNav
    : docsConfig.sidebarNav
  const flattenedLinks = [null, ...flatten(nav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}
