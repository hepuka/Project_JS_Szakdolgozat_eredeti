const express=require('express');
const Order=require('../model/ordermodel_table1');
var router=express.Router();

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Order.findById(id)
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
        Order.find()
            .then(user => {
                res.send(user)
              
                
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving information" })
            })
    }

    
}

//router

//főoldal ahonnan a megrendelést leadom
router.get('/table_1', (req,res) =>{
    res.render('table_1');
});


//kosár oldala
router.get('/table_1_order', (req,res) =>{
    res.render('table_1_order');
});



//összes rendelés listázó oldalon a rendelések törlése
router.get('/order/delete/:id', (req,res) => {

    Order.findByIdAndRemove(req.params.id,(err,docs) =>{

        if(!err){
          
            res.redirect('/table_1');
     
        }else{

            console.log('Error in delete: '+err);
        }
    });

});


//POST
//kosár tartalmának elküldése az adatbázisba - fizetés
router.post('/table_1_order', (req,res) =>{

    insertOrder(req,res);
  
});



function insertOrder(req,res){

    var d=new Date();
    var t=d.getTime();
    var counter=t;
    counter+=1;
    
    var order=new Order();
    order.vegosszeg=req.body.total;
    order.orderid=counter;
    order.time= Date.now();
    order.save((err,doc) =>{

        if(!err){
          
          //  console.log('order: '+order);
            res.redirect('/orders');
         
            
        }else{
            console.log('Error insertOrder: '+err);

        }

    });
}

router.get('/orders', (req,res) =>{
    res.render('orders');
});


module.exports=router;

/* router.post('/order', (req,res) =>{

    updateOrder(req,res);
}); */

//Functions

/* function updateOrder(req,res){

    Order.findOneAndUpdate({id:req.body._id}, req.body,{new:true}, (err,doc) =>{

        if(!err){
            res.redirect('/admin');

        }else{
            console.log('Update error' +err);

        }
    });
} */


/* router.get('/order/:id', (req,res) => {

    Order.findById(req.params.id,(err,docs) =>{

        if(!err){
            res.render("orders", {order:doc});
     
        }else{

            console.log('Error findbyId: '+err);
        }
    });

}); */



