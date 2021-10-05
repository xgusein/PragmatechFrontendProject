adlar=[]
soyad=[]
yas=[]
email=[]
ad=input('Istifadəci adini daxil et:')
adlar.append(ad)
ad=input('Istifadəci soyadını daxil et:')
adlar.append(soyad)
ad=input('Istifadəci yaşını daxil et:')
adlar.append(yas)
ad=input('Istifadəci gmail-in daxil et:')
adlar.append(email)
while True:
    sual=input('Yeni istifadəçi əlavə edilsinmi? (1/2)')
    if sual=='1':
        ad=input('Istifadəci adini  daxil et:')
        adlar.append(ad)
        ad=input('Istifadəci soyadını daxil et:')
        adlar.append(soyad)
        ad=input('Istifadəci yaşını daxil et:')
        adlar.append(yas)
        ad=input('Istifadəci gmail-in daxil et:')
        adlar.append(email)
    else:
        print(adlar)
        break