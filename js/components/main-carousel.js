const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
var carousel = window.document.querySelector('.elements');
var position = 0;

buttonLeft.addEventListener('click', ()=>{  
    
    position = position - 100;
    carousel.style = `transform: translateX(${position}px)`;
})

buttonRight.addEventListener('click', ()=>{  
    
    position = position + 100;
    carousel.style = `transform: translateX(${position}px)`;
})