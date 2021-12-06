var models = [
    {
        name : 'Bmw 328',
        image : 'im/c.jfif'


    },

    {
        name : 'totota',
        image : 'im/a.jfif'


    },
    {
        name : 'hyundai',
        image : 'im/b.jfif'


    },
    {
        name : 'Bmw 328',
        image : 'im/c.jfif'
    },]
var index = 0;
document.querySelector('.card-footer');
document.querySelector('.fas fa-arrow-circle-left').addEventListener
('click',function(){

    index--;
    console.log(index);

});

document.querySelector('.fas fa-arrow-circle-right').addEventListener('.click',function (index){
    index++;
    console.log(index);



});

document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
