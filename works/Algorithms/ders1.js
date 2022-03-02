// let a=Foo(3,4,12,45,67,78);
// function Foo(){
// return (3+4+12+45+67+78)
// }
//  console.log(a);
// if(ededler){
// let sum=0
// while(){
//     let i=0
// }
// }
//  let ededler=[12,45,23,67,89,1,17,90]
 
//   for(let i=0; i<8;i++){
//       if(ededler[i]%3==0){
//         console.log(ededler[i]);
//      }
//  }
 
//  for(let i=0; i<8;i++){
    
//      if(ededler[i]%3==0){
//        console.log(ededler[i]);
//        }
//     }

    //2ci sual//
    //3cu sual//
    //   4cu sual //
//  for(let i=0; i<8;i++){
//         if(ededler[i]%10==7){
//           console.log(ededler[i]);
//           }
//          }
     //  padsah suali//

//  let a=(0.024*(2**64))/1000
//   console.log(a);


// toplam=0
// for(let i=0; i<7;i++){
//     if (ededler[i] % 2 === 1){ 
//         toplam=toplam+ededler[i]
//     }
    
// }
// console.log(toplam);
// for(let i=0; i<8;i++){
//     if(ededler[i]%3==0){
//        console.log(ededler[i]);
//     }   
// }


// let obj={
//     first:function(){
//         console.log('First')
        
//     },
//     second:function() {
//         console.log('Second')
//     },
//     third:function(){
//         console.log('Third')
//     }
    
// }
// obj.first().second().third()
// obj.second().first()

    
// function touch() {
//     var btn=document.createElement("");
//     document.body.appendChild(btn);
   

// yoxlama 1-----------------------------------------------------------

// }
// function myfunction () {
//   document.querySelector(".elem").style.backgroundColor ="red";
  
// // console.log("isleyir");  evvelce isleyib islememeyin yoxladim  
// // }
// function changeImg(elem) {
//   let boximg=elem.querySelector('img').getAttribute('src');
//   document.querySelector('.big-box img').setAttribute('src',boximg);
// }
// // function after(ele){
// //   let boxim=ele.querySelector('img').getAttribute('src');
// //   if () {
    
// //   }
// // }
// // ---------------------------------------------
// // function salam(){
// //   let div = document.createElement("DIV");
// //   document.body.appendChild(div);
// // }

  // let button=document.createElement("button");
  // button.innerHTML="TRY";
  
  // document.querySelector('.box').appendChild(button);

  // button.addEventListener("click", function(){
  //   document.querySelector('.box').style.backgroundColor='red';
  // })
  
  
  let box = document.querySelector(".box");
  let pos=0;
  let po=0;
  function lef(){
    pos-=10;
    box.style.left =`${pos}px`;
  }
  function rig(){
    pos+=10;
    box.style.left =`${pos}px`;
  }
  function bot(){
    po+=10;
    box.style.top =`${po}px`;
  }
  function to(){
    po-=10;
    box.style.top =`${po}px`;
  }


