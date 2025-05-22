document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelectorAll(".menu-toggle-item").forEach((item, i) => {
        item.classList.toggle("clicked");
        document.querySelector(".menu-nav").classList.toggle("clicked");
    })
})

let sliderKW = 0;
let sliderW = 0;

const slidesKW = document.getElementsByClassName("keepWonder-carousel-image");
const slidesW = document.getElementsByClassName("Wackey-carousel-image");

function kwSlider(n) {
for (let i = 0; i < slidesKW.length; i++) {
    slidesKW[i].style.display = "none";
}
sliderKW = (n + slidesKW.length) % slidesKW.length;
slidesKW[sliderKW].style.display = "flex";
}

function WSlider(n) {
    for (let i = 0; i < slidesW.length; i++) {
        slidesW[i].style.display = "none";
    }
    sliderW = (n + slidesW.length) % slidesW.length;
    slidesW[sliderKW].style.display = "flex";
    }

function autoSlide() {
kwSlider(sliderKW + 1);
WSlider(sliderW + 1);
setTimeout(autoSlide, 4000);
}

kwSlider(sliderKW);
WSlider(sliderW)
autoSlide();

const image = document.querySelector('.Event-image');
const video = image.querySelector('video');

image.addEventListener('mouseenter', () => {
    video.play(); 
})

image.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
})

