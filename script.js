
const guideName = "Justine's Travel Guide";
const currentYear = new Date().getFullYear();

let placeCount = 0;

// Find the elements on the page
const guideTitle = document.getElementById("guide-name");
const copyright = document.getElementById("copyright");
const placeCountDisplay = document.getElementById("place-count");

// Display the guide name
if (guideTitle) {
    guideTitle.textContent = guideName;
}

// Count the place cards on the page
placeCount = document.querySelectorAll(".place-card").length;

// Display the calculated count
if (placeCountDisplay) {
    placeCountDisplay.textContent = placeCount;
}

// Display a dynamic copyright line
if (copyright) {
    copyright.textContent = `© ${currentYear} ${guideName}`;
}

// Three labelled console messages
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Places reviewed:", placeCount);
