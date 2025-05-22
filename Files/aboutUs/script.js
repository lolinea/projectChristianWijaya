document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelectorAll(".menu-toggle-item").forEach((item, i) => {
        item.classList.toggle("clicked");
        document.querySelector(".menu-nav").classList.toggle("clicked");
    })
})


