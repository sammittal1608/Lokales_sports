document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuClose = document.getElementById("menu-close");

    menuToggle.addEventListener("click", () => {
        hamburgerMenu.classList.add("open");
    });

    menuClose.addEventListener("click", () => {
        hamburgerMenu.classList.remove("open");
    });
});
