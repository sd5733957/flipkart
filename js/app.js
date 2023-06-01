let loginButton  = document.querySelector(".loginButton");

//using mouseover Event listener for login Menu to appear

loginButton.addEventListener("mouseover", e => {
    document.querySelector(".loginMenu").classList.add("show");
}
);

// let loginButton loose focus as the mouse hovers out of loginMenu
loginButton.nextElementSibling.addEventListener("mouseleave", e => {
    document.querySelector(".menu").classList.toggle("show");
},
);

let moreButton = document.querySelector(".moreButton");
moreButton.addEventListener("mouseover",e =>{
    document.querySelector(".navMenu").classList.toggle("show");
    let arrow = window.getComputedStyle(document.querySelector(".nav-menu"),'::after');
    arrow.setProperty["border-color"] = "transparent transparent black";
}
);
moreButton.nextElementSibling.addEventListener("mouseleave", e=> {
    document.querySelector(".navMenu").classList.toggle("show");
}
);

let mySlides = document.querySelectorAll(".slide");

mySlides.forEach((element, index) => {
    element.style.transform = `translatex(${index*100}%)`;
}
);


let nextSlideButton = document.querySelector(".nextSlideButton");
let previousSlideButton = document.querySelector(".previousSlideButton");
mySlides.forEach((element,index) => {
    element.style.position = "absolute";
});

let numOfSlides = mySlides.length-1;
let currentSlide = 0;
previousSlideButton.addEventListener("click", e => {
    e.stopPropagation();
    if(currentSlide === 0){
        currentSlide = numOfSlides;
    }
    else{
    currentSlide--;
    }
    mySlides.forEach((element,index) => {
        element.style.transform = `translatex(${100 *(index -currentSlide)}%)`;
    })
}
);

nextSlideButton.addEventListener("click", e => {
    e.stopPropagation();
    if(currentSlide === numOfSlides){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    mySlides.forEach((element,index) => {
        element.style.transform = `translatex(${100*(index-currentSlide)}%)`;
    }
)
});
 
setInterval( () => {
    if(currentSlide === numOfSlides){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    mySlides.forEach((element,index) => {
        element.style.transform = `translatex(${100*(index-currentSlide)}%)`;
    }
    )
},4000);

