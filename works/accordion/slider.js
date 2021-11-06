let slideIndex = 1;
 showSlides(slideIndex);
let slider=document.querySelector('.slider')
let slideSayi=3
let box=document.querySelector('.box')
let allBoxesCount=document.querySelectorAll('.box').length
let boxWidth=box.clientWidth;

slider.style.width=`${allBoxesCount*boxWidth+30}px`

leftPos=0
function slideLeft(){
    slider.style.left=`${leftPos}px`
    leftPos+=1200
}

function slideRight(){
    slider.style.left=`${leftPos}px`
    leftPos-=1200
    if (allBoxesCount) {
        
        
    }
} 