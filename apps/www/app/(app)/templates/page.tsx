import Link from "next/link"

import { TemplateDisplay } from "@/components/template-display"
import { Button } from "@/registry/new-york/ui/button"

const FEATURED_templates = [
  "dashboard-01",
  "sidebar-07",
  "sidebar-03",
  "login-03",
  "login-04",
]

export default async function TemplatesPage() {
  return (
    <div>
      {FEATURED_templates.map((template) => (
        <div
          key={template}
          className="border-grid container border-b py-8 first:pt-6 last:border-b-0 md:py-12"
        >
          <TemplateDisplay name={template} />
        </div>
      ))}
      <div className="container-wrapper">
        <div className="container flex justify-center py-6">
          <Button asChild variant="outline">
            <Link href="/templates/sidebar">Browse all templates</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
