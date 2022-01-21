var products=JSON.parse(localStorage.getItem('cart2'));
var cartItems=[];
var cart_n=document.getElementById('cart_n2');
var table=document.getElementById('table2');
var total=0;

//kosár tartalma
function tableHTML2(i){

    return `
            <tr>
                <td style="text-align:center">${products[i].name}</td>
                <td id="mennyiseg" style="text-align:center">1</td>
                <td style="text-align:center">${products[i].price} Ft</td>
                <td id="asztal2" style="text-align:center">2.asztal</td>
                <td style="text-align:center"><input id="bem" type="button" value="Rendelés törlése" onclick="deleteRow(this)"</td>
                </td>                                     
            </tr>
    `;
}
//kosár tartalma vége

function deleteRow(btn) {


let data = localStorage.getItem('cart2');

console.log('data: '+data);

var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);
  

/*        
          
    data.splice(row,1); //remove data[i]
    localStorage.setItem('cart', data);
    
    var questions = localStorage.getItem('cart').parseJSON;


    console.log(questions);
   questions.splice(row, 0);
localStorage.setItem('cart', JSON.stringify(questions)); */




  }
  
/* 
  function deleteRow(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dsTable").deleteRow(i);

    let data = localStorage.getItem('cart');
    data.split(i,1); //remove data[i]
    localStorage.setItem('cart', data);
  }
 */


//kosár kiürítése
function clean(){

    localStorage.clear();
    for(let index=0;index < products.length;index++){

        table.innerHTML+=tableHTML2(index);
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
             <td style="text-align:center"><form id="form2" action="/table_2_order" method="POST" autocomplete="off">

             <input type="hidden" name="total" value="${total}">
             <input type="hidden" name="_id" value="">
             <button id="submitbtn2" class="btn btn-success col-md-6">Fizetés</button>
             </form>
             </td>
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

    products=JSON.parse(localStorage.getItem('cart2'));
 // cart_n.innerHTML=`[${products.length}]`;

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