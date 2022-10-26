import { users } from "./users.js";

const table = document.getElementById("myTable");

function feltolt(data) {
  for (var i = 0; i < data.length; i++) {
    var row = `

        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].username}</td>
            <td>${data[i].email}</td>
            <td>${data[i].role}</td>
            <td><a href="#">Szerkesztés</a></td>
            <td><a href="#">Törlés</a></td>
        </tr>`;

    table.innerHTML += row;
  }
}

feltolt(users);
