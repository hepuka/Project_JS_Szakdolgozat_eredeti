const Sutidb = require('../model/sutemenyekmodel');


exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Sutidb.findById(id)
            .then(data =>{
               
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
               
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with id " + id})
            })

    }else{
        Sutidb.find()
            .then(user => {
                res.send(user)
              
                
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}