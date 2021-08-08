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