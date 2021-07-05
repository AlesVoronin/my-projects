const gap_n = 30;

const carousel_n = document.getElementsByClassName("animal-card-carousel"),
    content_n = document.getElementsByClassName("animal-card-content"),
    next_n = document.getElementById("next-animal"),
    prev_n = document.getElementById("prev-animal");

next_n.addEventListener("click", e => {
    delayAutoSliding_n();
    carousel_n.item(0).scrollBy(width_n + gap_n, 0);
    if (content_n.item(0).scrollWidth - width_n - gap_n <= carousel_n.item(0).scrollLeft + width_n){
        carousel_n.item(0).scrollBy(-(width_n + gap_n)*4, 0);
    }
});
prev_n.addEventListener("click", e => {
    delayAutoSliding_n();
    carousel_n.item(0).scrollBy(-(width_n + gap_n), 0);
    if (content_n.item(0).scrollWidth - width_n - gap_n <= carousel_n.item(0).scrollLeft + width_n){
        carousel_n.item(0).scrollBy(+(width_n + gap_n)*4, 0);
    }
});

let width_n = carousel_n.item(0).offsetWidth;
window.addEventListener("resize", e => (width_n = carousel_n.item(0).offsetWidth));


const slideFunc_n = () => {
    carousel_n.item(0).scrollBy(width_n + gap_n, 0);
    if (content_n.item(0).scrollWidth - width_n - gap_n <= carousel_n.item(0).scrollLeft + width_n){
        carousel_n.item(0).scrollBy(-(width_n + gap_n)*4, 0);
    }
}
autoSlideInterval
let autoSlideInterval_n = setInterval(slideFunc_n, 3000);
let autoSlideTimeout_n = null;

const delayAutoSliding_n = () => {
    clearTimeout(autoSlideTimeout_n)
    clearInterval(autoSlideInterval_n);
    autoSlideInterval_n = null;


    autoSlideTimeout_n = setTimeout(() =>{
        clearInterval(autoSlideInterval_n);
        autoSlideInterval_n = setInterval(slideFunc_n, 3000);
    }, 3000)
}
carousel_n.item(0).addEventListener('mousemove', delayAutoSliding_n)
