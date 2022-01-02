let italoktabla = document.getElementById("italoktabla")
let kavektabla = document.getElementById("kavektabla")
let sutemenyektabla = document.getElementById("sutemenyektabla")
//táblarenderelés


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

    function td_fun({ name, kategoria, kiszereles, ar}){
        let td = document.createElement('tr');
        td.innerHTML = `
        <td style="padding-top: 25px; border: none;text-align:center">${name}</td>
        <td style="padding-top: 25px; border: none;text-align:center">${kategoria}</td>
        <td style="padding-top: 25px; border: none;text-align:center"">${kiszereles}</td>
        <td style="padding-top: 25px; border: none;text-align:center"">${ar}</td>
        <td style="padding-top: 25px; border: none;text-align:center"">inputmező</td>
        <td style="padding-top: 25px; border: none;text-align:center"">Hozzáaad gomb</td>
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