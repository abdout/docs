import Link from "next/link"

// Define our vibes data structure
const vibes = [
  {
    id: "rules",
    title: "Rules",
    description: "AI coding rules and patterns for quick wins.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="h-10 w-10 fill-current">
        <path fill="none" d="M9 16h14v2H9zm0-6h14v2H9z"/>
        <path fill="currentColor" d="M26 2H6a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L16 30l6.176-3.293A10.98 10.98 0 0 0 28 17V4a2 2 0 0 0-2-2m-3 16H9v-2h14Zm0-6H9v-2h14Z"/>
      </svg>
    ),
  },
  {
    id: "prompts",
    title: "Prompts",
    description: "Ready-to-use prompts for AI pair programming.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-12 w-12 fill-current">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m5 7l5 5l-5 5m8 0h6"/>
      </svg>
    ),
  },
  {
    id: "tweets",
    title: "Tweets",
    description: "Latest vibe coding updates from Twitter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-11 w-11">
        <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/>
      </svg>
    ),
  },
  {
    id: "mcp",
    title: "MCP",
    description: "Model Context Protocol for AI coding.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="h-12 w-12"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="4"
          d="M111.5 21L121.5 23L133 31.5Q139.6 39.2 139 53Q157.1 52.6 165 63.5Q171.4 70.6 171 84.5Q169.3 93.8 164 99.5L104 160.5L118 175.5L118 178.5L115.5 182L110.5 182L96 167.5Q92.8 164.2 94 156.5L96 152.5L158 90.5L161 80.5L158 71.5L152.5 66L142.5 63L133.5 66L82.5 117L78.5 118L75 115.5L74 111.5L126 58.5L129 48.5L126 39.5L120.5 34Q115.8 30.7 106.5 32L99.5 36L34.5 101L31.5 102L28 99.5L27 94.5L94.5 27L101.5 23L111.5 21Z"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="4"
          d="M109.5 44Q115 43 116 46.5L116 51.5L66 101.5Q62.1 105.6 63 114.5Q64.9 122.1 70.5 126Q74.6 129.9 83.5 129L90.5 126L140.5 76L145.5 76Q149 77 148 82.5L95.5 135Q88.6 140.6 74.5 139Q64.9 136.1 59 129.5L53 117.5L53 106.5L57 96.5L109.5 44Z"
        />
      </svg>
    ),
  },
  {
    id: "cursor",
    title: "Cursor",
    description: "AI pair programming with Cursor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="h-12 w-12"
      >
        <path
          fill="currentColor"
          fillOpacity="0.3"
          d="M3.75 9v14h24.5V9L16 2"
        />
        <path
          fill="currentColor"
          fillOpacity="0.6"
          d="M16 16V2L3.75 9l24.5 14L16 30L3.75 23"
        />
        <path
          fill="currentColor"
          fillOpacity="0.9"
          d="M28.25 9H16v21"
        />
        <path
          fill="currentColor"
          d="M3.75 9h24.5L16 16"
        />
      </svg>
    ),
  },
  {
    id: "extensions",
    title: "Extensions",
    description: "VSCode extensions for vibe coding.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="h-12 w-12"
      >
        <path
          fill="currentColor"
          d="M8.954 20H5q-.421 0-.71-.29Q4 19.422 4 19v-3.954q.854-.25 1.427-.945T6 12.5t-.573-1.601T4 9.954V6q0-.421.29-.71Q4.579 5 5 5h4q.27-.858.946-1.371q.677-.514 1.554-.514t1.554.514T14 5h4q.421 0 .71.29q.29.289.29.71v4q.858.27 1.371.946q.514.677.514 1.554t-.514 1.554T19 15v4q0 .421-.29.71q-.289.29-.71.29h-3.954q-.269-.904-.97-1.452T11.5 18t-1.576.548T8.954 20"
        />
      </svg>
    ),
  },
]

export default function VibesPage() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {vibes.map((vibe) => (
        <Link
          key={vibe.id}
          href={`https://block.databayt.org/${vibe.id}`}
          className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:border-primary"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            {/* <div className="w-fit  p-2"> */}
            {vibe.icon}
            {/* </div> */}
            <div className="space-y-2">
              <h3 className="font-bold transition-colors group-hover:text-primary">
                {vibe.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {vibe.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
