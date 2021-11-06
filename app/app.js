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

//------------------------------------------------------------------------------------------
/*
MAKING THE ITEM COUNTER WORK
*/

// Select Number Icon on screen
let itemNumber;
const itemNumberContainer = document.querySelector("#itemNumberContainer");

// Set icon Number to zero and show it
itemNumber = 0;
itemNumberContainer.innerHTML = 0;
// Select plus button
const itemPlus = document.querySelector("#itemPlus");
// Select minus button
const itemMinus = document.querySelector("#itemMinus");
// when plus button is clicked, add one to item number variable
itemPlus.addEventListener('click', ()=>{
    itemNumber++;
    itemNumberContainer.innerHTML = itemNumber;
});
// when minus number is clicked, take away one from number variable
itemMinus.addEventListener('click', ()=>{
    itemNumber--;
    itemNumberContainer.innerHTML = itemNumber;
});

// Print Number on Screen

/* MAKING THE CART NAV ICON OPEN UP THE LIGHTBOX */

//Select Icon Cart
const iconCart = document.querySelector("#icon-cart");
const navCart = document.querySelector("#cartLightBox");
//When the cart icon is clicked
iconCart.addEventListener('click', ()=>{
    console.log(navCart);
    navCart.classList.toggle("not-active");
});

//toggle the class of active to the lightbox




/*
MAKING THE ADD TO CART BUTTON WORK
*/

// Select the add to cart button
const addToCartButton = document.querySelector("#addToCartButton");
const navCartButton = document.querySelector('#icon-cart');
// When the add to cart button is clicked, if the basket is not zero, change the cart item icon
addToCartButton.addEventListener('click', ()=>{
    if(itemNumber != 0 ){
        console.log("You need to set up cart numbers");
    }
});



const app = () =>{
    navSlide();
}

app();