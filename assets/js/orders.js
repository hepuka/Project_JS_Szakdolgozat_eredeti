var products=[];
var caItems=[];
var cart_n=document.getElementById('cart_n');


   fetch("http://localhost:3000/api/orders")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
           
            orderstabla.append(tdorder_fun(data));
        })
    })

  function tdorder_fun({_id,orderid, vegosszeg, time,table}){
        let tr = document.createElement('tr');
        tr.innerHTML = `
    <tr class="table-default border-0 selected" style="text-align: center;">
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${orderid}</td>
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${vegosszeg} Ft</td>
      
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${time}</td>
        <td style="text-align:center;border:none">                                
            <a class="btn btn-dark" href="/orders/delete/${_id}">Rendelés törlése</a></td>
        </td></td>

    </tr>
        `;
        return tr;
    }