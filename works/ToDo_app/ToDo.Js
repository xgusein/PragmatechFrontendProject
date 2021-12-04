const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items ;

//load items
loadItems();

//call event listeners
eventListeners();

function eventListeners(){
    //submit event listener
        form.addEventListener('submit',addNewItem);
    //delete an item
    taskList.addEventListener('click',deleteItem);
    //delete AllItems
    btnDeleteAll.addEventListener('click',deleteAllItems);
        
};

function loadItems(){
    items = getItemsFromLS();

    items.forEach(function(item){
        createItem(item);
    })
}

// get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem(('items')))
    }
    return items;
}

//  set item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}


function createItem(text){
     //create li
     const li = document.createElement('li');
     li.className = 'list-group-item list-group-item-secondary';
     li.appendChild(document.createTextNode(text));
     //create a
     const a =document.querySelector('a');
     a.classList ='delete-item float-right';
     a.setAttribute('href','#');
     a.innerHTML='<i class="fas fa-times"></i>';
 
     //add a to li
     li.appendChild(a);
 
     //li to ul
     taskList.appendChild(li);
 
}


//add new item
function addNewItem(e){

    if(input.value ===''){
        alert('Add new item');
    }
    // create item 
    createItem(input.value);    

    //save to LS
    setItemToLS(input.value);

    //clear input
    input.value='';


    e.preventDefault();
};



// delete an item
function deleteItem(e){
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();

    };
    e.preventDefault();

};

// delete alla btn
function deleteAllItems(e){ 
   if(confirm('are you sure ?')){
    taskList.innerHTML='';
    e.preventDefault();
   };
};
