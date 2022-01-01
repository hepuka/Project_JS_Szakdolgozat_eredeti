const axios = require('axios');


//itt hívja le a usereket apival, majd rakja a table_1re
exports.homeRoutes = (req, res) => {

    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('admin', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.italRoutes = (req, res) => {

    axios.get('http://localhost:3000/api/italok')
        .then(function(response){
            res.render('table_1', { italok : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

