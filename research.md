1)justify-content və align-items arasında fərqlər nələrdir?
justify-content flex özəlliyinə sahib olan containeri(meselen:div) üfüqi vəziyyətdə necə düzüləcəyini qurar. Obyektlərin başta, sonda, ortada, aralığlı düzməyimizə kömək edər. Bunun üçündə 5 parametr istifadə edirik:
1)flex-start - obyektləri başından başlayaraq düzər                        
2)space-between - ilk obyekt başta , son obyekt sonda olacaq şəkildə düzər
3)space-araund - obyektlər arasında bərabər boşluğlar verər                     
4)center - obyektlər tam ortada düzülər
5)flex-end - son obyekt ən sağa düzüləcək şəkildə düzülər


align-items justifay-content-in üfüqi istiqamətdə etdiyi funksiyanı şaquli vəziyyətdə etməyə kömək edər. Burdada 5parametr istifadə olunur və bunlardan 3-ü justify-content xüsusiyyətiylə eynidir.
1)flex-start - ilk obyekt başta , son obyekt sonda olacaq şəkildə düzər
2)flex-end - obyektləri , containerin ən altından yuxarı ya doğru düzər
3)center - obyektləri  ortadan şaquli şəkildə sıralar
4)baseline - Hizalama, ilk sətirdəki yazı tipi nəzərə alınmaqla başlayır.
5)stretch - Bütün obyektlər containerin yüksəkliyinə görə bərabər olacaq şəkildə düzülür

Yəni, justify-content və align-items arasında fərqlər bunlardır:
1)justify-content obyektləri üfiqi vəziyyətdə düzür amma align-items obyektləri şaquli vəziyyətdə düzür.
2)onlarin 5 parametrindən 2-si fərqlənir: justify-content - space-araund/between  align-items - baseline , stretch

2)justify-content:space-around xüsusiyyəti ara məsafələri nəyə görə tənzimləyir?
containerin içində divlərdən sonra qalan boşluğ hesablanaraq bərabər şəkildə divlər arasında bölünür

3)align-items və align-content arasındakı fərqlər nələrdir?
align-content əgər cross'axisde əlavə yer varsa , flex container sətirlərini flex containerin içində düzənliyər

align-items flex elementlerini,align-content xətlər arasındakı boşluğu, hizalama elementləri isə bütövlükdə elementlərin konteyner daxilində necə hizalanacağını müəyyənləşdirir. Yalnız bir xətt olduqda, heç-bir təsiri yoxdur.

4)flex-shrink nədir?
Bu, əslində flex-grow xüsusiyyətindən fərqli olaraq kiçilmək üçün istifadə olunur. Varsayılan olaraq dəyəri 1 -dir. Bir maddəyə 2 dəyər versəniz, digərlərinə nisbətən kiçilməzdən əvvəl kiçiləcək. Dəyəri artırsanız, məsələn, 4 -cü maddəyə 2 və 5 -ci maddəyə a 3 verin, hər ikisi də kiçilmə zamanı kiçiləcək, ancaq 5 -ci maddə 4 -cü maddədən daha sürətli kiçiləcək. Bu maddələrin artıq kiçilməyə yeri qalmadıqda digər əşyalar da kiçilməyə başlayır. Bildiyiniz kimi, eni və hündürlüyü konteynerə uyğun olaraq tənzimlənir. Belə hallarda, bu xüsusiyyət böyüməyə və kiçilməyə mane olmaq üçün lazımlı olacaq.


5)flex-grow nədir?
Bir elementin digərlərindən daha böyük görünməsi üçün bu xüsusiyyətdən istifadə edirik. Varsayılan dəyəri 0 -dır. Maddələrdən birinin dəyərini 2 olaraq təyin etsək, digərlərindən daha böyük olacaq, amma qalanları daralacaq. Əvvəlcə bütün maddələrin dəyərini 1 olaraq təyin etsəniz və sonra bir maddənin dəyərini 2 olaraq təyin etsəniz, nəticədə digər maddələrdən 2 dəfə böyük bir maddə əldə edəcəksiniz.




Javasscript


1)import - import başqa moduldan dəyişənlərin və funksiyların idxalına imkan yaradı.
Məsələn: bir funksiyanı xaricə köçürən fayl varsa
// 📁 project.js
export function project(user) {
  alert(`Salam, ${user}!`);
}
...Dha sonra başqa bir fayl bunu içinə köçürüb, istifade edə bilər.
// 📁 main.js
import {project} from './project.js';

alert(projecct); // fonksiyon...
project('John'); // Salam, Hüseyn!
2)in - JavaScript operatoru, müəyyən bir xüsusiyyətin bir obyektdə və ya başqasından alınmış xüsusiyyətlərində olub olmadığını yoxlmaq üçün istifade olunur.Göstərilən xüsusiyyət varsa, in operatoru true qaytarır.
Bir obyekt üzərində bir funksiyanın və yaxud informasiyanın olub olmadığını yoxlamaq üçün:

const car = {
  make: 'Toyota',
  model:'Camry',
  year: '2018',
  start: function() {
    console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
  }
}

'make' in car // Returns true.
'start' in car // Returns true.
'Toyota' in car // Returns false. 'Toyota' is not a property name, but a value.

3) Instanceof, bir obyektin bir sinfə aid olub olmadığını yoxlamaq üçün istifadə olunur.
4)İnterfeys - Java -da İnterfeys istifadə edildikdə, yalnız öz bədənindən yaranan alt siniflər istifadə olunur və doldurulmalı olan içi boş bir metod tərifi yerinə yetirilir. Yaddaqalanlığı bir az da artırmaq üçün, Java İnterfeysi nədir sualına cavab olaraq yerinə yetirilməsi lazım olan bir bələdçi və ya tapşırıqlar toplusunu nümunə edərək bu suala cavab verə bilərik.

4) Proqramlaşdırmadı boş deyə bir anlayış yoxdur.Proqramlama məntiqində boş dəyərdə bir dəyər olduğunda, günlük həyatımızdakı kimi yoxluğ ifadə etməz. Əgər siz bir boşluğu idarə etmək istəyirsinizsə null funksiyasın istifadə etməlisiniz. Məsələn,  ir dəyişkən null dəyərinə sahipsə o dəyişkənin dəyəri yoxdur amma bir dəyişkən bir dəyərə sahipsə onun dəyəri vardır və boşluğdur.