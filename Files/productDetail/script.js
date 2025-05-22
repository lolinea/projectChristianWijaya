document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelectorAll(".menu-toggle-item").forEach((item, i) => {
        item.classList.toggle("clicked");
        document.querySelector(".menu-nav").classList.toggle("clicked");
    });
});

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (products[productId]) {
    const product = products[productId];

    document.getElementById('cont-name1').textContent = product.name1;
    document.getElementById('cont-name2').textContent = product.name2;
    document.getElementById('cont-desc').textContent = product.description;
    document.getElementById('cont-img').src = product.image;    

    const hoverImg = document.getElementById('cont-img-hover');
    const normImg = document.getElementById('cont-img');
    const container = document.querySelector('.cont-img-cont');

    if (product.hover) {
        hoverImg.src = product.hover;
        container.classList.add('has-hover');
    } else {
        hoverImg.style.display = 'none';
    }
} else {
    document.querySelector('.cont-name1').innerHTML = "Product not Found.";
}


const images = moreImage[productId];
const carouselImages = document.getElementById("more-image")

document.getElementById('more-product').textContent = `More Product from ${products[productId].name1}`;


if (images && carouselImages) {
    Object.entries(images).forEach(([id, src]) => {
        console.log(id)
        console.log(src)
        
        const img = document.createElement('img');
        img.src = src;
        img.id = id;
        carouselImages.appendChild(img);
        
        img.onclick = () => {
            window.location.href = `../productDetail/productDetail.html?id=${id}`;
        };
    });
  }
  

let value = 1;
document.getElementById("button-value").textContent = value;

const desc = document.getElementById("button-desc");
const asc = document.getElementById("button-asc");

desc.addEventListener("click", function(){
    if (value > 0) {
        value --;
        document.getElementById("button-value").textContent = value;
    }
})

asc.addEventListener("click", function(){
    if (value < 10) {
        value ++;
        document.getElementById("button-value").textContent = value;    
    }
})

document.getElementById("button-cart").addEventListener("click", function(){
    alert("Product added to your cart!");
    window.location.href = "../product/productPage.html";
})

document.getElementById("button-order").addEventListener("click", function(){
    alert("Feature coming soon!");
})
