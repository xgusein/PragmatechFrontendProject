Javascript ən çox soruşulan suallar və cavabları
1)Array slice() metodunun məqsədi nədir.
JavaScript slice() methodu seçilmiş Array’dən qeyd olunmuş aralığdakı elementlerin kopyasinin yeni bir Array’də döndürməmizə imkan verir.
Bir Array’dəki bir sətir və ya nömrəyə edilən dəyişikliklər digərinə heç bir şəkildə təsir göstərmir. Orijinala və ya onun surətinə yeni element əlavə olunarsa, o, digər massivə heç bir şəkildə təsir etməyəcək.
Qeyd: Orijinal Array dəyişdirilməyəcəkdir.
Sintaksis:
array.slice(start, end)
Qeyd: slice() metoduna arqumentlər yazılmasa, verilən array’dan bütün elementləri çıxarar və onu cavab olaraq döndərər.
var arr = [45,82,18,27,47];
var new_arr = arr.slice();
console.log(arr); // [24,82,18,27,47]
console.log(new_arr); // [45,82,18,27,47]

Start: istəyə bağlıdır.yəni seçimin neçənci elementdən başlayacağını bir tam sayı (Array’ın ilk elementi 0'dır) ilə qeyd edirik. Əgər Array’ın sonundan başlanarsa ilk element “-1”dir.
Nümunə 1: Bu nümünədə slice() methodu, array’I index 4’dən başlayaraq və index 9’dən daha balaca bütün elementleri daxil edərək verilən array’dan çıxarar.
var arr = [45,82,18,27,47,59,21,36,68,97,12];
var new_arr = arr.slice(2,9);
console.log(arr); // [45,82,18,27,47,59,21,36,68,97,12]
console.log(new_arr); // [18,27,47,59,21,36,68,97]

End: istəyə bağlıdır. Seçimin harda bitəcəyini göstətən  bit tam sayı. Yazılmasa başlanğıc yerinden  array’in  sonuna qədər olan bütün  elementləri göstərər. Bir array’in  sonundan seçim etmək üçün mənfi rəqəmlərdən istifadə olunur.
Nümunə 2:
var arr = [5,8,9,"a","s",8,9,3];
console.log(arr.slice (-4, 7)); //["s",8,9]

2) Array splice metodunun məqsədi nədir.
JavaScript splice () üsulu , mövcud elementləri  silmək,yeni elementlər əlavə etməyə kömək olur.Metot arrayın strukuturun dəyişir.
Sintaksis:
Array.splice(index,num);
Burda index silinəcək ilk elementin yerini göstərir, num isə silinəcək element sayını göstərir.
Nümunə 1:
let adlar = ['Zaur','Rasim','Aysel','Arzu'];
let sil = adlar.splice(1,2); // Rasim,Aysel,Arzu
console.log(sil); // Zaur

Nümunə 2:Arraya element əlavə etmək.
let adlar = ['Zaur','Rasim','Aysel','Arzu'];
let yaz = adlar.splice(2,0,"Isa","Nara");
console.log(yaz); //['Zaur','Rasim','Aysel','Isa','Nara','Arzu']

3) setTimeout-un istifadəsi nədir.
setTimeout metodu adındaki time sözündəndə başa düşülür ki, funksiyaların və yaxud bəlirli bir işin vaxtı ilə əlaqədər bir işdi.  Yəni hər hansi bir iş  etdikdə o and deyil hər hansi bir kod oxunduqdan bir neçə dəqiqə sonra işləməyini istəyirik bu zaman biz  setTimeout metodundan istifadə edirik. setTimeout metodu bir funksiyannı sadəcə 1 dəfə çağırar. setTimeout’un funksiyasını çağırmasını dayandırmaq üçün
clearTimeout() metodu istifadə olunur
Sintaksis:
setTimeout(function(){},60000)

Qeyd: 1dəqiqə üçün 60000 dəyərini yazmalıyığ.
Nümunə 1: 6 saniyə sonra ekranda Salam sözü çap olunsun.
function myFunction() {
myVar = setTimeout(function(){ alert("Salam") }, 6000);
}

4) setInterval nə üçün istifadə olunur.
.setInterval(): Millisaniy cinsindən müəyyən aralığlarda bir funksiyanı çağırmamıza kömək edər.
Sintaksis:
setInterval(function,miliseconds);

