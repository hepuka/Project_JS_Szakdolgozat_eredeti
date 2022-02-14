fetch("http://localhost:3000/api/italok")
.then(res => res.json())
.then(json => {
    json.map(data => {

          
        italDIVadmin.append(italdiv_fun(data));
    })
})


fetch("http://localhost:3000/api/kavek")
.then(res => res.json())
.then(json => {
    json.map(data => {
       
        kaveDIVadmin.append(italdiv_fun(data));
    })
})


fetch("http://localhost:3000/api/sutemenyek")
.then(res => res.json())
.then(json => {
    json.map(data => {
       
        sutiDIVadmin.append(italdiv_fun(data));
    })
})


 function italdiv_fun({ name, kiszereles, price,con}){
    let div = document.createElement('div');
    div.className="col-lg-3"
    div.innerHTML = `

    <div class="productcard card mb-3">

<div class="card-body">
<h5 class="card-title">${name}</h5>
<h6 class="card-subtitle text-muted">KUNPAO's CAFE</h6>
</div>
<div class="card-body">
<p class="card-text">Kiszerelés: ${kiszereles}</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Egységár: ${price} Ft</li>
</ul>

</div>

         
    `;
    return div;
}
