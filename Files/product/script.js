document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelectorAll(".menu-toggle-item").forEach((item, i) => {
        item.classList.toggle("clicked");
        document.querySelector(".menu-nav").classList.toggle("clicked");
    })
})

const visibleImage = 3;

let kwCurrentIndex = 0;
const kwCarousel = document.querySelector("#kwCarousel");
const kwImage = kwCarousel.querySelectorAll(".keepWonder-carousel-image");
const kwLeft = document.querySelector(".keepWonder-arrow.left");
const kwRight = document.querySelector(".keepWonder-arrow.right");

let wCurrentIndex = 0;
const wCarousel = document.querySelector("#wCarousel");
const wImage = wCarousel.querySelectorAll(".Wackey-carousel-image");
const wLeft = document.querySelector(".Wackey-arrow.left");
const wRight = document.querySelector(".Wackey-arrow.right");

let wtCurrentIndex = 0;
const wtCarousel = document.querySelector("#wtCarousel");
const wtImage = wtCarousel.querySelectorAll(".wTees-carousel-image");
const wtLeft = document.querySelector(".wTees-arrow.left");
const wtRight = document.querySelector(".wTees-arrow.right");


function updateKwImage(){
    kwImage.forEach((img, i) => {
        if (i >= kwCurrentIndex && i < kwCurrentIndex + visibleImage){  
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    })

    // console.log(kwCurrentIndex);

        if (kwCurrentIndex == 0) {
            kwLeft.style.display = "none";
        } else {
            kwLeft.style.display = "flex";
        }

        if (kwCurrentIndex + visibleImage >= kwImage.length) {
            kwRight.style.display = "none";
        } else {
            kwRight.style.display = "flex";
        }
}

kwLeft.addEventListener("click", () => {
    if (kwCurrentIndex > 0) {
        kwCurrentIndex --;
        updateKwImage();
    }
})

kwRight.addEventListener("click", () => {
    if (kwCurrentIndex + visibleImage < kwImage.length) {
        kwCurrentIndex ++;
        updateKwImage();
    }
})


function updateWImage(){
    wImage.forEach((img, i) => {
        if (i >= wCurrentIndex && i < wCurrentIndex + visibleImage){  
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    })

        if (wCurrentIndex == 0) {
            wLeft.style.display = "none";
        } else {
            wLeft.style.display = "flex";
        }

        if (wCurrentIndex + visibleImage >= wImage.length) {
            wRight.style.display = "none";
        } else {
            wRight.style.display = "flex";
        }
}

wLeft.addEventListener("click", () => {
    if (wCurrentIndex > 0) {
        wCurrentIndex --;
        updateWImage();
    }
})

wRight.addEventListener("click", () => {
    if (wCurrentIndex + visibleImage < wImage.length) {
        wCurrentIndex ++;
        updateWImage();
    }
})


function updateWtImage(){
    wtImage.forEach((img, i) => {
        if (i >= wtCurrentIndex && i < wtCurrentIndex + visibleImage){  
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    })

        if (wtCurrentIndex == 0) {
            wtLeft.style.display = "none";
        } else {
            wtLeft.style.display = "flex";
        }

        if (wtCurrentIndex + visibleImage >= wtImage.length) {
            wtRight.style.display = "none";
        } else {
            wtRight.style.display = "flex";
        }
}

wtLeft.addEventListener("click", () => {
    if (wtCurrentIndex > 0) {
        wtCurrentIndex --;
        updateWtImage();
    }
})

wtRight.addEventListener("click", () => {
    if (wtCurrentIndex + visibleImage < wtImage.length) {
        wtCurrentIndex ++;
        updateWtImage();
    }
})

updateKwImage();
updateWImage();
updateWtImage();

function redirect(id){
    window.location.href = `../productDetail/productDetail.html?id=${id}`;
}


document.getElementById('kw1').addEventListener("click", () => redirect('kw1'));
document.getElementById('kw2').addEventListener("click", () => redirect('kw2'));
document.getElementById('kw3').addEventListener("click", () => redirect('kw3'));
document.getElementById('kw4').addEventListener("click", () => redirect('kw4'));
document.getElementById('kw5').addEventListener("click", () => redirect('kw5'));

document.getElementById('w1').addEventListener("click", () => redirect('w1'));
document.getElementById('w2').addEventListener("click", () => redirect('w2'));
document.getElementById('w3').addEventListener("click", () => redirect('w3'));
document.getElementById('w4').addEventListener("click", () => redirect('w4'));
document.getElementById('w5').addEventListener("click", () => redirect('w5'));

document.getElementById('wt1').addEventListener("click", () => redirect('wt1'));
document.getElementById('wt2').addEventListener("click", () => redirect('wt2'));
document.getElementById('wt3').addEventListener("click", () => redirect('wt3'));
document.getElementById('wt4').addEventListener("click", () => redirect('wt4'));
document.getElementById('wt5').addEventListener("click", () => redirect('wt5'));


const kw1V = document.getElementById('kw1');
kw1V.addEventListener('mouseenter', () => {
    kw1V.play(); 
})
kw1V.addEventListener('mouseleave', () => {
    kw1V.pause();
    kw1V.currentTime = 0; 
})

const kw2V = document.getElementById('kw2');
kw2V.addEventListener('mouseenter', () => {
    kw2V.play(); 
})
kw2V.addEventListener('mouseleave', () => {
    kw2V.pause();
    kw2V.currentTime = 0; 
})

const kw3V = document.getElementById('kw3');
kw3V.addEventListener('mouseenter', () => {
    kw3V.play(); 
})
kw3V.addEventListener('mouseleave', () => {
    kw3V.pause();
    kw3V.currentTime = 0; 
})

const kw4V = document.getElementById('kw4');
kw4V.addEventListener('mouseenter', () => {
    kw4V.play(); 
})
kw4V.addEventListener('mouseleave', () => {
    kw4V.pause();
    kw4V.currentTime = 0; 
})

const kw5V = document.getElementById('kw5');
kw5V.addEventListener('mouseenter', () => {
    kw5V.play(); 
})
kw5V.addEventListener('mouseleave', () => {
    kw5V.pause();
    kw5V.currentTime = 0; 
})


const w1V = document.getElementById('w1');
w1V.addEventListener('mouseenter', () => {
    w1V.play(); 
})
w1V.addEventListener('mouseleave', () => {
    w1V.pause();
    w1V.currentTime = 0; 
})

const w2V = document.getElementById('w2');
w2V.addEventListener('mouseenter', () => {
    w2V.play(); 
})
w2V.addEventListener('mouseleave', () => {
    w2V.pause();
    w2V.currentTime = 0; 
})

const w3V = document.getElementById('w3');
w3V.addEventListener('mouseenter', () => {
    w3V.play(); 
})
w3V.addEventListener('mouseleave', () => {
    w3V.pause();
    w3V.currentTime = 0; 
})

const w4V = document.getElementById('w4');
w4V.addEventListener('mouseenter', () => {
    w4V.play(); 
})
w4V.addEventListener('mouseleave', () => {
    w4V.pause();
    w4V.currentTime = 0; 
})

const w5V = document.getElementById('w5');
w5V.addEventListener('mouseenter', () => {
    w5V.play(); 
})
w5V.addEventListener('mouseleave', () => {
    w5V.pause();
    w5V.currentTime = 0; 
})

const wt1V = document.getElementById('wt1');
wt1V.addEventListener('mouseenter', () => {
    wt1V.play(); 
})
wt1V.addEventListener('mouseleave', () => {
    wt1V.pause();
    wt1V.currentTime = 0; 
})

const wt2V = document.getElementById('wt2');
wt2V.addEventListener('mouseenter', () => {
    wt2V.play(); 
})
wt2V.addEventListener('mouseleave', () => {
    wt2V.pause();
    wt2V.currentTime = 0; 
})

const wt3V = document.getElementById('wt3');
wt3V.addEventListener('mouseenter', () => {
    wt3V.play(); 
})
wt3V.addEventListener('mouseleave', () => {
    wt3V.pause();
    wt3V.currentTime = 0; 
})

const wt4V = document.getElementById('wt4');
wt4V.addEventListener('mouseenter', () => {
    wt4V.play(); 
})
wt4V.addEventListener('mouseleave', () => {
    wt4V.pause();
    wt4V.currentTime = 0; 
})

const wt5V = document.getElementById('wt5');
wt5V.addEventListener('mouseenter', () => {
    wt5V.play(); 
})
wt5V.addEventListener('mouseleave', () => {
    wt5V.pause();
    wt5V.currentTime = 0; 
})