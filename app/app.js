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

navSlide();