const express =require("express");
const AuthoradminRoutes=express.Router();
const Authordata= require("../model/Authordata");
const multer=require('multer');
const Authordata = require("../model/Authordata");
const upload=multer({dest:'./public/images/'})

function router(nav){
    AuthoradminRoutes.get('/',function(req,res){
        Authordata.find()
        .then(
            function(authors){
                res.render("authoredit",{nav,title:'Library',authors})
            }
        )
    });
  AuthoradminRoutes.get('/update/:i',(req,res)=>{
      const i=req.params.i;
      Authordata.findOne({_id:i})
      .then(function(author){
          res.render('authorupdate',{nav,title:'Library',author})
      })
  });

  AuthoradminRoutes.post('/updatesave/:i',upload.single('image'),(req,res)=>{
      const i=req.params.i;

      let updatedauthor={
          _id:i,
          title:req.body.title,
          author:req.body.image
      };
Authordata.updateOne({_id:i},updatedauthor,(err)=>{
    if(err){
        console.log(err);
        res.end(err);

    }else{
        res.redirect('/authors');

    }
});
  });
  //delete the existing author
  AuthoradminRoutes.get('/delete/:i',(req,res,)=>{
      let i=req.params.i;
      Authordata.remove({_id:i},(err)=>{
          if(err){
              console.log(err);
              res.end(err);
          }else{
              res.redirect('/authors');
          }
      });
  });
  return AuthoradminRoutes;

}
module.exports=router;