Nümunə: Burada 9 saniyədən bir  ekrana alert ilə Salam xəbərdar edəcək.
setInterval(function(){
alert("Salam");},9000);
Qeyd: 1 saniyə üçün 1000 dəyərini yazmalıyığ.
5) Təsadüfi tam ədədləri necə yaradırsınız.
Bunun üçün bizə Math.random() və Math.floor() metodları kömək edəcək. İlk olaraq gəlin bu metodlarla tanış olaq.
Math.random() -  bu metod bizə (0;1) aralığında müxtəlif  rəqəmlər verir.
Math.floor() – bu metod isə bizə  aldığımız rəqəmləri yuvarlağlaşdırmağımıza kömək edir.
Random rəqəm yaratmaq üçün.
Math.floor(Math.random() * 10)
Qeyd: (0;100) aralığı üçün 100-ə vurmaq lazımdır.
Burada biz  [0;10] aralığında rəqəmlər əldə edirik.  [1;10] aralığında ədədlər əldə etmək üçün üzərinə 1 əlavə olunacaq.
Nümünə:
Math.floor(Math.random() * 10) + 1;

6) JavaScript istifadə edərək formanı necə təqdim edirsiniz.
Bunun üçün bizə form.submit() metodu lazımdır. Bu metod bizə öz formumuzu dinamik yaratmağa və serverə göndərməyimizə imkan verir.
İlk olaraq form elementinin iki əsas atributu var. Action and metod.
Action: form elementlərinin məlumatlarını emal edir.
Metod: <form> elementinin metod atributuna ekvivalent olan HTTP metodudur.
7) JASON(JavaScript Object Notation) nədir.
JASON insanlar üçün oxuna bilir informasiya saxlama və alışveriş formatıdır.  Bir JASON ancağ mətn tutar və .json uzantısın işlədər.
JASON iki fərqli əsas elementdən açar və dəyərdən mövcuddur.
Açar -  həmişə dırnaq içərisində olan sətirdir.
Dəyər – string,array,number,object , Boolean ola bilər.
Nümunə 1:
{"sinif":"8b", "şagird_sayı":"6" } // Burada sinif açar , şagir_sayı dəyərdir

Dəyərin tipləri :
1) Arrays
Onlar kvadrat mötərizə ilə başlayır və bitir və içindəki hər bir dəyər vergüllə ayrılır. Bir array JSON  elementlərə sahib ola bilər, yəni eyni açar/dəyər kanseptini istifadə edər.
Nümunə 2:
"Şagirdlər":[
{"ad":"Sara", "soyad":"İbadova"},
{"ad":"Azər", "soyad":"Əliyev"},
{"ad":"Həsən", "soyad":"Məmmədov"}
]
2) Obyekt 
Qıvrımlı mötərizələrlə göstərilir. Buruq mötərizədə olan hər şey obyektin bir hissəsidir. Artıq bir dəyərin bir obyekt ola biləcəyini öyrəndik. Bu, "foo" deməkdir və müvafiq obyekt açar/dəyər cütüdür.
Nümunə 3:
"Şagird" : {
"ad" : "Əli"
}
3) Boole dəyəri:
Aşağıda göstərildiyi kimi true (doğru) və ya false (yanlış) dəyər kimi istifadə edilə bilər:
{“evli”:”false”)

4. Boşluk (Null).
{“ad”:”null”}


8) Sətirin ilk hərfini böyük hərflə necə yazırsınız.
Nümunə 1: ilk olaraq slice metoduyla yazmağı yoxlayaq.
var x = document.getElementById("div");// yazainin olduğu qutu seçilir
var string = input.value;// yazinin dəyəri tapılır
x.innerHTML = string[0].toUpperCase() +
string.slice(1);

9) Bir stringin başqa bir stringin başlamasını necə yoxlamaq olar.
Bunun üçün bizə startsWith()  metodu lazımdır.
Sintaksis:
str.startsWith(axtarılansöz[, yeri])
Nümunə 1: Bir stringin “salam” sözü ilə başlayırsa bizə true verəcək əgər başlamasa false verəcək.
'salam Azər '.startsWith('salam') // true
'salam Azər'.startsWith('Azər') // false

Position isə bizə hardan axtarmağa başlayacağmızı göstərir.
Nümunə 2:
'Bu gün biz stringin nə ilə başladığını tapmağı öyrəndik'.startsWith('ilə', 5) // true

10) length xüsusiyyəti funksiya tərəfindən gözlənilən parametrlərin sayını göstərir.
Bunun üçün bizə length kömək edir.
Sintaksis:
function.length

Burda function bizim funksiyanin adıdır.
Nümunə 1:
function nümunə(a,c,b){}
console.log(nümunə.length);

11) Exec metodunun məqsədi nədir.
JavaScript exec funksiyası düzənli bir ifadə ilə axtarış edər.
Sintaksis:
var sonuc = söz.exec("cümlə");

Nümunə:
var ifade = /salam/;
console.log(ifade.exec("Salam necəsən?"));

