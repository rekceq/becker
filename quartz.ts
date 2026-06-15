import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Advanced: pass callback functions that can't be expressed in YAML
ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
 
    // if (!a.isFolder && b.isFolder) {
    //   return 1
    // } else {
    //   return -1
    // }
  },
})


// ExternalPlugin.CanvasPage({
//   enableInteraction: false, // Disables all panning and zooming
//   defaultFullscreen: false,
//   initialZoom: 1,
//   minZoom: 1,               // Prevents zooming out
//   maxZoom: 1,               // Prevents zooming in
// })

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
