import { getAllTemplateIds } from "@/lib/templates"
import { TemplateDisplay } from "@/components/template-display"
import { registryCategories } from "@/registry/registry-categories"

export const dynamicParams = false

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }))
}

export default async function templatesPage({
  params,
}: {
  params: { categories?: string[] }
}) {
  const templates = await getAllTemplateIds(
    ["registry:template"],
    params.categories ?? []
  )

  return templates.map((name) => (
    <div
      key={name}
      className="border-grid container border-b py-8 first:pt-6 last:border-b-0 md:py-12"
    >
      <TemplateDisplay name={name} />
    </div>
  ))
}
