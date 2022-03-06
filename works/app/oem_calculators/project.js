// Storage Controller

const StorageControler = (function () {



})();

// Product Controller

const ProductControler = (function () {
    //private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [
        ],
        selectedProduct: null,
        totalPrice:0
    };

    //Public

    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        addProduct: function(name,price){
            let id;

            if(data.products.length>0){
                id = data.products[data.products.length-1].id+1;
            }else{
                id = 0
            }

            const newProduct = new Product(id,name,parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        }

    }
})();

// UI Controller

const UIController = (function () {

    const Selectors = {
        productsList : "#item-list",
        addButton : '.addBtn',
        productName : '#productName',
        productPrice : '#productPrice',
        productCard :'#productCard'
    }


    return {
        createProductList: function (products) {
            let html = '';
            products.forEach(prd => {
                html += `
                <tr>
                  <td>${prd.id}</td>
                  <td>${prd.name}</td>
                  <td>${prd.price}</td>
                  <td class="text-right">
                      <button class="btn btn-warning btn-sm" type="submit">
                          <i class="far fa-edit"></i>
                      </button>
                  </td>
                </tr>`

            });
            document.querySelector(Selectors.productsList).innerHTML = html;
        },
        getSelectors : function(){
            return Selectors;
        },
        addProduct : function(prd){

            document.querySelector(Selectors.productCard).style.display='block';
            var item = `
            <tr>
                  <td>${prd.id}</td>
                  <td>${prd.name}</td>
                  <td>${prd.price}</td>
                  <td class="text-right">
                      <button class="btn btn-warning btn-sm" type="submit">
                          <i class="far fa-edit"></i>
                      </button>
                  </td>
                </tr>
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearINputs : function(){
            document.querySelector(Selectors.productName.value) =''; 
            document.querySelector(Selectors.productPrice).value ='';
        },
        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display='none';
        }
    }

})();

// App controler 

const App = (function (ProductCtrl, UICtrl) {
    const UISelectors = UIController.getSelectors();


    //Load event Listener

    const loadEventListeners = function(){

        //add product event
        document.querySelector(UISelectors.addButton).addEventListener('click',
        productAddSubmit);
        
    }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName!=='' && productPrice!==''){
            //Add product
           const newProduct = ProductCtrl.addProduct(productName,productPrice);
            //Add item to list
           UIController.addProduct(newProduct);

           //clear inputs
           UIController.clearINputs();
        }

        console.log(productName,productPrice);
        
        e.preventDefault();
    }

    return {
        init: function () {
            console.log('starting app...');
            const products = ProductCtrl.getProducts();

            if(products.length==0){
                UICtrl.hideCard();
            }else{
                UICtrl.createProductList(products);
                
            }

            //Load event Listener
            loadEventListeners()
        }
    }

})(ProductControler, UIController);

App.init();