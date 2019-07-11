var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/',(req, res) => {
    User.find({}, (err, users) => {
        if (err) return err;
        else
            res.json(users)
    })
});



router.post('/adduser', (req, res) => {
  
        var user = new User();
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.contact = req.body.contact;
        user.address = req.body.address;
        user.save(function (err,data) {
            if (err) {
                console.log(err);
                return;
            } else {
                res.json(data);
            }
        });

  

});

router.delete('/deleteuser/:id', (req, res) => {

    let query = { _id: req.params.id }

    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
            return;
        } else {
            User.remove(query, (err,data) => {
                if(err){
                    console.log(err)
                }else{
                    res.json(data);
                }
          
            })

        }
    });


});


router.post('/useredit/:id', function(req, res){
 
    let user = {};
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.contact = req.body.contact;
    user.address = req.body.address;

    let query = {_id:req.params.id}
 
    User.update(query,user, function(err,data){
      if(err){
        console.log(err);
        return;
      } else {
      res.json(data)
      }
    });
  });




module.exports = router;