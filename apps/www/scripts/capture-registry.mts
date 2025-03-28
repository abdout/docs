import { existsSync, promises as fs } from "fs"
import path from "path"
import puppeteer from "puppeteer"

import { getAllTemplateIds } from "../lib/templates"

const REGISTRY_PATH = path.join(process.cwd(), "public/r")

// ----------------------------------------------------------------------------
// Capture screenshots.
// ----------------------------------------------------------------------------
async function captureScreenshots() {
  const templateIds = await getAllTemplateIds()
  const templates = templateIds.filter((template) => {
    // Check if screenshots already exist
    const lightPath = path.join(
      REGISTRY_PATH,
      `styles/new-york/${template}-light.png`
    )
    const darkPath = path.join(
      REGISTRY_PATH,
      `styles/new-york/${template}-dark.png`
    )
    return !existsSync(lightPath) || !existsSync(darkPath)
  })

  if (templates.length === 0) {
    console.log("✨ All screenshots exist, nothing to capture")
    return
  }

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  })

  for (const template of templates) {
    const pageUrl = `http://localhost:3333/view/styles/new-york/${template}`

    const page = await browser.newPage()
    await page.goto(pageUrl, {
      waitUntil: "networkidle2",
    })

    console.log(`- Capturing ${template}...`)

    for (const theme of ["light", "dark"]) {
      const screenshotPath = path.join(
        REGISTRY_PATH,
        `styles/new-york/${template}${theme === "dark" ? "-dark" : "-light"}.png`
      )

      if (existsSync(screenshotPath)) {
        continue
      }

      // Set theme and reload page
      await page.evaluate((currentTheme) => {
        localStorage.setItem("theme", currentTheme)
      }, theme)

      await page.reload({ waitUntil: "networkidle2" })

      // Wait for animations to complete
      if (template.startsWith("chart") || template.startsWith("dashboard")) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      // Hide Tailwind indicator
      await page.evaluate(() => {
        const indicator = document.querySelector("[data-tailwind-indicator]")
        if (indicator) {
          indicator.remove()
        }
      })

      await page.screenshot({
        path: screenshotPath,
      })
    }

    await page.close()
  }

  await browser.close()
}

// Main execution function
function main() {
  console.log("🔍 Capturing screenshots...")
  
  captureScreenshots()
    .then(() => {
      console.log("✅ Done!")
    })
    .catch((error: Error) => {
      console.error(error)
      process.exit(1)
    })
}

// Run the program
main()
