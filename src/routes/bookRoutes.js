const express= require('express');

const booksRouter =  express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){

    // var books =[
    //     {
    //         title:'The Alchemist',
    //         author:'Paulo coelho',
    //         genre:'Novel',
    //         img:'alchemist.jpg'
            
    //     },
    //     {
    //         title:'Shadow Dragons',
    //         author:'James A Owen',
    //         genre:'Fantasy Fiction',
    //         img:'shadow.jpg'
            
    //     },
    //     {
    //         title:'Pathummayude Aadu',
    //         author:'Vaikom Muhammed Basheer',
    //         genre:'Drama',
    //         img:'aadu.jpg'
            
    //     },
    
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Cartoon',
    //         img:'tom.jpg'
            
    //     },
    //     {
    //         title:'Aadujeevitham',
    //         author:'Benyamin',
    //         genre:'Novel',
    //         img:'Adujivitam.jpg'
            
    //     },
    //     {
    //         title:'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:'harry.jpg'
            
    //     }
    
    // ]
    
    
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Books',
                books
              });

        })
        
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
        
           });
        })
        
    });
    return booksRouter;

}


module.exports = router;