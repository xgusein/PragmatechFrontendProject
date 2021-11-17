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

// let val;
// val = Number('10');
// val = parseInt('10.5');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// var num = 10.12456789;
// val = num.toPrecision(6); ////////////// 6-ci reqeme kimi yazir sonu yuvarlaqlasdirir.
// val = num.toFixed(2); //// . den sonraki reqemleri yazir amma yene yuvarlaqlasdirir
// val = Math.PI;
// val = Math.round(2.45);//en yaxin sayiya yuvarlaqlasdirmaq
// val = Math.ceil(2.5);//=>3 ozunden sonrakina hemise yuvarlaqlasdirir.
// val = Math.floor(5.7);//=>5 ozunden evvele edir.
// val = Math.sqrt(64);// =>8 koke salir.
// val = Math.pow(2,4);//2 usdu 4 .
// val = Math.obs(-100);// pozitif edir.
// val = Math.min(1,2,3,4,5,6,7,8,9);// minimum sayi gosterir
// val = Math.max(1,2,3,4,5,6,7,8,9);// max sayinin gosterir
// val = Math.random();// Random sayi gestirer
// val = Math.floor(Math.random()*10);
// console.log(val);
// console.log(typeof val);
//------------------------------------------------------
//number metoduna uygun calismalar
//1
// var num =15.123456789;
// console.log(num.toPrecision(3));
// console.log(num.toFixed(3));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.min(1,20,15,17,80));
// console.log(Math.max(1,20,15,17,80));
// min = 50;
// max = 100
// console.log(min+Math.random()*(max-min));

//String
// const Fristname = "Sadik";
// const lastName ="Turan";
// const age =35;
// let val;
// // String contact;
// val = Fristname +""+lastName;
// val = 'Sadik';
// val += ' Turan';
// val = 'Benim adim'+Fristname+''+lastName+' ve yasim ' + age +"izmit'te yasiyorum.";

// // string concat
// val =Fristname.concat('',lastName);
// // string length
// val = val.length;
// // string uppercase - lowercase
// val = val.toUppercase();
// val = val.toLowercase();

// val = val.indexOf('x')// yerin gosterir ve eeger yoxdursa -1 gosterir
// //substring
// val = val.substring(3,5);//  3den baslayir 5e kimi hamsin gosterir
// //slice
// val = val.slice(5);// = yuxardakina 5 yazanda 5den sna kimi hamsi yazilir.
// //replace deyisdirir
// val = val.replace('sadik', 'cinar');//ilki deyisir sonda yazilana
// //trim basdaki sondaki bosluq alinir
// val = val.trim();
// //split ayirmaq
// val = hobbies.split(',');// ayirir ve objye donur

// console.log(val);
//Template Literals


//diziler - dizi metodlari // arrays
// let names = ['Anar','Zaur','Tomrul','Kamil'];
// let years = [1995,2017,2002,2005];
// let mix = ['Sabir','Ada',1996,null,undefined,['kino','qelem']];

// // get array items
// console.log(names[0]);
// console.log(names[3]);

// //set array item hansisa elementi deyisir
// names[0] ='emel';// istenilen yere qoyulur
// names[names.length]='ehmed'; // sonuncu elave edir.
// // add item 
// years.push(1986);
// years.unshift(2001);// en basa atar
// // remove item 
// years.pop(); // bele yazilsa sondaki siliner
// years.shift(); // basdaki siliner
// // indexof
// let index = names.indexOf('ada');
// console.log('index :'+index);
// //reverse  tersden yazir 
// names.reverse();
// // sort
// years.sort() // reqemleri balacadan boyuye duzur ve yaxud striinglerde herfleri sirasina gore duzur

// //concat arraylari  birlesdirme

// let val = years.concat(names);// years in sonuna names elave olundu
// console.log(val);

// // splice 
// names.splice(2,0,'seda');//2ci elementden sonra seda yazilsin 0 yerine 1 olsa idi 2ciden sonraki 1ci elementi silib yerine seda yazacaqdi
// names.splice(0,1,);// ilk elementi sildirdi

// //find
// function over18(year) {
//     let age = 2018 - year;
//co     return age>=18
// }
//  let val = years.find(over18);
// console.log(val);



// //filter
// function over18(year) {
//     let age = 2018 - year;
//     return age>=18
// }
//  let val = years.filter(over18);
// console.log(val);

// console.log(names.length);
// console.log(names);
// console.log(typeof names);

// console.log(years);
// console.log(mix);

