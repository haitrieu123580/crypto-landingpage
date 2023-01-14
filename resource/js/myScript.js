// make loading
const loader = document.getElementById("loader")
function loadingPage(){
    setTimeout(showPage,2000)
}
function showPage(){
  loader.style.display = "none"
}
const li = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");

function activateMenu(){
    let len = sec.length;
    
    while(--len && window.scrollY+90< sec[len].offsetTop){}
    li.forEach(ltx=>ltx.classList.remove("activeSection"));
    if(len!=4){
      li[len].classList.add("activeSection");
    }
}
activateMenu();
window.addEventListener("scroll",activateMenu);

function showMobileMenu(){
    let menu__mobile =  document.querySelector(".menu__mobile");
    menu__mobile.style.transform= "translateX(0)";
    menu__mobile.style.display = "inline-block";
    let menu__background = document.querySelector(".menu__background");
    menu__background.classList.add("visible");
    let timeIcon =  document.querySelector(".fa-times");
    timeIcon.classList.add("spin")
}
function hideMobileMenu(){
    let menu__mobile = document.querySelector(".menu__mobile");
    menu__mobile.style.transform= "translateX(101%)";
    let body = document.querySelector("body");
    let menu__background = document.querySelector(".menu__background");
    menu__background.classList.remove("visible");
    let timeIcon =  document.querySelector(".fa-times");
    timeIcon.classList.remove("spin")
}
// show submenu mobile
let btnSubmenu = document.querySelectorAll(".btnSubmenu");
function sidebarLiDown(){
    for(let btn of btnSubmenu){
      btn.onclick=(e)=>{
            let menuHasChild = e.target.parentElement.parentElement;
            menuHasChild.classList.toggle("showNav");
            btnSubmenu.classList.toggle("rotateUp");
        }
    }
}
sidebarLiDown();



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
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
      // console.log(entry.target)
    } else {
      entry.target.classList.remove("show-animation");
    }
  });
});

let show = document.querySelectorAll(".hide")
show.forEach((col)=>{
  observer.observe(col)
})

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation2");
      // console.log(entry.target)
    } else {
      entry.target.classList.remove("show-animation2");
    }
  });
});

let show2 = document.querySelectorAll(".hide2")
show2.forEach((col)=>{
  observer2.observe(col)
})
// console.log(show)


window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector(".head").classList.add("header--fixed");
  } else {
    document.querySelector(".head").classList.remove("header--fixed");
  }
});
