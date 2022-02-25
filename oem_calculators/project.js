// Storage Controller

const StorageControler = (function(){


    
})();

// Product Controller

const ProductControler = (function(){
    //private
    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price; 
    }

    const data = {
        products : [
            {id:0, name: 'Monitor', price: 100},
            {id:0, name: 'Ram', price: 30},
            {id:0, name: 'Klavye', price: 10},
        ],
        selectedProduct:null,
        totalPrice:0
    };

    //Public

    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        }
    }
})();

// UI Controller

const UIController = (function(){


    
})();

// App controler 

const App = (function(ProductCtrl,UICtrl){

    return {
        init: function(){
            console.log('starting app...');
            const products = ProductCtrl.getProducts();
            UICtrl.createProductList(products);
        }
    }
    
})(ProductControler,UIController);

App.init();