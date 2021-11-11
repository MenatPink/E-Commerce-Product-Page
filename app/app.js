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
// const size = carouselImages[0].clientWidth;

carouselSlide.style.transform='translateX(' + (-100 * counter ) + '%)';

//Button Listeners

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-100 * counter ) + '%)';
    console.log(counter);
});
prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-100 * counter ) + '%)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform='translateX(' + (-100 * counter ) + '%)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length  -counter;
        carouselSlide.style.transform='translateX(' + (-100 * counter ) + '%)';
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
    if(itemNumber !== 0){
        itemNumber--;
        itemNumberContainer.innerHTML = itemNumber;
    }
});

// Print Number on Screen

/* MAKING THE CART NAV ICON OPEN UP THE LIGHTBOX */

//Select Icon Cart
const iconCart = document.querySelector("#icon-cart");
const navCart = document.querySelector("#cartLightBox");
//When the cart icon is clicked
iconCart.addEventListener('click', ()=>{
    console.log(navCart);
    navCart.classList.toggle("not-visible");
});

//toggle the class of active to the lightbox




/*
MAKING THE ADD TO CART BUTTON WORK
*/

// Select the add to cart button
let cart;
const addToCartButton = document.querySelector("#addToCartButton");
const cartContent = document.querySelector("#cartContent");
const cartCheckoutButton = document.querySelector("#cartCheckoutButton");
const navCartButton = document.querySelector('#icon-cart');
const cartData = document.querySelector('#cartData');
const cartContentContainer = document.querySelector('.cart-content-container');
const cartIsEmptyText = document.querySelector('#cartIsEmptyText');
// When the add to cart button is clicked, if the basket is not zero, change the cart item icon
addToCartButton.addEventListener('click', ()=>{
    if(itemNumber != 0 ){
        cartData.innerHTML = "$125.00 x " + itemNumber + " " + "<b>" + "$" + 125*itemNumber + ".00" + "</b>";
        cartContent.classList.remove("not-active");
        cartCheckoutButton.classList.remove("not-active");
        cartIsEmptyText.classList.add("not-active");
    } else{
        console.log(cartIsEmptyText);
    }
});

//MAKING THE DELETE ITEMS FROM CART BUTTON WORK
const cartDelete = document.querySelector('#cartDelete');
// When the cart delete button is clicked
cartDelete.addEventListener('click',()=>{
    //The Item Number is set back to zero,
    itemNumber = 0;
    // the class of not active is added to the content
    cartContent.classList.add("not-active");
    cartCheckoutButton.classList.add("not-active");
    // and the class of not active is taken away from the cart is empty text to show it
    cartIsEmptyText.classList.remove("not-active");
    itemNumberContainer.innerHTML = itemNumber;

});


const app = () =>{
    navSlide();
}

app();