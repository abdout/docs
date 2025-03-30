import React from "react"

import { Hero } from "./components/hero"

export default function HeroPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <Hero />
    </div>
  )
}
