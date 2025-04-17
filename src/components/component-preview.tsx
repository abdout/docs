"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "@/components/copy-button"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  align?: "center" | "start" | "end"
  code?: string
}

export function ComponentPreview({
  children,
  className,
  name,
  align = "center",
  code,
  ...props
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview")

  return (
    <div className={cn("group relative my-4 flex flex-col space-y-2", className)} {...props}>
      <Tabs 
        defaultValue="preview" 
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "preview" | "code")}
        className="relative mr-auto w-full"
      >
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className={cn(
                "relative h-9 rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              )}
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className={cn(
                "relative h-9 rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              )}
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div
            className={cn(
              "preview flex min-h-[350px] w-full justify-center p-10",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute right-4 top-4 flex space-x-1">
                <CopyButton 
                  value={code || "// Example code here"} 
                  className="h-7 w-7 rounded-md p-0" 
                />
              </div>
              <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 text-sm">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                  {code || "// Example code here"}
                </code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