Əgər axtarılan söz varsa  nəticədə axtarılan söz yazılacaq.
Axtarış ifadəsi varsa tapılmış sözü, yoxsa null qaytarır.
Nümunə 2:
var ifade = /Sən/;
console.log(ifade.exec("Salam necəsən?"));
Burada axtarılan ifadə nümunədə tapılmadığı üçün o null qaytaracaq.
12) Javascript-də şərti operator nədir.
Üçlü operator şərti qiymətləndirir və şərt əsasında kod blokunu icra edir.
vəziyyət ? ifadə1 : ifadə2
Burada  əgər vəziyyət ifadə1 isə true, ifade2’dirsə false olacaq.
Nümunə 1:  Şagirdin imtahandan keçdib-keçmədiyini yoxlayaq.
let bal = prompt('Enter your marks :');
// vəziyyəti yoxla
let nəticə = (bal >= 40) ? 'keçdi' : 'kəsildi';
console.log(`Şagir imtahandan ${nəticə}.`);

Biz 3-lü operatorun yerinə if...else istifadə edə bilərik hər ikisində də eyni nətic alınacaq.
Nümunə 2:
let bal = prompt('Enter your marks :');
let nəticə ;
if(bal>50){
nəticə = "keçdi";
}else{
nəticə = "kəsildi";
}
console.log(`Şagir imtahandan ${nəticə}.`);

İç içə üçlü operatorlar.
Burada biz 3 dənə şərt  qoyuruğ.
Nümunə 3:
// proqram insanın uşaq qadın yoxsa kişi olduğunu yoxlayacaq
let insan = 3;
let nəticə = (insan > 0) ? (kişi == 0 ? "Qadın" : "kişi") : "uşaq";// qadın 0 dan böyük ədəd daxil etdikdə qadın, 0 etdikdə kişi, mənif ədələrdə uşaq olacaq
console.log(`insan ${nəticə}dır.`);

13) Şərti operatorda zəncirləmə tətbiq edə bilərikmi?
Bəli edilə bilər bunun üçün  biz ilk şərtdən sonra if..else şərtlərini ard-arda yazmalıyıq.
Sintaksis:
function şərtlərdəZəncirləmə(parametr) {
if (vəziyyət1) { return dəyər1; }
else if (vəziyyət2) { return dəyər2; }
else if (vəziyyət3) { return dəyər3; }
else { return dəyər4; }
}

14) Hər hansı bir obyektin açarlarının siyahısını necə əldə etmək olar.
Bunu etmək üçün bizə object metodlarından object.keys( ) metodu bizə kömək edir. Bu metodla biz açarları array formasına gətirib ekrana yazdırırıq.
Nümunə:
let şagird = {
adı: "Sabir",
soyadı:"Rasulov",
yaş:26
};
console.log(Object.keys(şagird)); // ["şagird","adı","soyad","yaş"]

15) Web Speech API nədir.
Günümüzdə səsli zəng vurma və yazmağı hamımız istifadə edirik. Bəs kompyuterdə danışdığlarmızı yazıya necə çevirək?
Bunun üşün Google bizə Web Speech API ile bir çox dildə danışaraq, bu səsləri yazıya çevirir.İstəsəniz danışığmızı mail olarağ kopyalayıb işlədə bilərik.
Web Speech API proqramı web saytlarda səsli zənglər üçündə istifadə oluna bilər.
Burda APİ bir nümunəsin göstərdik.
speechRecognition = new webkitSpeechRecognition();
speechRecognition.onresult = console.log;
speechRecognition.start();

16) AJAX nədir.
Bu, arxa fonda serverə istənilən sorğunu emal etməklə web proqramların asinxron işləməsinə imkan verən web inkişaf texnikalar toplusudur. Yəqinki heçnə başa düşülmədi
Bizə eyni zamanda serverə istənilən sorğunu emal etməsini və web proqramların işləməsinə imkan verir.
 
Həm JavaScript, həm də XML AJAX eyni anda işləyir. Buna görə də, AJAX-dan  istifadə edilən istənilən web tətbiqi bütün səhifəni yeniləməyə ehtiyac olmadan məlumatları göndərə və qəbul edə bilər.
AJAX’ın Pratik Örnekleri:
Məsələn 90-lar da Googledə söz yazarkən hərdəfə açar sözlər yeniləndiyi üçün səhifədə yenilənirdi. Amma sonrada Google AJAX istifadə etdikdən sonra bu problem aradan qalxdı.
Günümüzdə Twitter yenilənmələri üçün AJAX’ı istifadə etməyə başladı. Artıq, Twitter səhifə yeniləmədən rəqəmləri dəyişir.
17) Wrapper obyektləri nələrdir.
JavaScript obyektləri birləşik dəyərlərdi. Yəni xüsusiyətlərin koleksiyası ve yaxud adlandırılmız dəyər. Bir dəyərin xüsusiyətlərinə “.”  ilə əldə edərik. Məsələn, x obyektinin y metodunu çağırmaq istəyiriksə, x.y() yazarığ.
 
