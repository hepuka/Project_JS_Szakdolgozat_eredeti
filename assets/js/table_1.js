
var products=[];
var caItems=[];
var cart_n=document.getElementById('cart_n');

    fetch("http://localhost:3000/api/italok")
    .then(data => data.json())
    .then(ital => {
        ital.map(data => {

              
            italDIV.append(italdiv_fun(data));
        })
    })

    function italdiv_fun({ name, kiszereles, price,con}){
      let div = document.createElement('div');
      let btn=`btnFruit${con}`;
      div.className="col-lg-3"
      div.innerHTML = `

      <div style="text-align:center;border-radius:15px" class="card mb-3 shadow-lg">
<div class="card-body text-dark" style="padding:0px;margin-bottom:0px">
  <img src="/img/menu2.jpg" class="card-img-top" style="padding-bottom:10px">
  <h5 style="font-weight:bold" class="card-title">${name}</h5>
</div>
<div class="card-body">
  <p class="card-text">Kiszerelés: ${kiszereles}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Egységár: ${price} Ft</li>
</ul>

<div class="card-body">
<h6>Rendelés felvétele:</h6>
  <div class="d-flex justify-content-center align-items-center">
<div class="btn-group " style="margin-top:10px;margin-bottom:10px;">

  <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')"
  class="btn btn-sm btn-outline-secondary">1.asztal</button>
</div>
<div class="btn-group" style="margin-top:10px;margin-bottom:10px">
  <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')"
  class="btn btn-sm btn-outline-secondary">2.asztal</button>
</div>
      </div>
</div>
</div>
      `;
      return div;
  }

    fetch("http://localhost:3000/api/kavek")
    .then(data => data.json())
    .then(kave => {
        kave.map(data => {
           
            kaveDIV.append(kavediv_fun(data));
        })
    })


    fetch("http://localhost:3000/api/sutemenyek")  //hova küldöm a kérést,fetch egy promise-t ad vissza
    
    //promise meghívása a then-el, függvény a res és visszaadom a res.json()-t
    //fetch res néven nem konkrét adatokat ad át amit kaptam a szervertől, 
    //hanem egy response objektumot ami tartalmazza az összes adatot, fejléc stb
    //a .json() metódus kicsomagolva a body-ban található adatot és azokat json parse metódussal értelmezi és egy promise-t ad vissza
    .then(data => data.json()) 

    //a kapott promise-ra is megtudom hívni a then-t és a json.map-el átadom a kicsomagolt adatokat
    .then(suti => {
        suti.map(data => {
           
            sutiDIV.append(sutidiv_fun(data));
        })
    })

  
    function kavediv_fun({ name, kiszereles, price,con}){
        let div = document.createElement('div');
        let btn=`btnFruit${con}`;
        div.className="col-lg-3"
        div.innerHTML = `

        <div style="text-align:center;border-radius:15px" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px;margin-bottom:0px">
    <img src="/img/menu1.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-body">
  <h6>Rendelés felvétele:</h6>
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group " style="margin-top:10px;margin-bottom:10px;">
    <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">1.asztal</button>
</div>
<div class="btn-group" style="margin-top:10px;margin-bottom:10px">
    <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">2.asztal</button>
</div>
        </div>
  </div>
</div>

             
        `;
        return div;
    }

    function sutidiv_fun({ name, kiszereles, price,con}){
        let div = document.createElement('div');
        let btn=`btnFruit${con}`;
        div.className="col-lg-3"
        div.innerHTML = `

        <div style="text-align:center;border-radius:15px" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px;margin-bottom:0px">
    <img src="/img/menu3.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-body">
  <h6>Rendelés felvétele:</h6>
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group " style="margin-top:10px;margin-bottom:10px;">
    <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">1.asztal</button>
</div>
<div class="btn-group" style="margin-top:10px;margin-bottom:10px">
    <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">2.asztal</button>
</div>
        </div>
  </div>
</div>
        `;
        return div;
    }

function cart(name,price){

var item={
    id:Math.random(),
    table:"1.asztal",
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

alert("Termék a kosárhoz adva!")

}

function cart2(name,price,id){

  var item={
      id:Math.random(),
      name:name,
      price:price,
      
  }
  
  caItems.push(item);
  let storage=JSON.parse(localStorage.getItem("cart2"));
  
  if(storage==null){
  
      products.push(item);
      localStorage.setItem("cart2",JSON.stringify(products));
  
  }else{
  
      products=JSON.parse(localStorage.getItem("cart2"));
      products.push(item);
      localStorage.setItem("cart2",JSON.stringify(products));
  }
  
  products=JSON.parse(localStorage.getItem("cart2"));
  cart_n.innerHTML=`[${products.length}]`;
  
  alert("Termék a kosárhoz adva!")
  
  
  }