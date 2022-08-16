const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.slide')
let slidePosition = 0;
let len = slides.length

let set = setInterval(function waktu() {
    prevSlide()
}, 2000);

next.addEventListener('click', function () {
    nextSlide();
    clearInterval(set);
})

prev.addEventListener('click', function() {
    prevSlide();
})

function updateSlide(){
    for (const slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }
    
    slides[slidePosition].classList.add('visible')
}

function nextSlide(){
    updateSlide()
    if(slidePosition === len - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}

function prevSlide(){
    updateSlide()
    if(slidePosition === 0){
        slidePosition = len - 1;
    } else {
        slidePosition--;
    }
}