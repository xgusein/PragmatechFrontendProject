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
function Createnote() {
    document.getElementsById("user_input").value;
    var not =document.createElement("div");
    var not1 =document.createElement("h1");

    not1.innerHTML = user_input;
    not1.setAttribute("style", "width:250px; height:250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgb()0,0,0,0.75");
    not1.style.margin = margin();
    not1.style.transform = rotate();
    not1.style.background = color();
    not.appendChild(not1);
    all_notes.insertAdjacentElement("beforeend",not);    
}
 const user_input=document.querySelector('user_input')
 user_input.addEventListener('keypress', e =>{
     console.log(e)
     if (e.keyCode === 13) {
         Createnote()
         e.preventDefault()
     }
 })    
// user_input.addEventListener("keyup",function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         console.log(Createnote());
//     }
    
// })
function margin (params) {
    var random_margin = ["-5px","1px","5px","10px","15px","20px"];
    return random_margin[Math.floor(Math.random()*random_margin.length)];
}

function color(params) {
    var random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    if (i> random_color.length - 1) {
        i=0
    }
    return random_color[i++];
}

function rotate(params) {
    var random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];
     return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}