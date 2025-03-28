"use server"

import { registryItemSchema } from "shadcn/registry"
import { z } from "zod"

import { Style } from "@/registry/registry-styles"

export async function getAllTemplateIds(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:template",
    "registry:internal",
  ],
  categories: string[] = [],
  style: Style["name"] = "new-york"
): Promise<string[]> {
  const { Index } = await import("@/__registry__")
  const index = z.record(registryItemSchema).parse(Index[style])

  return Object.values(index)
    .filter(
      (template) =>
        types.includes(template.type) &&
        (categories.length === 0 ||
          template.categories?.some((category: string) =>
            categories.includes(category)
          )) &&
        !template.name.startsWith("chart-")
    )
    .map((template) => template.name)
}
