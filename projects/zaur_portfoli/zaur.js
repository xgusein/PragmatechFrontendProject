// const cursor = document.querySelector('.cursor');

//follow cursor on mousemove
// document.addEventListener("mousemove", e => {
    // let x = e.pageX;
    // let y = e.pageY;

    // cursor.style.top = y + "px";
    // cursor.style.left= x + "px";
    // cursor.style.display = "block";
//     cursor.setAttribute("style","top: "+(e.pageY-10)+"px;left:"+(e.pageX -10)+"px;")
// });

//     document.addEventListener("click", () => {
//         cursor.classList.add("expand");
//     })
const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
