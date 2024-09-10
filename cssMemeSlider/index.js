const meme = ['this is fine:)','cat eats broccoli','becoming a meme is not easy','matches are not a toy for children','ran out of arguments ']

const btnLeft = document.querySelector(".left")
const btnRight = document.querySelector(".right")
const slides = document.querySelectorAll(".slider-image")
const sliderControls = document.querySelector(".slider__controls")
const slider = document.querySelector(".slider__cards")
const cardText = document.querySelector(".card-text")
const sliderBottom = document.querySelector(".slider__bottom")

console.log(slides)
let currentSlide = 0;
cardText.textContent = meme[currentSlide]
let sliderWidth = slider.clientWidth
sliderBottom.style.width = `${sliderWidth}px`
console.log(sliderWidth)

btnLeft.addEventListener('click',showPrevSlide)
btnRight.addEventListener('click',showNextSlide)

function showPrevSlide(){
    removeActiveCircle()
    currentSlide -=1
    if(currentSlide<0){
        currentSlide=slides.length-1
    }
    showSlide()
    addActiveCircle()
}

function showNextSlide(){
    removeActiveCircle()
    currentSlide +=1
    if(currentSlide>slides.length-1){
        currentSlide=0
    }
    showSlide()
    addActiveCircle()
}

function showSlide(){
    slider.style.transform = `translateX( -${currentSlide * sliderWidth}px)`
    cardText.textContent = meme[currentSlide]
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
      showSlide()
      addActiveCircle();
    });
  });


  window.addEventListener("resize", () => {
    sliderWidth = slider.clientWidth
    sliderBottom.style.width = `${sliderWidth}px`
    showSlide()
  });  