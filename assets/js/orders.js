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
    <tr class="table-default border-0 selected">
        <td data-label="Azonosító" class="col-3" style="padding-top: 15px; border: none">${orderid}</td>
        <td data-label="Végösszeg" class="col-3" style="padding-top: 15px; border: none">${vegosszeg} Ft</td>
      
        <td data-label="Rendelés ideje" class="col-3" style="padding-top: 15px; border: none">${time}</td>
        <td data-label="Művelet" style="border:none">                                
            <a>Fizetve</a></td>
        </td></td>

    </tr>
        `;
  return tr;
}
