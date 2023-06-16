const share_btn = document.querySelector(".share-btn");
const popup = document.querySelector(".popup")

share_btn.addEventListener("click", () => {
    popup.classList.toggle("active");
})