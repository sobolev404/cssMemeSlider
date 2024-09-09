const btnLeft = document.querySelector(".left")
const btnRight = document.querySelector(".right")
const slides = document.querySelectorAll(".slider-image")
const sliderControls = document.querySelector(".slider__controls")
const slider = document.querySelector(".slider__cards")
console.log(slides)
let currentSlide = 0;
const sliderWidth = slider.clientWidth
console.log(sliderWidth)

btnLeft.addEventListener('click',showPrevSlide)
btnRight.addEventListener('click',showNextSlide)

function showPrevSlide(){
    removeActiveCircle()
    currentSlide -=1
    if(currentSlide<0){
        currentSlide=slides.length-1
    }
    slider.style.transform = `translateX( -${currentSlide * sliderWidth}px)`
    addActiveCircle()
}

function showNextSlide(){
    removeActiveCircle()
    currentSlide +=1
    if(currentSlide>slides.length-1){
        currentSlide=0
    }
    slider.style.transform = `translateX( -${currentSlide * sliderWidth}px)`
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
      currentSlide = index; 
      slider.style.transform = `translateX( -${currentSlide * sliderWidth}px)`
      addActiveCircle();
    });
  });
