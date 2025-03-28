"use client"

import * as React from "react"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Project = {
  templates: string[]
}

const projectAtom = atomWithStorage<Project>("project", {
  templates: [],
})

export function useProject() {
  const [isAdded, setIsAdded] = React.useState(false)
  const [project, setProject] = useAtom(projectAtom)

  const addTemplate = React.useCallback((template: string) => {
    setProject((prev) => {
      if (prev.templates.includes(template)) {
        return prev
      }
      return { ...prev, templates: [...prev.templates, template] }
    })
    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }, [])

  const removeTemplate = React.useCallback((template: string) => {
    setProject((prev) => ({
      ...prev,
      templates: prev.templates.filter((t) => t !== template),
    }))
  }, [])

  const hasTemplate = React.useCallback((template: string) => {
    return project.templates.includes(template)
  }, [])

  const resetProject = React.useCallback(() => {
    setProject({ templates: [] })
  }, [])

  return {
    project,
    addTemplate,
    removeTemplate,
    resetProject,
    hasTemplate,
    isAdded,
  }
}
