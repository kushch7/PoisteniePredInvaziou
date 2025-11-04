const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");

openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
});

okBtn.addEventListener("click", () => {
    alert("Message was sent.");
    popup.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
});