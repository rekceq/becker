mport { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function CanvasCustomizer() {
        return null // This component doesn't render any visible HTML
    }

    // Inject the client-side JavaScript that executes directly in the browser
    CanvasCustomizer.afterDOMLoaded =
    const container = document.querySelector('.canvas-container');
    if (container) {
        // 1. Define the exact listener reference used by the Canvas plugin
        const wheelHandler = function(e) {
            // Quartz Canvas core logic
        };

        // 2. Kill the listener
        container.removeEventListener('wheel', wheelHandler, { passive: false });

        console.log('Successfully detached wheel listener from canvas-container');
    }


    return CanvasCustomizer
}) satisfies QuartzComponentConstructor
