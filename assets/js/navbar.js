document.addEventListener("DOMContentLoaded", () => {

});
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".dropdown > a").forEach(item => {

    item.addEventListener("click", function(e){

        if(window.innerWidth <= 992){

            e.preventDefault();

            this.parentElement.classList.toggle("active");

        }

    });

});