// let car = ['Bmw','Mercedes','Opel','Mazda']
// a = car.length;
// console.log(a);
// console.log(car[0]);
// console.log(car[3]);
// console.log(car.push('Renault'));
// // arr[arr.length] = ""
// console.log(car.unshift('Toyota'))
// car.shift('Bmw');
// car.pop('Renault');
// car.reverse();
// car.sort();
// console.log(car.indexOf('Opel'));
// console.log(arr.includes('Opel'));
// var str = "Chevrolet,Dacia";
// var arr2 =  str.split(',');
// console.log(arr2);
// let arr3 = console.log(car.concat(arr2));
// console.log(arr3.splice(6,2));
// var studentA =  ['Yigit','Bilgi',2010];
// var studentB = ['Sena','Turan',1999];
// var studentC = ['Ahmet','Turan',1998];
// var students =[studentA,studentB,studentC];
// console.log(students[0]);
// console.log(students[0][0]);
//------------------------------------------------------------------------------------------

// if / else statements
// const firstName='Sena';
// const age = 19;
// const isStudent = true;
// const school = 'university';
// if (firstName == 'Sena'){
//     console.log('Salam Sena');
// }

// if (age == 19) {
//     console.log('yasiniz 19');//=== etsek tipinde yoxlayir
// }

// if (isStudent){
//     console.log('Hello Student');
// }else{
//     console.log('Hello Whats up');
// };

// if (age>=18){
//     if ((school == 'university') || (school == 'high school')) {
//         console.log('prava ala bilersiz');
//     } else{
//         console.log('tehsiliniz yetersizdi')
//     }
// }else{
//     console.log('yasiviz catmir');
// };

// if (age>0 && age<12 ) {
//     console.log(`${firstName} is a child`);
// }else if (age >=13 && age <=19){
//     console.log(`${firstName} is a teenager`);
// }else{
//      console.log(`${firstName} is a adult`);
// };

// //undefined
// if (typeof id  !== 'undefined') {
//     console.log('id: '+id);    
// }else{
//     console.log('no id');
// }
//-------------------------------------------------------------------------------
//switch
// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = 'Pazar';
//         break;
//     case 1:
//         day = 'Pazartesi';
//         break;
//     case 2:
//         day = 'Sali';
//         break;    
//     case 3 :
//         day = 'Carsamba';
//         break;
//     case 4:
//         day = 'Persembe'
//         break;
//     case 5:
//         day = 'Cuma'
//         break;
//     case 6:
//         day = 'Cumartesi'
//         break;    
// };
// console.log(`bugun gunlerden ${day}`); 

// Calisma
// var trafigeCikis = new Date('04/20/2016');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// console.log(trafiktekiMs);

// var resault = prompt("Who's there");
// if (resault == 'cancel') {
//     console.log('cancelled');
// }else if (result =='Admin') {
//     var password = prompt('enter your password');
//     if (password =='cancel') {
//         console.log('cancelled');
//     }else if (password== '1234') {
//          console.log('welcome Admin');
//     }else{
//         console.log('wrong password');
//     }
// }else{
//     console.log('I do not know');
// }
//-----------------------------------------------------------------------------------------



// Object Literals

// let val;
// let person = {
//     firstName : 'Cinar',
//     lastName : 'Turan',
//     age : 7,
//     hobbies : ['music','game'];
//     address : {
//         city : 'Kocaeli',
//         country : 'Turkiye'
//     }
// };

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city'];
// console.log(val);

// let people = [
//                 {firstName : 'Cinar',lastName:'Turan'},
//                 {firstName : 'Sena',lastName:'Turan'},
//                 {firstName : 'Seda',lastName:'Turan'},
//               ];
// val =  people[2];
// val =  people[2].firstName; 


// console.log(val);            
// console.log(people);              
//-------------------------------------------------------------------

//Loops(Donguler)



// for loop

// for (let i=1; i<=10; i++){
//     if (i==3) {
//         console.log('my favorite number'+i);
//         continue;
//     }
//     if (i==6) {
//         console.log('unlucky');
//         break;
//     }
//     console.log(i);
// };

//while loop

// let i=0;
// while(i<0){
//     console.log(i);
//     i++;
// };

// do -While loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// sonuc=1;
// for(let i=10;i>0;i--){
//    if (i%2==0) {
//        sonuc*=i;
//    }
// }
// console.log(sonuc);
// for (let i=0;i<10;i++){

//     for(let j=0;i<10;i++){
//         console.log(`i : ${i} j : ${j}`);
//     }
// }

// // Loops in Array & Objects

// let cars =['Bmw','Mercedes','Toyota'];
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// // for-in
// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }

// //foreach
// cars.forEach(function(item) {
//     console.log(item);
// });

// // map : returns an array

//task
// var hak = 5;
// var tahmin;
// var sayi = Math.floor((Math.random()*10)+1);
// console.log(sayi);
// while (hak>0){
//     hak--;
//     sayac++;
//     tahmin = Number(prompt('bir sayi giriniz'));
//     if (sayi == tahmin){
//         console.log(`Tebrikler ${sayac} defada bildiniz`);
//         break;
//     }else if (sayi>tahmin){
//         console.log('asagi');
//     }else{
//         console.log('yuxari');
//     }
//     if (hak==0) {
//         console.log('hakkiniz bitti' +sayi);
//     }
// }