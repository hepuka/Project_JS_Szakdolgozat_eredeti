var products=JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n=document.getElementById('cart_n');
var table=document.getElementById('table');
var total=0;

//kosár tartalma
function tableHTML(i){

    return `
            <tr>

                <td style="text-align:center"> ${i+1} </td>
                <td style="text-align:center">${products[i].name}</td>
                <td id="mennyiseg" style="text-align:center">1</td>
                <td style="text-align:center">${products[i].price} Ft</td>
                <td style="text-align:center">Rendelés törlése</td>

            </tr>
    `;
}
//kosár tartalma vége

//kosár kiürítése
function clean(){

    localStorage.clear();
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
                <td></td>
                <td class="text-warning" style="text-align:center; font-weight:bold">Végösszeg: ${total} Ft</td>
             </tr>

             <tr class="border border-white">
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td style="text-align:center"><form id="form1" action="/table_1_order" method="POST" autocomplete="off">

             <input type="hidden" name="total" value="${total}">
             <input type="hidden" name="_id" value="">
             <button id="submitbtn" class="btn btn-success col-md-6">Fizetés</button>
             </form></td>
          </tr>


            <tr class="border border-white">
                <td></td>
                <td></td>
                <td style="text-align:center">
                <button id="btnClean" onclick="clean()" class="btn text-white btn-warning style="text-align:right">
                Kosár kiürítése
            </button>
            </td>
                <td></td>
            <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
        <tr>
        <td></td>
        <td></td>
        <td>   
        <div class="d-flex justify-content-center" style="margin-top:10px;">
        <button type="reset" class="btn btn-secondary col-md-6" style="margin-bottom: 40px; margin-left: 25px;" onclick="location.href='/table_1'">
          Vissza a rendelésekhez
      </button>
       </div></td>
        <td></td>
            </tr>

               

    `;

    products=JSON.parse(localStorage.getItem('cart'));
 // cart_n.innerHTML=`[${products.length}]`;
})();



var form=document.getElementById('form1');

document.getElementById('submitbtn').addEventListener('click', () =>{

    localStorage.clear();
        
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