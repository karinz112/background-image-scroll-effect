const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{ //this event listener happens when we scroll in the website
    updateImage();
});

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}