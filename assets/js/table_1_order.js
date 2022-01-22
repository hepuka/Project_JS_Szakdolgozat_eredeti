var products=JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n=document.getElementById('cart_n');
var table=document.getElementById('table');
var total=0;
  
//kosár tartalma
function tableHTML(i){

    return `
            <tr>
                <td style="text-align:center">${products[i].name}</td>
                <td id="mennyiseg" style="text-align:center">1</td>      
                <td style="text-align:center">${products[i].price} Ft</td>
                <td style="text-align:center"><input id="bem" type="button" value="Rendelés törlése" onclick="deleteRow(this)"</td>
                </td>                                     
            </tr>
    `;
}
//kosár tartalma vége

function deleteRow(btn) {


let data = localStorage.getItem('cart');

console.log('data: '+data);

var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);

  }
  

//kosár kiürítése
function clean(){

    localStorage.removeItem('cart')
    for(let index=0;index < products.length;index++){

        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total=0;
    table.innerHTML=`

        <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
        </tr>


    `;
    cart_n.innerHTML='';
    alert('A kosár törölve!')
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";

    

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
            <tr class="border border-white">
                <td></td>
                <td></td>
                <td></td>
                <td class="text-secondary" style="text-align:center; font-weight:bold;font-size:30px">Végösszeg: ${total} Ft</td>
                <td></td>
                
             </tr>

             <tr class="border border-white">
             <td></td>
             <td></td>
             <td>
             </td>
             <td style="text-align:center"><form id="form1" action="/table_1_order" method="POST" autocomplete="off">

             <input type="hidden" name="total" value="${total}">
             <input type="hidden" name="_id" value="">
             <button id="submitbtn" class="btn btn-success col-md-6">Fizetés</button>
             </form>
             
             </td>
             <td></td>

          </tr>

    `;

    products=JSON.parse(localStorage.getItem('cart'));

})();




var form=document.getElementById('form1');

document.getElementById('submitbtn').addEventListener('click', () =>{

    localStorage.removeItem('cart')
        
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