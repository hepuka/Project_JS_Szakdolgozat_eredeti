fetch("http://localhost:3000/api/users")
.then(data => data.json())
.then(users => {
    users.map(data => {

       admintabla.append(tadmin_function(data));
    })
})

function tadmin_function({_id,name, username, email, role}){
    let tr = document.createElement('tr');
 
    tr.innerHTML = `
<tr class="table-default border-0 selected" style="text-align: center;">
    <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${name}</td>
    <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${username}</td>
    <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${email}</td>
    <td class="col-3" style="padding-top: 15px; border: none;text-align: center">${role}</td>    
    for(var i = 0; i < users.length; i++){

    <td> 
        <a href="/update-user?id=<%= users[i]._id%>" class="btn update">
            <span class="btn btn-secondary btn-sm">Szerkesztés</span>
        </a>

    </td>

    <td> 
    <a class="btn delete" data-id=<%= users[i]._id%> 
        <span class="btn btn-dark btn-sm">Törlés</span>
    </a>
</td>

    }




</tr>
    `;
    return tr;
}