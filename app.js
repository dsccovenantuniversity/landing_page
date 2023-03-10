console.log("Start project!");
/* hamburger menu js */
const hamburger = document.getElementById("js--menu");
const dropdown = document.getElementById("js--dropdown");
const dropdownContainer = document.querySelector(".dropdown>.container");
const mainNavMenu = document.querySelector(".main--nav--menu");
const textContent = document.querySelectorAll(".hero--text--content");
const paginate = document.querySelectorAll(".paginate--btn");
const heroContent = document.querySelector("header");
const mainNav = document.querySelector('.main--nav');
const topNav =document.querySelector('.top--navigation');

document.addEventListener('scroll',onScrollHandler);
function onScrollHandler(){
    !isInViewport(topNav)? mainNav.classList.add('nav--active'): mainNav.classList.remove('nav--active');
}
function isInViewport(element){
    const {top, left, bottom, right} = element.getBoundingClientRect();
    const{innerHeight, innerWidth} =window;
    const {documentElement:{clientHeight, clientWidth}} =document;
    return(
        top>= 0 && left >= 0 && bottom <=(innerHeight || clientHeight) && right <=(innerWidth || clientWidth)
    );
}
hamburger.addEventListener("click", () => {
  if (hamburger.className.includes("close")) {
    hamburger.classList.remove("close");
    mainNavMenu.style.display = "none";
    return;
  }
  hamburger.className += " close ";
  mainNavMenu.style.display = "flex";
});
dropdown.addEventListener("click", () => {
  if (dropdownContainer.className.includes("d-flex")) {
    dropdownContainer.classList.remove("d-flex");
    dropdownContainer.classList.add("d-none");
    return;
  }
  dropdownContainer.classList.add("d-flex");
});
paginate.forEach((button, index) => {
  button.addEventListener("click", () => {
    heroContent.className = ` hero--section bg-${index + 1} `;
    heroContent.style.animation = "zoom-in-out 0.5s linear  1 ";
    button.classList.add("active");
    textContent[index].className = " hero--text--content ";

    for (let i = 0; i < 3; i++) {
      if (paginate[i].className.includes("active") && i !== index) {
        paginate[i].classList.remove("active");
      }
      if (i !== index && !textContent[i].className.includes(".d-none")) {
        textContent[i].className = "hero--text--content d-none ";
      }
    }
    setTimeout(() => {
      heroContent.style.animation = "";
    }, 500);
  });
});
