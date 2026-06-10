// quartz/components/scripts/darkmode.inline.ts

function updateThemeImages() {
  const isDark = document.documentElement.getAttribute("saved-theme") === "dark"

  // Select all images with a specific class, e.g., "theme-aware-img"
  const images = document.querySelectorAll<HTMLImageElement>("img.theme-aware-img")

  images.forEach((img) => {
    // Get the base path without the -light or -dark suffix
    const baseSrc = img.dataset.baseSrc || img.src.split('-')[0]
    if (!img.dataset.baseSrc) img.dataset.baseSrc = baseSrc // Cache it

      if (isDark) {
        img.src = `${baseSrc}-dark.png`
      } else {
        img.src = `${baseSrc}-light.png`
      }
  })
}

// 1. Run on initial page load
document.addEventListener("DOMContentLoaded", updateThemeImages)

// 2. Listen for Quartz 5 custom nav events (for SPA page transitions)
document.addEventListener("nav", updateThemeImages)

// 3. Listen for theme toggles
const darkmodeSwitch = document.querySelector("#darkmode-switch")
if (darkmodeSwitch) {
  darkmodeSwitch.addEventListener("click", () => {
    // Small timeout to allow Quartz to apply the new theme attribute
    setTimeout(updateThemeImages, 50)
  })
}
