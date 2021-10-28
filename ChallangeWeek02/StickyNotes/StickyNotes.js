// var model= document.getElementsByClassName("model");
// var button = document.getElementsByid("add_note");
// function Myfunction() {
//     if (document.getElementById("modal").style.display ="none")
//    document.getElementById("modal").style.display ="block";
//    else{
//     document.getElementById("modal").style.display ="none";
//    }
// }
function Myfunction() {
    var x = document.getElementById("modal");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
    
}
