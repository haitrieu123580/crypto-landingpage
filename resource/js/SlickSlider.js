const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === "first-clone") {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    bar.style.width=0;
  }

  if (slides[index].id === "last-clone") {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    bar.style.width=0;
  }
});
let bar= document.querySelector("#bar");
let barWidth = bar.clientWidth;
bar.style.width=0;
// console.log(barWidth)
const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  // console.log(slides)  
  bar.style.width =`${barWidth*(index-1)}px`;
  // console.log(index)
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;

};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
// nextBtn.addEventListener('click', moveToNextSlide);
// prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();
