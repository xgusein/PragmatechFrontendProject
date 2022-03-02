NewBooks=[]
class NewBook:
    def __init__(self,ad,yazar,sehife,id):
        self.id=id
        self.ad=ad
        self.yazar=yazar
        self.sehife=sehife
    
    def addToList(self):
        NewBooks.append(self) 

    def showKitab(self):
        print(f"{self.ad},{self.yazar},{self.sehife},{self.id}")

    def plus(self):
        self.id+=1
       
id=0               
def CreateBook():
    global id
    ad=input('Ad:')
    yazar=input('yazar:')
    sehife=input('sehife:')
    kitab1=NewBook(ad,yazar,sehife,id)
    kitab1.addToList()
    kitab1.id=id
    id=+1

def RemoveBook():
    for kitab1 in NewBooks:
        NewBooks.remove(kitab1)
        
while True:
    sual=input('1/2/3/4/5/6')
    if sual=='1':
        CreateBook()
    if sual=='2':
        for kitab1 in NewBooks:
            kitab1.showKitab()
    if sual=='3':
        RemoveBook()
    