18) Konsol obyektindən istifadə edərək məlumatları cədvəl formatında necə göstərmək olar.
Bunun üçün  bizə console.table() əmrini istifadə edəcəyik.
Sintaksis:
console.table(ad)// array adı yazılır

Nümunə 1:
 
Ama biz field(alan) istifadə edərək yazdırmaq istəsək.
Nümunə 2:
 
19) Konsol obyektinin dir metodunun məqsədi nədir.
console.dir() müəyyən edilmiş JavaScript obyektinin bütün xassələrini və elementləri indexləri ilə konsolda görmək üsuludur, onun köməyi ilə proqramçı obyektin xassələrin asanlıqla əldə edə bilər.
Sintaksis:
console.dir(obyekt);
Nümunə:
 
20)Məlumatlarla birlikdə array necə yaradılır.
Bunun üçün bizə new Array və fill metodu lazimdir.İlk olarağ bu metodlarla tanış olaq.
new Array() konstrukturu təzə array yaratmağ üçün istifadə olunur.
new Array(arrayinuzunluğu)

Array.fill() metodu : Arrayı müəyyən bir statik dəyərlə doldurmaq üçün istifadə olunur. Dəyər bütün arrayı doldurmaq və ya arrayın bir hissəsini doldurmaq üçün istifadə edilə bilər.
Qeyd: Orijinal arraya yazar.
ValueI:Vacibdir.Arrayı dolduracaq dəyər.
Nümunə:
var meyve = ["Banan", "Portağal", "Vişnə", "Manqo"];
console.log(meyve.fill("Alma"));
// ["Alma", "Alma", "Alma", "Alma"]

Bunları öyrəndikdən sonra sualımızı cavablandıra bilərik.
var newArray = new Array(6).fill("Salam");
console.log(newArray); // ["Salam", "Salam", "Salam", "Salam", "Salam"]

21) İki və ya daha çox arrayı necə birləşdirə bilərsiniz.
Bunun üçün bir neçə yol var. Bugün biz ən asand yolun öyrənəcəyik. Contact metodu bu yol funksiyanal üsüldur.
Sintaksis: İki formada yazmağ olur.
1.
//  array1 və array2 birləşməyi
const birləşmə = array1.concat(array2);
2.
//  array1 və array2 birləşməyi
const birləşmə = [].concat(array1, array2)
Qeyd: Burda arrayda dəyişiklik olmur, amma birləşmə nəticəsində yeni bir array yaranır.
Öyrəndikmizi sınayaq:
const işmaşınları = ['Tır', 'Qazel'];
const maşınlar = ['Opel', 'Ford'];
const bütünmaşınlar1 = işmaşınları.concat(maşınlar);
const bütünmaşınlar2 = [].concat(işmaşınları, maşınlar);
bütünmaşınlar1; // ['Batman', 'Superman', 'Joker', 'Bane']
bütünmaşınlar2; // ['Batman', 'Superman', 'Joker', 'Bane']

22) ArrayBuffer nədir.
Fikirləşək ki, bir Array yaratmağ istəyirik amma həcmini tam olarağ bilmirik. Bu halda ilk ArrayBuffer yaradırıq, elementləri əlavə edib sonra toArray çağıraraq Array yaradırıq.
let buffer = new ArrayBuffer(16);
alert(buffer.byteLength); // 16

23) Javascript’də Scope nədir.
 
Scope, İş vaxtı ərzində kodunuzun müəyyən hissəsində dəyişənlərin, funksiyaların və obyektlərin əlçatanlığıdır. Başqa sözlə, Scope kodunuzun müəyyən hissələrində dəyişənlərin və s. görünməsidir.
Javascript dilində iki tip Scope vardır:
1)Global Scope
2)Local Scope
Əgər dəyişən funksiya daxilində elan edilirsə, o, Lokal Scope, funksiyadan kənarda elan olunarsa, Qlobal Scope olacaq. Bütün funksiyalar öz daxilində yeni Scope yaradır.
24) JavaScript Service Workers nədir.
 
