const { isArray } = require('jquery');
const Italdb = require('../model/italmodel');

exports.create = (req,res)=>{
   
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

  
    const ital = new Italdb({
        name : req.body.name,
        kiszereles : req.body.kiszereles,
        price: req.body.price
    });

 
    ital
        .save(ital)
        .then(data => {
           
            res.redirect('/products');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}



exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Italdb.findById(id)
            .then(data =>{
               
                if(!data){
                    res.status(404).send({ message : "Not found id "+ id})
                }else{
                    res.send(data)
               
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving id " + id})
            })

    }else{
        Italdb.find()
            .then(user => {
                res.send(user)
              
                
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving information" })
            })
    }

    
}


