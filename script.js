document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");
    let index = 0;


    menuToggle.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });


    function showSlide(i) {
        if (i >= slides.length) index = 0;
        if (i < 0) index = slides.length - 1;
        document.querySelector(".carrusel-container").style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index++;
        showSlide(index);
    });

    prev.addEventListener("click", () => {
        index--;
        showSlide(index);
    });

    setInterval(() => {
        index++;
        showSlide(index);
    }, 5000);


    prev.addEventListener("click", function (event) {
        event.stopPropagation(); 
    });

    next.addEventListener("click", function (event) {
        event.stopPropagation(); 
    });
});
