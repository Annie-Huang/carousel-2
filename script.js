const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

// console.log('track=' track);
// console.log('slides=', slides);

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

// const slideSize = slides[0].getBoundingClientRect();
// console.log('slideSize=', slideSize);
const slideWidth = slides[0].getBoundingClientRect().width;

// ###############################################
// ## arrange the slides next to one another
// ###############################################
/*
        // slides[0].style.left = slideWidth * 0 + 'px';
        // slides[1].style.left = slideWidth * 1 + 'px';
        // slides[2].style.left = slideWidth * 2 + 'px';
        // slides.forEach((slide, index) => {
        //   slide.style.left = slideWidth * index + 'px';
        // });
*/
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  // use targetSlide instead of nextSlide so this can be use for nextSlide, prevSlide and click on parcific dots carousel__indicator
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// ###############################################
// ## When I click left, move slides to the left
// ###############################################
prevButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

// ###############################################
// ## When I click right, move slides to the right
// ###############################################
/*nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  // console.log('currentSlide=', currentSlide); // <li class="carousel__slide current-slide" style="left: 0px;">
  // console.log('currentSlide=', currentSlide.nextElementSibling); // <li class="carousel__slide" style="left: 797.333px;">
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  // move to the slide
  // console.log('amountToMove=', amountToMove); // 797.333px
  track.style.transform = 'translateX(-' + amountToMove + ')';
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
});

// Refactor the whole above into the blew
*/
nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  console.log('currentSlide=', currentSlide); // <li class="carousel__slide current-slide" style="left: 0px;">
  console.log('currentSlide=', currentSlide.nextElementSibling); // <li class="carousel__slide" style="left: 797.333px;">
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
});

// ##########################################################
// ## When I click the nav indicators, move to that slide.
// ##########################################################
