document.addEventListener("themechange", (e) => {
    const currentTheme = e.detail.theme; // either "light" or "dark"
    const imgElement = document.getElementById("kakuji_logo_dark.png");

    if (currentTheme === "dark") {
        imgElement.src = "https://github.com/rekceq/becker/blob/v5/content/file_pile/img/kakuji_logo_dark.png?raw=true";
    } else {
        imgElement.src = "https://github.com/rekceq/becker/blob/v5/content/file_pile/img/kakuji_logo_light.png?raw=true";
    }
});

const canvas = document.getElementById('myCanvas');

// Disable scrolling via mouse wheel
canvas.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

// Disable scrolling via touch gestures (Mobile)
canvas.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });