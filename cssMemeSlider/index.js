const btnLeft = document.querySelector(".left")
const btnRight = document.querySelector(".right")
const slides = document.querySelectorAll(".slider-image")
const sliderControls = document.querySelector(".slider__controls")
console.log(slides)
let currentSlide = 0;

btnLeft.addEventListener('click',showPrevSlide)
btnRight.addEventListener('click',showNextSlide)

function showPrevSlide(){
    removeActiveCircle()
    slides[currentSlide].classList.remove("block")
    currentSlide -=1
    if(currentSlide<0){
        currentSlide=slides.length-1
    }
    slides[currentSlide].classList.add("block")
    addActiveCircle()
}

function showNextSlide(){
    removeActiveCircle()
    slides[currentSlide].classList.remove("block")
    currentSlide +=1
    if(currentSlide>slides.length-1){
        currentSlide=0
    }
    slides[currentSlide].classList.add("block")
    addActiveCircle()
}

const paginationCircles = []

function createPaginationCircle(){
    const div = document.createElement("div");
    div.className = "pagination-circle"
    sliderControls.appendChild(div)
    paginationCircles.push(div)
}

function addPaginationCircles(){
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active")
}

function addActiveCircle(){
    paginationCircles[currentSlide].classList.add("active")
}

function removeActiveCircle(){
    paginationCircles[currentSlide].classList.remove("active")
}

addPaginationCircles();

paginationCircles.forEach((item, index) => {
    item.addEventListener('click', () => {
      removeActiveCircle(); 
      slides[currentSlide].classList.remove('block');
      currentSlide = index; 
      slides[currentSlide].classList.add('block'); 
      addActiveCircle();
    });
  });
