const newColorBtn = document.getElementById("new_color_button");
const resetColorBtn = document.getElementById("reset_color_button");

const colorDisplay = document.getElementById("color_display");
const currentColorSpan = document.getElementById("current_color");

const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

function getRandomHexValue() {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndex];

    return randomHexValue;
}

function getRandomHexString(stringLength) {
    let hexString = "";
    for (let i = 0; i < stringLength; i++) {
        hexString += getRandomHexValue();
    }

    return hexString;
}

newColorBtn.addEventListener("click", function () {
    const hexCode = "#" + getRandomHexString(6);

    colorDisplay.style.setProperty("background-color", hexCode);

    currentColorSpan.textContent = hexCode;
});

resetColorBtn.addEventListener("click", () => {
    colorDisplay.style.setProperty("background-color", "#569b96");
});
