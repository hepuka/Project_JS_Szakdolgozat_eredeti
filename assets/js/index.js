
//form.ejs-hez tartozik, értesítést generál
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
