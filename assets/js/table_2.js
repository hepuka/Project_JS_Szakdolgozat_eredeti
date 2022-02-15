
var products=[];
var caItems=[];
var cart_n=document.getElementById('cart_n2');

    fetch("http://localhost:3000/api/italok")
    .then(res => res.json())
    .then(json => {
        json.map(data => {

              
            italDIV.append(italdiv_fun(data));
        })
    })


    fetch("http://localhost:3000/api/kavek")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
           
            kaveDIV.append(kavediv_fun(data));
        })
    })


    fetch("http://localhost:3000/api/sutemenyek")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
           
            sutiDIV.append(sutidiv_fun(data));
        })
    })

  function tdorder_fun2({_id,orderid, vegosszeg, time}){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <tr class="table-default border-0 selected" style="text-align: center;">
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${orderid}</td>
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${vegosszeg} Ft</td>
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${time}</td>
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">2.asztal</td>
        <td style="text-align:center;border:none">                                
            <a class="btn btn-dark" href="/orders/delete/${_id}">Törlés</a></td>
        </td></td>

    </tr>
        `;
        return tr;
    }


     function italdiv_fun({ name, kiszereles, price,con}){
        let div = document.createElement('div');
        let btn=`btnFruit${con}`;
        var mennyiseg = document.createElement('mennyiseg');
        div.className="col-lg-3"
        div.innerHTML = `

        <div style="text-align:center;border-radius:15px;background-color:bisque" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px">
    <img src="/img/menu2.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color:bisque">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-footer text-muted"style="background-color:bisque" >
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group" style="margin-top:10px;margin-bottom:10px">
    <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">Kosárba</button>
</div>

        </div>
  </div>
</div>

             
        `;
        return div;
    }
   
    function kavediv_fun({ name, kiszereles, price,con}){
        let div = document.createElement('div');
        let btn=`btnFruit${con}`;
        var mennyiseg = document.createElement('mennyiseg');
        div.className="col-lg-3"
        div.innerHTML = `

        <div style="text-align:center;border-radius:15px;background-color:bisque" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px">
    <img src="/img/menu1.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color:bisque">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-footer text-muted"style="background-color:bisque" >
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group" style="margin-top:10px;margin-bottom:10px">
    <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">Kosárba</button>
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
        var mennyiseg = document.createElement('mennyiseg');
        div.className="col-lg-3"
        div.innerHTML = `

        <div style="text-align:center;border-radius:15px;background-color:bisque" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px">
    <img src="/img/menu3.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color:bisque">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-footer text-muted"style="background-color:bisque" >
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group" style="margin-top:10px;margin-bottom:10px">
    <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">Kosárba</button>
</div>

        </div>
  </div>
</div>

             
        `;
        return div;
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