const nextBtn = document.getElementById('next-image')
const prevBtn = document.getElementById('previous-image')
const innerText = document.getElementById('carousel-inside-text')
const firstImageIndicator = document.getElementById('first-circle')
const secondImageIndicator = document.getElementById('second-circle')
const thirdImageIndicator = document.getElementById('third-circle')
const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length
const indicators = [firstImageIndicator, secondImageIndicator, thirdImageIndicator]
const filmNames = ['Joker', 'Baby Driver', 'Parasite']

nextBtn.addEventListener('click', showNextSlide)
prevBtn.addEventListener('click', showPreviousSlide)
firstImageIndicator.addEventListener('click', function() {
    if(slidePosition !== 0) {
        slidePosition = 0
    }
    showSlide()
})

secondImageIndicator.addEventListener('click', function() {
    if(slidePosition !== 1) {
        slidePosition = 1
    }
    showSlide()
})

thirdImageIndicator.addEventListener('click', function() {
    if(slidePosition !== 2) {
        slidePosition = 2
    }
    showSlide()
})

function loadSlide() {
        hideAllSlides()
        slides[slidePosition].classList.add('visible-carousel-item')
}

function setIndicatorColor() {
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].setAttribute('fill', 'white')
    }
    indicators[slidePosition].setAttribute('fill', '#49bdeb')
}

function hideAllSlides() {
    for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('visible-carousel-item')
    }
}

function setFilmName(a) {
    innerText.textContent = filmNames[a]
}

function showSlide() {
    loadSlide()
    setIndicatorColor()
    setFilmName(slidePosition)
}

function showNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    }
    else {
        slidePosition++
    }
    showSlide()
}

function showPreviousSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    }
    else {
        slidePosition--
    }
        showSlide()
}
