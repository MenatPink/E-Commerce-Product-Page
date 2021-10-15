const navSlide = () => {
    const burger = document.querySelector("#burger");
    const navLinks = document.querySelector(".nav-links")
    const close = document.querySelector("#menu-close")

    burger.addEventListener('click', ()=>{
      navLinks.classList.toggle('active');  
    })
    close.addEventListener('click', ()=>{
        navLinks.classList.toggle('active');
    })
}
// Carousel
    const carousel = document.querySelector('.carousel');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages= document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size);

carouselSlide.style.transform='translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    console.log(counter);
});
prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform='translateX(' + (-size * counter ) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length  -counter;
        carouselSlide.style.transform='translateX(' + (-size * counter ) + 'px)';
    }
});

const app = () =>{
    navSlide();
}

app();