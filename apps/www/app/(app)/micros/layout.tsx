import { Metadata } from "next"

import { Announcement } from "@/components/announcement"
import { BlocksNav } from "@/components/blocks-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"

import "@/styles/mdx.css"

export const metadata: Metadata = {
  title: "Building Blocks.",
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Micro serives for automation</PageHeaderHeading>
        <PageHeaderDescription>
          Clean, fast micro serives. Copy and paste into your apps. Works
          well with Nextjs framework. Open Source. Free forever.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#blocks">Browse Micros</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://github.com/shadcn-ui/ui/discussions/new?category=blocks-request"
              target="_blank"
            >
              Request a micro
            </a>
          </Button>
        </PageActions>
      </PageHeader>
      <div>
        auth
      </div>
    </>
  )
}
