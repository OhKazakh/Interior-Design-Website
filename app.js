var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    })
})

const hiddenElements = document.querySelectorAll('.cont');
hiddenElements.forEach((el) => observer.observe(el));


