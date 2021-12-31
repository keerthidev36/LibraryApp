const express =require('express');
const admin2Router =express.Router();
const Authordata = require('../model/Authordata');


function router(nav){
    admin2Router.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library'
        })
    

    })

  admin2Router.post('/add',function(req,res){
      var item ={
     name: req.body.name,
     books:req.body.books,
     about:req.body.about,
     genre:req.body.genre,
     image:req.body.image
      }
     var author = Authordata(item);
     author.save();//saving to database
     res.redirect('/authors');

  });


    return admin2Router;

}
module.exports = router;
