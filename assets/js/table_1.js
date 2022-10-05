var products = [];
var caItems = [];
var cart_n = document.getElementById("cart_n");

fetch("http://localhost:3000/api/italok")
  .then((data) => data.json())
  .then((ital) => {
    ital.map((data) => {
      italDIV.append(italdiv_fun(data));
    });
  });

function italdiv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  let btn = `btnFruit${con}`;
  div.className = "carddetails";
  div.innerHTML = `

  <h3 class="card-title">${name}</h3>

  <p>Kiszerelés: ${kiszereles}</p>
 
  <p>Egységár: ${price} Ft</p>

  <div class="card_button">

  <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')">1.asztal</button>

  <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')">2.asztal</button>
</div>

 
      `;
  return div;
}

fetch("http://localhost:3000/api/kavek")
  .then((data) => data.json())
  .then((kave) => {
    kave.map((data) => {
      kaveDIV.append(kavediv_fun(data));
    });
  });

fetch("http://localhost:3000/api/sutemenyek")
  .then((data) => data.json())

  .then((suti) => {
    suti.map((data) => {
      sutiDIV.append(sutidiv_fun(data));
    });
  });

function kavediv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  let btn = `btnFruit${con}`;
  div.className = "carddetails";
  div.innerHTML = `

  <h3 class="card-title">${name}</h3>

  <p>Kiszerelés: ${kiszereles}</p>
 
  <p>Egységár: ${price} Ft</p>

  <div class="card_button">

  <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')">1.asztal</button>

  <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')">2.asztal</button>
</div>

`;
  return div;
}

function sutidiv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  let btn = `btnFruit${con}`;
  div.className = "carddetails";
  div.innerHTML = `

  <h3 class="card-title">${name}</h3>

  <p>Kiszerelés: ${kiszereles}</p>
 
  <p>Egységár: ${price} Ft</p>

  <div class="card_button">

  <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')">1.asztal</button>

  <button id="${btn}" type="button" onclick="cart2('${name}','${price}','${con}','${btn}')">2.asztal</button>
</div>

`;
  return div;
}

function cart(name, price) {
  var item = {
    id: Math.random(),
    table: "1.asztal",
    name: name,
    price: price,
  };

  caItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));

  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }

  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;

  alert("Termék a kosárhoz adva!");
}

function cart2(name, price, id) {
  var item = {
    id: Math.random(),
    name: name,
    price: price,
  };

  caItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart2"));

  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart2", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart2"));
    products.push(item);
    localStorage.setItem("cart2", JSON.stringify(products));
  }

  products = JSON.parse(localStorage.getItem("cart2"));
  cart_n.innerHTML = `[${products.length}]`;

  alert("Termék a kosárhoz adva!");
}
