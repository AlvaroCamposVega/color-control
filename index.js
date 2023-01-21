const STORAGE_KEY = "todayColor";
const TODAY_ELEMENT_ID = "today-color";
const COLOR_GREEN = "#63B76C";
const COLOR_BLUE = "#89CFF0";

let todayColorValue = localStorage.getItem(STORAGE_KEY);

if (!todayColorValue) {
    localStorage.setItem(STORAGE_KEY, COLOR_BLUE);
}

function setTodayColor() {
    let todayColorEle = document.getElementById(TODAY_ELEMENT_ID);
    todayColorEle.style.backgroundColor = todayColorValue;
}

function updateNewColor() {
    // Toggle the color
    let newColor = 
        (todayColorValue === COLOR_BLUE) ? COLOR_GREEN : COLOR_BLUE;
    // Make new color value visible immediately
    let colorEle = document.getElementById(TODAY_ELEMENT_ID);
    colorEle.style.backgroundColor = newColor;
    // Update the value in localstorage
    localStorage.setItem(STORAGE_KEY, newColor);
}
