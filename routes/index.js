var express = require('express');
var lib = require('exam_social');
var router = express.Router();


var auth = function(req, res, next){
  if(lib.allId().includes(parseInt(req.query.id))){
    next();
  }else{
    res.status(401).send({error: 'Id not valid'})
  }
}


router.get('/users', function(req, res){
  res.status(200).json(lib.allUsers());
});


router.post('/users', function(req, res){
lib.newUser(req.body.name, req.body.surname);
res.status(201).json({mess: 'user add'});
});



router.post('/post', auth, function(req, res){
lib.newPost(req.query.id, req.body.posts);
res.status(201).json({mess: 'post add'});
});


router.post('/requestFriend', auth, function(req, res){
  lib.requestFriend(req.query.id, req.body.idReceved);
  res.status(200).json({mess: 'request sent'});
});


router.put('/acceptFriend', auth, function(req, res){
  lib.acceptFriend(req.query.id, req.body.idSend);
  res.status(200).json({mess: 'request accepted'})
})


router.get('/postFriend/:idFriend/:id', auth, function(req,res){
  res.json(lib.postFriend(req.params.idFriend, req.params.id));


})


router.delete('/deletePost', auth, function(req, res){
  lib.delPost(req.query.id);
  res.status(200).json({mess: 'post deleted'})
});














module.exports = router;