Brauzerin görüntülənən web saytında asılı olmayaraq arxa planda işləyə biləcəyi JavaScript əmridir.Brauzerdə olmaq (müasir brauzerlər) backend və veb-saytın müstəqilliyi vebsayta daxil ola biləcəyi yeni imkanlar(service worker API) təmin edir.
JavaScript Service Workers ilə nə edə bilərik.
JavaScript Service Workers  ən əhəmiyyətli üstünlüyü əlaqə kəsildiyi zaman istifadəçi təcrübəsinin kəsilməməsidir. Bundan sonra, bildiriş göndərilməsi və performans artımı üstünlüklərə görə ifadə edilə bilər.
25) Cookie nədir.
Cookie serverlə müşdəri arasında  saxlanılan məlumat miqdarıdır. Veb-brauzer bu məlumatı axtarış zamanı saxlayır. Cookie çox vaxt string kimi nöqtəli  vergülə ad-dəyər cütü şəklində saxlayır. O, istifadəçinin vəziyyətini saxlayır və bütün internet səhifələri arasında istifadəçinin məlumatlarını yadda saxlayır. 
Gəlin cookie də təyin etmək(set) və əldə etmək  (get) necə olur ona baxaq:
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<input type="button" value="setCookie" onclick="setCookie()">
<input type="button" value="getCookie" onclick="getCookie()">
<script>
function setCookie()
{
document.cookie="istifadəçiadı=Huseyn İbadzade";
}
function getCookie()
{
if(document.cookie.length!=0)
{
alert(document.cookie);
}
else
{
alert("Cookie yoxdur");
}
}
</script>
</body>
</html>
26) web storage niyə ehtiyac duyuruğ.
web storage istifadəçilərə məlumatları öz brauzerlərində yerli olaraq saxlamaq imkanı verir. Yəni, biz sadə verilənlər bazası yaradırıq. HTML5 web storage ilə məlumatın saxlanılması Cookie’lərə nisbətən daha sürətli və təhlükəsizdir. HTML5 web storage ilə depolamağ mümkündür və bu web saytın performansına heç bir təsir göstərmir.
 
HTML5 web storage məlumatları saxlamağın iki yolu var.
1.Local Storage : İstifadə müddəti bitmədən məlumatları saxlayır.
2. Session Storage : Yalnız bir seans üçün məlumatları saxlayır.
Local Storage və Session Storage haqqında daha ətraflı növbəti məqaləmdə danışacağam.
27) web storage brauzerinin dəstəyini necə yoxlaya bilərsiniz.
Bunun fəqli üsulları var. Bunlardan ən sadəsi aşağıdakıdır.
Nümunə:
if(window.localStorage!==undefined){
alert('Mövcuddur')
}else{
alert(Sizin brauzer web storage dəsdəkləmir');
}

28) JavaScript-də strict mode nədir.
Bu strict kontekst bəzi hərəkətlərin qarşısını alar və  çoxlu istisna yaradar. Belə də demək olarki strict mode xətaların qarşısın alar və ya qadağan edər.
JavaScript-də strict mode etdiyi işlər:
•	Səssiz xətaları , xətaları silmək üzərə dəyişdirərək çıxarır.
•	JavaScript matorlarını optimizasiyasını çətinləşdirən kodları düzəldir.
•	Nisbətən “təhlükəsiz olmayan” hərəkətlər olduğda xətaların qarşısın alar yada çıxardar.
•	Baş qarışdıran və yaxud yaxşı fikirləşməmiş xüsusiyətləri deaktiv edir.
•	Təhlükəsiz kod yazmağı asanlaşdırır.
Qeyd: Strict mode {}  bu tipli blok isfadələrdə işləməz.
İki şəkildə istifadə olunar:
•	Bütün əmir faylı üçün qlobal şəkildə istifadə olunar.
•	Fərdi işlərdə istifadə oluna bilər.
Sintaksis:
1)	Scripts üçün:
'use strict';
var v = "Salam! Mən strict mode script!";

2)	Funksiyalar üçün:
function strict() {
// Function-level strict mode syntax
'use strict';
function nested() { return 'And so am I!'; }
return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }

3)Modullar üçün:
function strict() {
// because this is a module, I'm strict by default
}
export default strict;

29) Typeof operatoru nədir.
Bu operatır verilən dəyişənin növünü müəyyən edər.
Budur Operator növü üçün qaytarılan qiymətlərin siyahısı.
Tip	Operator növü üçün qaytarılan qiymətlərin siyahısı.
Number	"number"
String	"string"
Boolean	"boolean"
Object	"object"
Function	"function"
Undefined	"undefined"
Null	"object"

Sintaksis:
typeof(dəyişən);
Nümunə:
// "string"
document.write(typeof 'Salam'+"<br>")
// "number"
document.write(typeof 25 +"<br>")
// "undefined"
document.write(typeof variable)

