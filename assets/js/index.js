

/* var italoktabla = document.getElementById('italoktabla');
let kavektabla = document.getElementById("kavektabla");
let sutemenyektabla = document.getElementById("sutemenyektabla");
let asztalrendeles1= document.getElementById("asztalrendeles1"); */


//ha egy osztályhoz generáljuk a tartalmat és nem egy ID-hoz
//let card = document.querySelector(".products");

//terméktábla renderelés
    
/*     fetch("http://localhost:3000/api/italok")
    .then(res => res.json())
    .then(json => {
        json.map(data => {

              
            italoktabla.append(td_fun(data));
        })
    })  */

/*      fetch("http://localhost:3000/api/kavek")
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
   */

/*     function td_fun({ name, kiszereles, ar}){
        let div = document.createElement('div');
        div.className="col-lg-3";
        div.innerHTML = `
        <div class="card border-secondary" style="max-width: 17rem; margin-top:20px">
        <div class="card-body">
            <h4 id="name" class="card-title input">${name}</h4>
            <p id="kiszereles" class="card-text input">${kiszereles}</p>
            <p id="ar" class=" card-text input">${ar} Ft</p>
            <p id="ar" class=" card-text">Menyiség</p>
            <input type="number" class="form-control input"/>

          <div class="container" style="margin-top: 10px">
          <div class="row justify-content-center">
            <button id="submitButton" data-italok="<%= JSON.stringify(italok) %>" class="btn btn-warning btn-block col-5 add-to-cart" style="margin-top:10px">Hozzáad</button>    
          </div>  
        </div> 

      </div>
           
    </div>
        `;
        return div;
    } 
 */



/*        function td_fun({ name, kiszereles, ar}){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <tr class="table-default border-0 sor" style="text-align: center">
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${name}</td>
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${kiszereles}</td>
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${ar}</td>
        <td class="col-2" style="padding-top: 17px; border: none;text-align: center"><input type="number" name="mennyiseg" class="form-control" value=""></td>
        <td class="col-2" style="border: none; padding-top: 15px; padding-left: 70px;"> 
            <a class="btn border-shadow" style="border: none">
                <span class="btn btn-warning btn-sm" id="hozzaad"><i class="fas fa-plus"></i></span>
            </a>
        </td>
    </tr>
        `;
        return tr;
    }
  */
  

/*     function or_fun({ name, kiszereles, ar,mennyiseg}){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <tr class="table-default border-0 sor" style="text-align: center">
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${name}</td>
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${kiszereles}</td>
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${ar}</td>
        <td class="col-2" style="padding-top: 25px; border: none;text-align: center">${mennyiseg}</td>
        <td id="value" class="col-2" style="padding-top: 25px; border: none;text-align: center">${mennyiseg*ar}</td>
    </tr>
        `;

        return tr;
    } */

/*       var table = document.getElementById("table_1_order");
     var jsonArr=[];
    var sumVal = 0;
    var num=0;
  for (var i = 0, row;row=table.rows[i]; i++) {

    var col=row.cells;
    var jsonObj={

        total:col[0].innerHTML
    }

    jsonArr.push(jsonObj);

 //   sumVal += parseInt(table.rows[i].cells[3].innerHTML);
  //  console.log(sumVal);
    //sumVal += parseInt(document.getElementById("value")).innerHTML
  }

  console.log(jsonArr) 
  //  document.getElementById("val").innerHTML = sumVal;
  // console.log(sumVal); */


/* 
     function li_fun({ name, kiszereles, ar,mennyiseg}){
        let li = document.createElement('li');
        
        li.innerHTML = `
        <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">${name}</h6>
          <small class="text-muted">${kiszereles}</small>
          <h6 class="text-muted">${mennyiseg}x${ar}</h6>
        </div>
        <span id="total" class="text-muted total">${mennyiseg*ar}</span>
      </li>
        
        `;
           
        return li;
    } */

   

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
