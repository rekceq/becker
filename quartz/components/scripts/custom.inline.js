// document.addEventListener("themechange", (e) => {
//     const currentTheme = e.detail.theme; // either "light" or "dark"
//     const imgElement = document.getElementById("kakuji_logo_dark.png");

//     if (currentTheme === "dark") {
//         imgElement.src = "https://github.com/rekceq/becker/blob/v5/content/file_pile/img/kakuji_logo_dark.png?raw=true";
//     } else {
//         imgElement.src = "https://github.com/rekceq/becker/blob/v5/content/file_pile/img/kakuji_logo_light.png?raw=true";
//     }
// });

document.addEventListener('nav', (e) => {
  // Check if the current page is a canvas or contains the canvas container
  if (window.location.pathname.includes('canvas') || document.querySelector('.canvas-container')) {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }
});