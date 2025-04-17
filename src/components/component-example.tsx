"use client"

import * as React from "react"

import { ButtonDemo } from "@/components/examples/button-demo"
import { ButtonVariants } from "@/components/examples/button-variants"
import { ComponentPreview } from "@/components/component-preview"

const components = {
  "button-demo": {
    component: ButtonDemo,
    code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}`,
  },
  "button-variants": {
    component: ButtonVariants,
    code: `import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`,
  },
}

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

export function ComponentExample({ name, ...props }: ComponentExampleProps) {
  const Component = components[name]?.component

  if (!Component) {
    return (
      <div className="flex h-20 w-full items-center justify-center rounded-md border border-dashed p-4">
        <p className="text-sm text-muted-foreground">
          Component {name} not found in registry
        </p>
      </div>
    )
  }

  return (
    <ComponentPreview
      name={name}
      code={components[name]?.code}
      {...props}
    >
      <Component />
    </ComponentPreview>
  )
}
