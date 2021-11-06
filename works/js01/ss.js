// var customerName = 'Zaur';
// var customerLastName = 'Rasulov';
// var fullName = 'Zaur Rasulov';
// var customerId = '262136';
// //obj
// var address ={
//     city: 'Baku',
//     building: 'Khudu Mammedov'
// }
// //array
// var hobbies = [ 'cinema','music'
// ]
// var order1 =Number('100');
// var order2 =Number('200');
// var total = order1+order2;
// console.log(total); 
// // pars int
// var order3=parseInt('105.2');
// var order4=parseInt('50.5');
// var totalnum2= order3+order4;
// console.log(totalnum2);
// // yas hesabla
// var yasIl=1895;
// console.log(new Date().getFullYear()-yasIl);
// // uzunluq hesabla
// var uzun="salam qaqa necesen";
// console.log(uzun.length)


//------------------------------------------------------------------------------------------------------

// // 1- Aritmetik Operatirlar
// let val;
// const a=10;
// const b=6;
// const d=6;
// let c=3
// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = c++;
// // console.log(val);

// // 2- Atama Operatirlar
// val = a ;
// val +=a; // val=val+a;
// val /=a //val=val/a;
// val *=a // val= val*a;
// val %=a // val= val%a; 

// // 3- karsilastirma
// val= a==b;
// val= b==d; //reqem beraberliyi
// val = b===d; // type ve reqem beraberliyi
// val =b==="d";
// val =a!=b; //deyil

// //4- mantiksal operatorler
// //&&(and)
// (a>b) && (a>c)
// //true&&true =>true
// //false&&true =>false
// //false&&false =>false

// // ||(or)

// //true&&true =>true
// //false&&true =>true
// //false&&false =>false

// //!(not)
// //!true =>false
// //!false =>true


// console.log(val);

//-----------------------------------------------------------------------------------------------------------------------------------
//date object

// let d= new Date();
// let brithday = new Date(2002,08,23);
// //set methods
// d.setDate(20);

// //get methods
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getSeconds());

// console.log(d.getFullYear()-brithday.getFullYear());

// console.log(d);
// console.log(typeof d);

let tim = Date();
console.log(tim);
var timA = new Date('5/11/1965 14:50:10');
var timB = new Date(2010,7,24,14,50,10)
console.log(timB);
console.log(timA);
var timC = new Date('1/1/1990');
var dayofMonth = timC.getDate();
timC.setDate(dayofMonth-1);
console.log(timC);
