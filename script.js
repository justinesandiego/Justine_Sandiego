
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


/* MODULE 8.3 - MAKE YOUR GUIDE DECIDE */

// 1. Rating label
const placeRating = 4.5;
const ratingLabel = document.getElementById("rating-label");

if (placeRating >= 4) {
    ratingLabel.textContent = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel.textContent = "Worth a visit";
} else {
    ratingLabel.textContent = "Only if you're nearby";
}


// 2. Budget check
const priceLevel = 2;
const isCurrentlyOpen = true;

const isGoodOption = priceLevel <= 2 && isCurrentlyOpen;

const budgetMessage = isGoodOption
    ? "Good option right now"
    : "Maybe another time";

document.getElementById("budget-result").textContent = budgetMessage;


// 3. Distance note
const isWithinWalkingDistance = true;

const distanceMessage = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

document.getElementById("distance-result").textContent = distanceMessage;


// Console messages
console.log("Place rating:", placeRating);
console.log("Budget result:", budgetMessage);
console.log("Distance:", distanceMessage);
