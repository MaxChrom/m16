
const clossingButton = document.querySelector(".closing-button");

const sideBar = document.querySelector(".sidebar");

clossingButton.addEventListener("click", (e) => {
    e.target.classList.toggle("hidden");
    sideBar.classList.toggle("hiddenBar");
});