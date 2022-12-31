
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activateMenu(){
    let len = sec.length;
    while(--len && window.scrollY+97< sec[len].offsetTop){}
    li.forEach(ltx=>ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activateMenu();
window.addEventListener("scroll",activateMenu);

function showMobileMenu(){
    let menu__mobile =  document.querySelector(".menu__mobile");
   
    menu__mobile.style.transform= "translateX(-400px)";
    menu__mobile.style.display = "block";
    let menu__background = document.querySelector(".menu__background");
    menu__background.classList.add("visible");

    // document.querySelector("body").classList.add("bgFilter");
}
function hideMobileMenu(){
    let menu__mobile = document.querySelector(".menu__mobile");
    menu__mobile.style.transform= "translateX(400px)";
    let body = document.querySelector("body");
    let menu__background = document.querySelector(".menu__background");
    menu__background.classList.remove("visible");

}
