//dark-mode
var icon = document.getElementById("icon");
icon.onclick= function(){
    document.body.classList.toggle("dark-them")
    if(document.body.classList.contains("dark-them")){
        icon.className ="fas fa-moon";
    }
}