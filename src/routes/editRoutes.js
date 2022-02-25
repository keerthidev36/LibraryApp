const express = require('express');
const editRouter = express.Router();
const Bookdata=require("../model/Bookdata");
const {path }=require("express/lib/application");
const multer = require('multer');
const upload = multer({dest:'./public/images/'});


// const upload=require('../multer');
// const cloudinary=require('../cloudinary')
// const dotenv=require('dotenv');
//   dotenv.config();


function router(nav){
    editRouter.get('/',function(req,res){
        Bookdata.find()
        .then(
            function(books){
                res.render("edit",{nav,title:'Library',books})
            }
        )
    });


    //Get edit an existing book
    editRouter.get('/update/:i',(req,res)=>{
        const i=req.params.i;
        Bookdata.findOne({_id:i})
        .then(function(book){
            res.render('update',{nav,title:'Library',book})
        })
    });
    //update the book
    editRouter.post('/updatesave/:i',upload.single('image'),(req,res)=>{
        const i = req.params.i;
        let updateBook ={
        _id:i,
        title:req.body.title,
        author:req.body.author,
        genre:req.body.author,
        about:req.body.about,
        image:req.body.image
        };
        Bookdata.updateOne({_id:i},updatedBook,(err)=>{
            if(err){
                console.log(err);
                res.end(err);

            }else{
                res.redirect('booksadmin');
            }
        });
    });
    editRouter.get('/delete/:i',(req,res,)=>{
        let i=req.params.i;
        Bookdata.remove({_id:i},(err)=>{
            if(err){
                console.log(err);
                res.end(err);


            }else{
                res.redirect('booksadmin');

            }
        });

    });
return editRouter;
}
module.exports = router;
