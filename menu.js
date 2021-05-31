const menu = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const home = document.querySelector(".home");
const main = document.querySelector(".main");
const container = document.querySelector(".container");
const contact = document.querySelector(".contact");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    container.classList.toggle("change");
    main.classList.toggle("change");
});

home.addEventListener("click", () => {
    navbar.classList.remove("change");
    main.classList.remove("change");
    container.classList.remove("change");
});

let input = document.querySelector(".input");
let i = document.querySelector(".fa");
i.addEventListener("click",() => {
    input.classList.toggle("search");
});

let btn = document.querySelector(".btn");
btn.onclick = function () {
    document.body.classList.toggle("theme");
}

contact.addEventListener("click", () => {
    let email = prompt("Please enter you Email for further detail");
    alert(`Your Email : ${email}`)
});