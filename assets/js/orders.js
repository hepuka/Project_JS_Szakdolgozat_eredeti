fetch("http://localhost:3000/api/orders")
  .then((data) => data.json())
  .then((orders) => {
    orders.map((data) => {
      orderstabla.append(tdorder_function(data));
    });
  });

function tdorder_function({ orderid, vegosszeg, time }) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <tr class="table-default border-0 selected" style="text-align: center;">
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${orderid}</td>
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${vegosszeg} Ft</td>
      
        <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${time}</td>
        <td style="text-align:center;border:none">                                
            <a>Fizetve</a></td>
        </td></td>

    </tr>
        `;
  return tr;
}
