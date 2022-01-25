var products=JSON.parse(localStorage.getItem('cart2'));
var cartItems=[];
var cart_n=document.getElementById('cart_n2');
var table=document.getElementById('table2');
var total=0;

//kosár tartalma
function tableHTML2(i){

    return `
            <tr>
            <td style="text-align:center">${i+1}</td>
                <td style="text-align:center">${products[i].name}</td>
                <td id="mennyiseg" style="text-align:center">1</td>
                <td style="text-align:center">${products[i].price} Ft</td>
                <td style="text-align:center;border:none">                                
                <a class="btn btn-dark" onclick="deleteRow(${products[i].id})">Rendelés törlése</a></td>                                  
            </tr>
    `;
}
//kosár tartalma vége
function deleteRow(id) { 

    var result = confirm("Rendelés törlése?");
    if (result) {
        var data = localStorage.getItem('cart2')
        data = JSON.parse(data);

        for(var i=0;i<data.length;i++){

                if(data[i].id == id){


                        data.splice(i, 1);
                        localStorage.setItem('cart2', JSON.stringify(data));
                }

            
        }

        window.location.reload();
       
                     
                    } 

     
    
    }  

  
//kosár kiürítése
function clean(){

    var result = confirm("Törli a kosár tartalmát?");

    if(result){
 localStorage.removeItem('cart2');

    }

}
//kosár kiürítése vége


(()=>{

    for (let index = 0; index < products.length; index++) {
        
        table.innerHTML+=tableHTML2(index);
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
                <td class="text-secondary" style="text-align:center; font-weight:bold;font-size:20px">Végösszeg: ${total} Ft</td>
                
                
             </tr>

             <tr class="no-border">
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td style="text-align:center"><form id="form2" action="/table_2_order" method="POST" autocomplete="off">

             <input type="hidden" name="total" value="${total}">
             <input type="hidden" name="_id" value="">
             <input type="hidden" name="asztal2" value="2.asztal">
             <button id="submitbtn2" class="btn btn-success col-6">Fizetés</button>
             </form>
             </td>
            

          </tr>              

    `;

    products=JSON.parse(localStorage.getItem('cart2'));


})();


var form=document.getElementById('form2');

document.getElementById('submitbtn2').addEventListener('click', () =>{

    localStorage.removeItem('cart2')
        
    setTimeout(() => {
         
        sub();

        
 
        }, 5000);
  alert('Sikeres tranzakció!');
});

function sub(){
  
    setTimeout(() => {
     
       form.submit();
       
    }, 5000);
   

}