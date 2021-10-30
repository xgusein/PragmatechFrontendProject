// var model= document.getElementsByClassName("model");
// var button = document.getElementsByid("add_note");
// function Myfunction() {
//     if (document.getElementById("modal").style.display ="none")
//    document.getElementById("modal").style.display ="block";
//    else{
//     document.getElementById("modal").style.display ="none";
//    }
// }
var x = document.getElementById("modal");
var all_notes = document.getElementsByName("all_notes");
var i =0;
function Myfunction() {
    var x = document.getElementById("modal");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
}
// var y = document.getElementsByID("user_input");
// y.addEventListener("keyup",function(event) {
//     if(event.keyCODE === 13){
//         document.getElementsByClassName("all_notes");
//         document.createElement("note");
//     }
// }
