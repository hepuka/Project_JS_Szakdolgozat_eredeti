const Userdb = require('../model/model');
const bcrypt=require('bcryptjs');

// create and save new user
exports.create = (req,res)=>{
/*     // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Userdb({
        name : req.body.name,
        username : req.body.username,
        email: req.body.email,
        role : req.body.role,
        password : req.body.password
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        }); */

        const {name, role, username, email, password} = req.body;
        let errors=[];
    
        //Check required fields
        if(!name || !role|| !email || !username || !password ) {
              
            errors.push({ msg: 'Nincs mindegyik mező kitöltve!'});
        }
    
        //Check password match
 /*        if(password !== password2){
    
            errors.push({ msg: 'Nem egyeznek a megadott jelszavak!'});
        } */
    
        //Check password length
        if(password.length < 5){
    
            errors.push({ msg: 'A jelszónak legalább 5 karakternek kell lennie!'});
        }
    
        if(errors.length > 0){
    
            res.render('add_user', {
                errors,
                name,
                role,
                username,
                email,
                password                
            });
    
        }else{
    
            //Validation pass
           Userdb.findOne({username: username})
           
           .then(user =>{
               if(user){
                   //User exists
                   errors.push({msg: 'Ez a felhasználónév már foglalt!'});
                   res.render('add-user', {
                    errors,
                    name,
                    role,
                    username,
                    email,
                    password 
                });
               } else{
    
                    const newUser=new Userdb({
                        name,
                        role,
                        username,
                        email,
                        password
                    });
    
    
                    //Hash password
                    bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if(err) throw err;
                        
                        //Set password to hashed
                        newUser.password=hash;
    
                        //Save user
                        newUser.save()
                        .then(user => {
                            req.flash('success_msg','Sikeres regisztráció, most már bejelentkezhet!');
                            res.redirect('/admin');
                        })
                        .catch(err => console.log(err));
    
                    }))
    
               }
    
           });
           
        }
        
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
               
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
                
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}