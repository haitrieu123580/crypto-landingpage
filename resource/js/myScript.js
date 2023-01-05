
const li = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");

function activateMenu(){
    let len = sec.length;
    while(--len && window.scrollY+97< sec[len].offsetTop){}
    li.forEach(ltx=>ltx.classList.remove("activeSection"));
    li[len].classList.add("activeSection");
}
activateMenu();
window.addEventListener("scroll",activateMenu);

function showMobileMenu(){
    let menu__mobile =  document.querySelector(".menu__mobile");
    menu__mobile.style.transform= "translateX(-400px)";
    menu__mobile.style.display = "block";
    let menu__background = document.querySelector(".menu__background");
    menu__background.classList.add("visible");
}
function hideMobileMenu(){
    let menu__mobile = document.querySelector(".menu__mobile");
    menu__mobile.style.transform= "translateX(400px)";
    let body = document.querySelector("body");
    let menu__background = document.querySelector(".menu__background");
    menu__background.classList.remove("visible");
}

//countdown timer
let countDownDate = new Date("Jan 22, 2023 0:0:0").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.querySelector(".day span").innerHTML = days;
  // document.querySelector(".hour span").innerHTML = hours;
  // document.querySelector(".minute span").innerHTML = minutes;
  // document.querySelector(".second span").innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// select tab in section sales
function selectTab1(){
  let tab1 = document.querySelector("#tab1__name");
  let tab2 = document.querySelector("#tab2__name");
  tab2.classList.remove("tab--selected");
  tab1.classList.add("tab--selected");
  document.querySelector(".tab1").style.display = "block";
  document.querySelector(".tab2").style.display = "none";
  // tab1.style.opacity = "1";
}
function selectTab2(){
  let tab2 = document.querySelector("#tab2__name");
  let tab1 = document.querySelector("#tab1__name");
  tab1.classList.remove("tab--selected");
  tab2.classList.add("tab--selected");
  document.querySelector(".tab2").style.display = "block";
  document.querySelector(".tab1").style.display = "none";
  // document.querySelector(".tab--selected").style.opacity = "1";
}