30)JavaScrip də tarixlərlə işləmək necə olur.
Web brauzeri işə saldığda və yeni bir səhifəyə girdikdə web brauzer tarix yığınında yeni bir giriş yaradır. Başqa web səhifəyə keçsəniz, web brauzer tarix yığınıda yeni bir giriş yaradır.
Tarix yığını indiki səhifəni və ziyarət etdiyiniz əvvəlki səhifələri saxlayır.
Bunun üçün bizə window.history lazımdır.
Sintaksis:
window.history
Tarix obyekti tarix yığınındakı səhifələr arasında naviqasiya üçün üç üsul təqdim edir:
•	back()
•	forward()
•	go()
1)	Tarixdə geriyə getmək üçün back() metodundan istifadə edirsiniz:
window.history.back();
2)	Eynilə, forward() metodundan istifadə edərək irəli gedə bilərsiniz:
history.forward();
3)	Tarix yığınında xüsusi URL-ə keçmək üçün siz go() metodundan istifadə edirsiniz. go() metodu indiki   səhifəyə nisbi mövqe olan tam ədədi qəbul edir. Cari səhifənin mövqeyi 0-dır.
history.go(-1);

31) ECMAScript nədir.
ECMA - Avropa Kompüter İstehsalçıları Assosiasiyası deməkdir. ECMAScript skript dili üçün standartdır. O, skript dilinin təmin etməli olduğu əsas xüsusiyyətləri və bu xüsusiyyətlərin necə həyata keçirilməli olduğunu müəyyən edir. Javascript ilk olaraq Netscape-də yaradılmışdı və onlar dili standartlaşdırmaq istəyirdilər. Beləliklə, onlar dili standartlaşdırma üçün Avropa Kompüter İstehsalçıları Assosiasiyasına (ECMA) təqdim etdilər. Lakin, Javascript adı ilə bağlı ticarət markası problemləri var idi və standart bu gün də sahib olduğu ad olan ECMAScript adlandırıldı.

32) Javascript-də yeni səhifəni necə yönləndirmək olar.
Bunun üçün bizə window.location obyekti kömək edir.
window.location -  səyfə adresini (URL)  almağ və brauzeri yeni bir səhifəyə yönləndirmək üçün istifadə edilir.
 
window.location da 4 property var:
•	window.location.href
•	window.location.hostname
•	window.location.pathname
•	window.location.protocol
•	window.location.assign()
Bunlar haqqında ətraflı bir sonrakı məqaləmizdə danışılacaq.
•	Başqa səhifəyə yönləndirmək üçün bizə window.location.href propert’si lazımdı.
Sintaksis:
•	window.location.href(index.html)

33) Qüvvədə olan url-ni javascript ilə necə əldə edirsiniz.
URL-i əldə etmək üçün biz document.URL kömək edir.
document.URL- səyfənin linkini döndürən əmirdir. Mövcud səhifənin linkini əldə etməyə və link içərisində parse(ayrışdırma) etməyə istədiymiz an linke bu şəkildə çata bilərik.
Sintaksis:
console.log(document.URL);
F12 və yaxud sağa klik edərək inspect edərək koncolda bunu yazsanız, sizə olduğunuz səhifənin URL-in verəcək.
34) Location obyektinin müxtəlif url xassələri hansılardır.
Location obyektinin 2 xüsusiyəti vardır.
1)properties
2)Methods
Property	Təsvir	Nümunə
Href	bütün URL-i təyin edən sətri təmsil edir.	http://codescracker.com/?test.asp?id=1#start
protocol	URL-in əvvəlində ilk iki nöqtəyə (:) qədər olan sətri təmsil edir, bu da URL-ə giriş metodunu təyin edir.	http: or https:
Host	Hostname və port sətirlərindən ibarətsətri təmsil edir.	https://codescracker.com/
hostname	URl-nin server adını, alt domenini və domen adını göstərir.	codescracker.com
Port	serverin istifadə etdiyi rabitə portunu göstərən sətri təmsil edir.	80
pathname	xüsusi resursa necə daxil ola biləcəyini göstərən URL-nin sətir hissəsini təmsil edir.	test.asp
Search	HTTP URL-də hər hansı sorğu məlumatını təyin edən sual işarəsi ilə başlayan sətri təmsil edir.	id=1
Hash	represents a string beginning with a # specifies an anchor name in an HTTP URL.	start
İlk olaraq property ilə tanış olaq.	
35) PolyFill nədir.
PolyFill, yazmış olduğumuz kodlarıvızı köhnə brauzerlərdə işləməsi üçün ayrı yaratmış olduğunuz dəstəyləyici proqram təminatına deyilir.
Bütün dünyada fərqli brauzerlər və brauzer versiyası vardır, hər birinin müxtəlif xüsusiyyətləri vardır.
Buna görədə, brauzerlər üçün inkişaf elətdirmək çətin bir hala gəlir. Məşhur brauzerlərin ən son versiyaları köhnə brauzerlərin edə bilmədiyi bir çox şeyi edə bilər, lakin siz hələ də köhnə brauzerləri dəstəkləməlisiniz. Polyfills çatışmayan xüsusiyyətləri doldurma ilə yenidən yaratmağa çalışır ki, bu da müxtəlif brauzerləri dəstəkləməyi asanlaşdırır: onları dəstəkləyən və dəstəkləməyən brauzerlərdə ən son və ən yaxşılardan həzz ala bilərsiniz.
 
