// ========================================
// KOCIX STUDIO
// ========================================


// ===== AKTUALNY ROK =====

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===== MENU MOBILNE =====

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });


    // Zamknięcie menu po kliknięciu
    // w dowolny link nawigacji

    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });

    });
}


// ===== ZAMKNIĘCIE MENU KLAWISZEM ESC =====

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && nav) {
        nav.classList.remove("active");
    }

});
