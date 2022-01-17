/* 
var products=[];
var caItems=[];
var cart_n=document.getElementById('cart_n');

//DIVs
var fruitDIV=document.getElementById("fruitDIV");
var juiceDIV=document.getElementById("juiceDIV");
var saladDIV=document.getElementById("saladDIV");

//INFO
var FRUIT=[

    {name: 'Apple', price:1},
    {name: 'Orange', price:1},
    {name: 'Cherry', price:1}
];

var JUICE=[

    {name: 'Juice #1', price:10},
    {name: 'Juice #2', price:11},
    {name: 'Juice #3', price:12}
];

var SALAD=[

    {name: 'Salad #1', price:11},
    {name: 'Salad #2', price:12},
    {name: 'Salad #3', price:13}
];

//gyümölcsök cart-okba rendezése
function HTMLfruitProduct(con){

   
    let btn=`btnFruit${con}`;
    return `

        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
  
        <div class="card-body>

        <p class="card-text">${FRUIT[con-1].name}</p>
            <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>

            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button id="${btn}" type="button" onclick="cart('${FRUIT
                    [con-1].name}','${FRUIT[con-1].price}','${con}','${btn}')"
                    class="btn btn-sm btn-outline-secondary">Kosárba</button>
                  </div>
                <hr>
            </div>
            
        </div>
        </div>
        </div>
    `;

}

function HTMLjuiceProduct(con){

   
    let btn=`btnJuice${con}`;
    return `

        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
     
        <div class="card-body>

            <p class="card-text">${JUICE[con-1].name}</p>
            <p class="card-text">Price: ${JUICE[con-1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button id="${btn}" type="button" onclick="cart('${JUICE
                    [con-1].name}','${JUICE[con-1].price}','${con}','${btn}')"
                    class="btn btn-sm btn-outline-secondary">Kosárba</button>
            </div>
           <hr>
        </div>
        </div>
        </div>
        </div>
    `;

}

function HTMLsaladProduct(con){

   
    let btn=`btnSalad${con}`;
    return `

        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
     
        <div class="card-body>

            <p class="card-text">${SALAD[con-1].name}</p>
            <p class="card-text">Price: ${SALAD[con-1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button id="${btn}" type="button" onclick="cart('${SALAD
                    [con-1].name}','${SALAD[con-1].price}','${con}','${btn}')"
                    class="btn btn-sm btn-outline-secondary">Kosárba</button>
            </div>
           <hr>
        </div>
        </div>
        </div>
        </div>
    `;

}

//CART FUNCTIONS

function cart(name,price){

    var item={
        name:name,
        price:price,
        
    }

    caItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));

    if(storage==null){

        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));

    }else{

        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }

    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
   
    
}

(()=>{


    for(let index=1;index<=3;index++){
        fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
        juiceDIV.innerHTML+=`${HTMLjuiceProduct(index)}`;
        saladDIV.innerHTML+=`${HTMLsaladProduct(index)}`;
    }

    if(localStorage.getItem("cart")==null){


    }else{

        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }

})();



 */