let diStatus=true
let both=document.querySelectorAll(".item-ac")
function opco(ele){
    for(i=0;i<both.length;i++){
        both[i].querySelector('p').style.display="none"
    }
    if (diStatus=false) {
       ele.nextElementSibling.style.display='none'
       diStatus=true 
    }
    else{
        ele.nextElementSibling.style.display='block'
        diStatus=false
    }

}