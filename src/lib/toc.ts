// @ts-nocheck
// TODO: I'll fix this later.

import { toc } from "mdast-util-toc"
import { remark } from "remark"
import { visit } from "unist-util-visit"

const textTypes = ["text", "emphasis", "strong", "inlineCode"]

function flattenNode(node) {
  const p = []
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return
    p.push(node.value)
  })
  return p.join(``)
}

interface TableOfContentsItem {
  title: string
  url: string
  items?: TableOfContentsItem[]
}

interface TableOfContents {
  items: TableOfContentsItem[]
}

function getItems(node, current): TableOfContents {
  if (!node) {
    return { items: [] }
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.items = current.items || []
        current.items.push({
          title: flattenNode(node),
          url: item.url,
          items: item.children.find(child => child.type === "link")?.children.map(child => ({
            title: child.value,
            url: child.url,
            items: child.data?.items || []
          })) || []
        })
      }

      if (item.type === "text") {
        current.items = current.items || []
        current.items.push({
          title: flattenNode(node),
          url: "",
          items: []
        })
      }
    })

    return current
  }

  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, { items: [] }))

    return current
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {})

    if (node.children.length > 1) {
      getItems(node.children[1], heading)
    }

    return heading
  }

  return { items: [] }
}

const getToc = () => (node, file) => {
  const table = toc(node)
  const items = getItems(table.map, { items: [] })

  file.data.toc = items
}

export async function getTableOfContents(
  content: string
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content)

  return result.data.toc
}
