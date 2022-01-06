let italoktabla = document.getElementById("italoktabla")
let kavektabla = document.getElementById("kavektabla")
let sutemenyektabla = document.getElementById("sutemenyektabla")

//ha egy osztályhoz generáljuk a tartalmat és nem egy ID-hoz
let card = document.querySelector(".products");

//terméktábla renderelés
fetch("http://localhost:3000/api/italok")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
           
            italoktabla.append(td_fun(data));
        })
    })

    fetch("http://localhost:3000/api/kavek")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
           
            kavektabla.append(td_fun(data));
        })
    })

    fetch("http://localhost:3000/api/sutemenyek")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
           
            card.append(td_fun(data));
        })
    })

/*     function addElement({ name, kiszereles, ar}){
        let div = document.createElement('div');
        div.className = "item justify-self-center";
    
          
        div.innerHTML = `
                
<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">${name}</div>
  <div class="card-body">
    <h4 class="card-title">Light card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
        `;
        appendIn.appendChild(div);
    } */
 


    function td_fun({ name, kiszereles, ar}){
        let div = document.createElement('div');
        div.innerHTML = `
            
    <div class="col-lg-3">
        <div class="card bg-light" style="max-width: 20rem;margin-top:20px">
            <div class="card-header">Italok</div>
            <div class="card-body">
                <h4 class="card-title">${name}</h4>
                <p class="card-text">${kiszereles}</p>
                <p class="card-text">Mennyiség</p>
                <input type="number" class="form-control">
                <button type="button" class="btn btn-warning" style="margin-top:10px">Hozzáad</button>
            </div>
        </div>
    </div>
    
        `;
        return div;
    }



//form.ejs-hez tartozik
$("#add_user").submit(function(event){
    alert("Új felhasználó sikeresen hozzáaadva!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("A felhasználó adata(i) sikeresen módosítva!");
    })

})

if(window.location.pathname == "/admin"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Valóban elszeretnéd távolítani ezt a felhasználót?")){
            $.ajax(request).done(function(response){
                alert("Felhasználó sikeresen eltávolítva!");
                location.reload();
            })
        }

    })
}