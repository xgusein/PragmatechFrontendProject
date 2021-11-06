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
// // pars int tam reqem dondurur
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

// let tim = Date();
// console.log(tim);
// var timA = new Date('5/11/1965 14:50:10');
// var timB = new Date(2010,7,24,14,50,10)
// console.log(timB);
// console.log(timA);
// var timC = new Date('1/1/1990');
// var dayofMonth = timC.getDate();
// timC.setDate(dayofMonth-1);
// console.log(timC);
// var start = new Date('1/1/1990');
// var end = new Date('1/1/1991');
// var millisaniye = end - start;
// var saniye = millisaniye /60;
// var deqiqe = saniye /60;
// var saat = deqiqe/60;
// console.log('millisaniye :'+millisaniye);
// console.log('saniye :'+saniye);
// console.log('deqiqe :'+deqiqe);
// console.log('saat :'+saat);
// //yas hesablamaq:
// var brithiday = new Date('8/1/1985');
// var ageMis = Date.now() - brithiday.getTime();
// var ageDate = new Date (ageMis);
// console.log(ageDate.getFullYear() - 1985);
// //------------------------------------------------------------------------
// var eightmarch = new Date();
// eightmarch.setHours(0,0,0,0);
// eightmarch.setFullYear(2022);
// eightmarch.setDate(8);
// eightmarch.setMonth(3);
// while(eightmarch.getDay() !=0){
//     eightmarch.setDate(eightmarch.getDate()+1)

// }
// console.log(eightmarch);
// //----------------------------------

// Numbers and Number metodlari

let val;
val = Number('10');
val = parseInt('10.5');
val = parseFloat('10.5');
val = parseInt('a10a');
val = isNaN('10');
var num = 10.12456789;
val = num.toPrecision(6); ////////////// 6-ci reqeme kimi yazir sonu yuvarlaqlasdirir.
val = num.toFixed(2); //// . den sonraki reqemleri yazir amma yene yuvarlaqlasdirir
val = Math.PI;
val = Math.round(2.45);//en yaxin sayiya yuvarlaqlasdirmaq
val = Math.ceil(2.5);//=>3 ozunden sonrakina hemise yuvarlaqlasdirir.
val = Math.floor(5.7);//=>5 ozunden evvele edir.
val = Math.sqrt(64);// =>8 koke salir.
val = Math.pow(2,4);//2 usdu 4 .
val = Math.obs(-100);// pozitif edir.
val = Math.min(1,2,3,4,5,6,7,8,9);// minimum sayi gosterir
val = Math.max(1,2,3,4,5,6,7,8,9);// max sayinin gosterir
val = Math.random();// Random sayi gestirer
console.log(val);
console.log(typeof val);