36)Shaking nədir.
 
37) Normal İfadə nədir (Regular Expression).
Çox zaman RegEx bilinən normal ifadələr mətindəki nümunələri tapmaq üçün istifadə olunan formatlaşdırılmış mətn sətirləridir.Yəni düzənli ifadələrdə axtarma kriteriyaları yaratmağ üçün istifadə edilir. 
Bununla biz dəyərlərin düz və yaxud səhv olub oladığını yoxlayırıq. Məsələn: istifadəçi tərəfdən girilən ad, telefon nömrəsi vs.
Sintaksis:
/pattern/modifier(s);// modifire-dəyişdirici pattern-ifadə
Nümunə:
var axtarılan = /Hüseyn/i;

38) Normal ifadədə (Regular Expression) mövcud olan sətir üsulları hansılardır.
Normal ifadələrdə iki cür sətir metodu var :
1.	search()
2.	replace()
Search metodu – Mətin içində axtarış etmək üçün istifadə olunur.
Məsələn: 
Düzənli ifadədə axtarılan dəyərdə böyük kiçik hərfi qoyulmadan axtarılır.
var mətin = "Salam adım Hüseyn";
  var nəticə = mətin.search(/Hüseyn/i);
  alert(nəticə);
Replace methodu – Mətn içindəki dəyəri başqa bir dəyərlə dəyiştirmək üçün istifadə olunur.
Məsələn:
Hüseyn sözünü Əhmədlə dəyişək.
var mətin = "Salam adım Hüseyn";
  var nəticə = mətin.replace(/Hüseyn/i,"Əhməd");
  alert(nəticə);
39) Normal ifadədə dəyişdiricilər nədir.
Axtarış kriteriyasının böyük kiçik ölçüsünü həssas etmək üçün müntəzəm ifadə atributlarından istifadə olunur.
İxtisas	İzah
i	Bu, böyük hərflərə həssas olmayan axtarışları yerinə yetirir.
g	O, mətn məlumat növündə axtarılan bütün sözlər üzərində işləyir.
m	Çox sətirli axtarışı həyata keçirir.
40)Freez metod nedir.
Metod ona yeni xassələrin əlavə edilməsinə mane olan obyekti dondurur. Bu üsul mövcud əmlakın, atributların və dəyərlərin dəyişdirilməsinin qarşısını alır.
Sintaksis:
Object.freeze(obj)  
Parametrlər:
Obj: Dondurulan object.
41) Xassələri bir obyektdən digərinə necə köçürmək olar.
Bunun üçün bizə object.assign() metodu kömək olur.Müəyyən obyektlərin bütün öz sadalanan xassələrini bir obyektə köçürür və onu qaytarır.
Qeyd: Hədəf obyektindəki xassələr eyni açara sahibdirsə, mənbələrdəki xassələrin üzərinə yazılır.
const ad = {ad: "Hüseyn"};
const soyad = {soyad: "İbadzadə"};
const şəxs = Object.assign(ad, soyad);
console.log(şəxs);
Nəticə: { name: ‘Hüseyn, surname: ‘İbadzadə }
42)Modullar nədir.
İstər ön, istərsə də server tərəfində JavaScript-dən istifadə edirsinizsə, modul istifadəsinə rast gəldiniz və istifadə etmisiniz.
Proqramlarımız böyüdükcə, onu fayıllar halında bölmək istəyərik. Bu fayılları modul olarağ adlandırarığ.
Əvvələr proqram parçaları balaca və sadə idi. Buna görədə modular struktura ehtiyac yox idi. Ancaq sonrada yazılan proqramlar mürəkkəbləşdikcə, JavaScript topluluğu kodu modullarda təşkil etmək üçün müxtəlif yollar tapmışdır.
Modul tək bir fayıldır. Onun  export və import təklifləri funksionallığı modullar arasında dəyişdirməyə imkan verir:
•	export- Açar söz, müəyyən edilmiş fayldan kənarda əldə edilməsi arzu olunan dəyişənləri və funksiyaları gətirir.
•	İmport - başqa moduldan dəyişənləri və funksiyaları idxal etməyə imkan verir.
Nümunə:
Export:
//  modul.js
export function modul(user) {
  alert(`Salam, ${user}!`);
}
İmport:
//  main.js
import {əsas} from './əsas.js';

