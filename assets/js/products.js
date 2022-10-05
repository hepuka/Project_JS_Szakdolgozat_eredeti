fetch("http://localhost:3000/api/italok")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      italDIVadmin.append(italdiv_fun(data));
    });
  });

fetch("http://localhost:3000/api/kavek")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      kaveDIVadmin.append(italdiv_fun(data));
    });
  });

fetch("http://localhost:3000/api/sutemenyek")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      sutiDIVadmin.append(italdiv_fun(data));
    });
  });

function italdiv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  div.className = "products_carddetails";
  div.innerHTML = `

<h3 class="card-title">${name}</h3>

<p>Kiszerelés: ${kiszereles}</p>
<p>Egységár: ${price} Ft</p>




    `;
  return div;
}
