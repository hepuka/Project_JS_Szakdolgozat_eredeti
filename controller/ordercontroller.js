const Orderdb = require('../model/ordermodel');

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Orderdb.findById(id)
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
        Orderdb.find()
            .then(user => {
                res.send(user)
              
                
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving information" })
            })
    }

    
}
