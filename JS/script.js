///////////////////////////////////////////////////////////// header ///////////////////////////////////////////////////////////////

let header = document.querySelector("#header");
window.addEventListener("scroll", () => {
    header.classList.toggle("changedheader", window.scrollY > 0);
});

///////////////////////////////////////////////////////////// scrollUp ///////////////////////////////////////////////////////////////

let scroll = document.querySelector(".scrollUp");
window.addEventListener("scroll", () => {
    scroll.classList.toggle("changedScroll", window.scrollY > 0);
});

/////////////////////////////////////////////////////////// language ////////////////////////////////////////////////////////////////

let am = document.querySelector("#lang-am");  
let iconLang = document.querySelector("#icon-lang");
let buttonDiv2 = document.querySelector("#buttonDiv2");
let number1 = 0;

am.onclick = function () {
    if (number1 === 0) {
        buttonDiv2.style.display = "flex";
        iconLang.classList.remove("fa-caret-down");
        iconLang.classList.toggle("fa-caret-up");
        number1 = 1;
    } else {
    buttonDiv2.style.display = "none";
    iconLang.classList.remove("fa-caret-up");
    iconLang.classList.toggle("fa-caret-down");
    number1 = 0;
    }   
}

/////////////////////////////////////////////////////////// mobile menu ////////////////////////////////////////////////////////////////

let icon = document.querySelector(".menu");  
let bigButton = document.querySelector("#bigButton"); 
let aboutUs = document.querySelector("#about-us"); 
let iconMenu = document.querySelector("#iconMenu");
let title = document.querySelector(".title");
let number2 = 0;

icon.onclick = function () {
    if (number2 === 0) {
        bigButton.style.display = "flex";
        aboutUs.style.display = "flex";
        title.style.display = "none";
        iconMenu.classList.remove("fa-bars");
        iconMenu.classList.toggle("fa-close");
        number2 = 1;
    } else {
        bigButton.style.display = "none";
        aboutUs.style.display = "none";
        title.style.display = "block";
        iconMenu.classList.remove("fa-close");
        iconMenu.classList.toggle("fa-bars");
        number2 = 0;
    }   
}
