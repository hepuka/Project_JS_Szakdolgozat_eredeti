var products=JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n=document.getElementById('cart_n');
var table=document.getElementById('table');
var total=0;
  
//kosár tartalma
function tableHTML(i){

    return `
            <tr>
            <td style="text-align:center">${i+1}</td>
            <td style="text-align:center">${products[i].name}</td>
            <td id="mennyiseg" style="text-align:center">1</td>      
            <td style="text-align:center">${products[i].price} Ft</td>
            <td style="text-align:center">${products[i].table}</td>
            <td style="text-align:center;border:none">                                
            <a class="btn btn-dark" onclick="deleteRow(${products[i].id})">Rendelés törlése</a></td>                   
            </tr>
    `;
}
//kosár tartalma vége


//kosár egy elemének törlése
function deleteRow(id) { 

    var result = confirm("Rendelés törlése?");
    if (result) {
        var data = localStorage.getItem('cart')
        data = JSON.parse(data);

        for(var i=0;i<data.length;i++){

                if(data[i].id == id){

                    data.splice(i, 1);
                        localStorage.setItem('cart', JSON.stringify(data));
                }
           
        }
        window.location.reload();
     
                     
                    } 

    }  

    
//kosár kiürítése
function clean(){

    var result = confirm("Törli a kosár tartalmát?");

    if(result){
 localStorage.removeItem('cart');

    }
    

}
//kosár kiürítése vége

(()=>{

    for (let index = 0; index < products.length; index++) {
        
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
        
    }

    table.innerHTML+=`
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
        </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
        </tr>
            <tr class="no-border">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-secondary" style="text-align:center; font-weight:bold;font-size:20px;">Végösszeg: ${total} Ft</td>
                
                
             </tr>

             <tr class="no-border">
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td style="text-align:center"><form id="form1" action="/table_1_order" method="POST" autocomplete="off">

             <input type="hidden" name="total" value="${total}">
             <input type="hidden" name="_id" value="">
             <button id="submitbtn" class="btn btn-success col-8">Fizetés</button>
             </form>
             
             </td>
          </tr>

    `;

    products=JSON.parse(localStorage.getItem('cart'));

})();

var form=document.getElementById('form1');

document.getElementById('submitbtn').addEventListener('click', () =>{


    var result = confirm('Termékek kifizetése?');

    if(result){

    localStorage.removeItem('cart')
        
    setTimeout(() => {
         
        form.submit();
       
        }, 5000);

        
  alert('Sikeres tranzakció!');

    }else{
        res.redirect('/table_1_order');
    }

});
   