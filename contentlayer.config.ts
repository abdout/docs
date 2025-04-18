// @ts-nocheck
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
// Temporarily comment out remark-gfm to avoid table parsing errors
// import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

// Import directly to avoid issues with table handling
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

interface ComputedField {
  type: string;
  resolve: (doc: any) => any;
}

interface ComputedFields {
  [key: string]: ComputedField;
}

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/docs").slice(1).join("/docs"),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
    toc: {
      type: "boolean",
      default: true,
    },
    featured: {
      type: "boolean",
      default: false,
    },
    links: {
      type: "json",
    },
    component: {
      type: "string",
    },
  },
  computedFields,
}));

// Create a custom processor for GFM to safely handle tables
const customRemarkGfm = () => {
  return (tree) => {
    // Custom handling for tables could go here if needed
    return tree;
  };
};

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    // Temporarily remove remarkGfm to avoid table parsing errors
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
}); 