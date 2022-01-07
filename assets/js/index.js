let italoktabla = document.getElementById("italoktabla")
let kavektabla = document.getElementById("kavektabla")
let sutemenyektabla = document.getElementById("sutemenyektabla")

//ha egy osztályhoz generáljuk a tartalmat és nem egy ID-hoz
//let card = document.querySelector(".products");

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
           
            sutemenyektabla.append(td_fun(data));
        })
    })

    function td_fun({ name, kiszereles, ar}){
        let td = document.createElement('tr');
        
        td.innerHTML = `
        <tr class="table-default border-0" style="text-align: center">
        <td style="padding-top: 25px; border: none;text-align: center">${name}</td>
        <td style="padding-top: 25px; border: none;text-align: center">${kiszereles}</td>
        <td style="padding-top: 25px; border: none;text-align: center">${ar}</td>
        <td style="padding-top: 17px; border: none;text-align: center"><input type="number" name="mennyiseg" class="form-control" value="">
        </td>
        <td style="border: none; padding-top: 15px; padding-left: 35px;"> 
            <a class="btn border-shadow" style="border: none">
                <span class="btn btn-warning btn-sm">Hozzáad</span>
            </a>
        </td>
    </tr>
        `;
        return td;
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