alert(əsas); // funksiya...
sayHi('Əli'); // Salam, Əli!

43) Qlobal dəyişənlərdən qaçmağınızın səbəbi nədir.
Qlobal dəyişənlərdən qaçmağınızın bir sıra səbəbləri var. Aşağıda ən ayın şəkildə hesab etdiyim şeylər bunlardır:
Münaqişələr: Qlobal dəyişənlər kod bazanız böyüdükcə öz kodunuz və ya istifadə edə biləcəyiniz hər hansı çərçivə və ya plagin tərəfindən ləğv edilmək təhlükəsi altındadır. Bu, izləmək çətin olan səhvləri asanlıqla təqdim edə bilər.
Performans: Kodunuz dəyişənə istinad etdikdə, skript hər hansı bir əsasın əhatə dairəsini keçmək əvəzinə məhdud əhatə dairəsini axtarmaq daha sürətli olur və nəticədə bütün qlobal əhatə dairəsi üzrə axtarışı bitirir.
44) IndexedDB nədir.
Brauzer də işləməkdədir. Verilənlər bazası sistemidir və daha inkişaf etmiş versiyasıdır burda bütün tip dəyərləri saxlaya bilərik.
Verilənlər bazası yaratmaq:
var requestfile = window.indexedDB.open(“file”, 1);
Burda ilk verilənlər bazasının adı ikicisi isə versiyadır.
45)post message nedir.
window.postMessage iki pəncərə arasında (cross- window communication) məlumat mesajlarını aramızda təhlükəsiz şəkildə ötürə bilərik. Digər hallarda metodun işləməsi üçün domen adı, protokol və port təriflərinə əməl edilməlidir.
hədəfWindow.postMessage(mesaj, alanadi, transfer);
hədəfWindow
Mesajın göndəriləcəyi window obyektinin mənbəyinə göndərər.
Mesaj
Pəncərələr/çərçivələr arasında göndəriləcək mesajı daşıyar.
Alanadi
Məlumatın hansı qaynağdan gəldiyini yoxlayar və üzərində işləmə imkanı verərə.
Transfer
Bu isteğe bağlı arqumentdir. Mesajla ötürülən sətirdir.
46) server-sent events(SSE) nədir.
server-sent events, serverdən bir məlumat göndərilərkən istifadə edilir. Serverdə hər hansı bir yeniləmə olduqda məlumatlar əmr edilmədən serverdən brauzerə göndərilir. Bunu biz başqa yollarlada edə bilərik amma ən asan yolu SSE ilə etməkdir. Çünki hər saniyə dəyişiklikləri yoxlamaq yerinə, tək bir səfərdə SSE ilə tanıdıb, qalan işi bu APİ-ə buraxa bilərik.
 .
47)  Server-sent events bildirişlərin necə əldə edirsiniz.
Bunun üçün biz EventSource obyektindən istifadə edirik.
var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};

48) promise.all nədir.
Bu metodan istifadənin  məqsədini paralel olaraq yerinə yetirilən bütün funksiyaların bitim bitmədiyini anlamaq kimi müəyyən etmək olar. Bir-birini gözləməyən asinxron işləri birləşdirsək, başvermə vaxtı uzadılacaq. Bu işləri eyni anda görə bilmək Promise.all() ilə mümkündür. Array’dəki promis’lər uğurlu olduqda tutduğları dəyərlərdə array halında bizə qayıdar. Uğursuz olarsa rejected olar.
p1 = Promise.resolve(50);
    p2 = 200
    p3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'geek');
    });
    Promise.all([p1, p2, p3]).then(function(values) {
        document.write(values);
    });
49) Delete operatoru nədir.
Bu operator  elementi və yaxud array içərisindən yeri göstərilmiş elementi silir
Sintaksis:
delete obyekt.ad;// buda obyek bizim array-ın adı ad isə elementimizdir
50)NaN nedir.
Nan- “Not a Number” mənasına gəlir. isNaN bir şeyin ədəd olub olmadığını yoxlamaq üçün istifadə olunur. Əgər ötürülən hər hansı bir sətir, obyekt və ya hərfi dəyər NaN kimi düzgün nömrəyə məcbur edilməyəcəksə, bu doğru olacaq. Number.isNaN nəyinsə hərfi NaN növü olub-olmadığını yoxlayır, çünki başqa cür yoxlaya bilməzsiniz.
Nümunə:
isNaN('Salam') //true
isNaN('5') //false
	
