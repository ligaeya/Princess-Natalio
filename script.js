
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    const icon = menuBtn.querySelector("i");

    menuBtn.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 25px rgba(145, 71, 97, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .education-item, .contact-item"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    animatedElements.forEach(function (element) {

        element.classList.add("reveal");
        observer.observe(element);

    });

}

console.log("♡");