const gap = 16;

const carousel = document.getElementsByClassName("carousel"),
    content = document.getElementsByClassName("carousel_content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    delayAutoSliding();
    carousel.item(0).scrollBy(width + gap, 0);
});
prev.addEventListener("click", e => {
    delayAutoSliding();
    carousel.item(0).scrollBy(-(width + gap), 0);
});

let width = carousel.item(0).offsetWidth;
window.addEventListener("resize", e => (width = carousel.item(0).offsetWidth));



const slideFunc = () => {
    carousel.item(0).scrollBy(width + gap, 0);
    if (content.item(0).scrollWidth - width - gap <= carousel.item(0).scrollLeft + width){
        carousel.item(0).scrollBy(-(width + gap)*4, 0);
    }
}

let autoSlideInterval = setInterval(slideFunc, 10000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
    clearTimeout(autoSlideTimeout)
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;


    autoSlideTimeout = setTimeout(() =>{
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(slideFunc, 10000);
    }, 10000)
}

carousel.item(0).addEventListener('click', delayAutoSliding)
