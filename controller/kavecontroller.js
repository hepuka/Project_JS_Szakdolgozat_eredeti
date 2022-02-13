const kavekdb = require('../model/kavemodel');

exports.create = (req,res)=>{
   
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

  
    const kave = new kavekdb({
        name : req.body.name,
        kiszereles : req.body.kiszereles,
        price: req.body.price
    });

 
    kave
        .save(kave)
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

        kavekdb.findById(id)
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
        kavekdb.find()
            .then(user => {
                res.send(user)
              
                
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving information" })
            })
    }

    
}