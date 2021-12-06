const container =document.querySelector('.container');
container.addEventListener('click', function(e){
    if(e.target.classList.container('seat') && e.target.classList.container('reserved')){
        console.log(e.target);
    }
})