const express= require('express');

const authorsRouter =  express.Router();
const Authordata = require('../model/Authordata');
function router(nav){

    // var authors =[
    //     {
            
    //         name:'Paulo coelho',
    //         books:'The Alchemist(1988) , Eleven minutes(2003),Veronika Decides to Die(1998),The Pilgrimage(1987),The Zahir(2005),Aleph(2010)',
    //         about:'Paulo Coelho, (born August 24, 1947, Rio de Janeiro, Brazil), Brazilian novelist known for employing rich symbolism in his depictions of the often spiritually motivated journeys taken by his characters',
    //         genre:'Drama,Romance',
    //         img:'paulo.jpg'
            
    //     },
    //     {
            
    //         name:'James A Owen',
    //         books:'Shadow Dragons(2009) ,Here(2006), There Be Dragons(2006),  The Indigo King (2008), The Dragons of Winter(2012)',
    //         about:'James A. Owen is an American comic book illustrator, publisher and writer. He is known for his creator-owned comic book series Starchild and as the author of The Chronicles of the Imaginarium Geographica novel series, that began with Here, There Be Dragons in 2006',
    //         genre:'Fantasy Fiction , Novel Series',
    //         img:'james.jpg'
            
    //     },
    //     {
            
    //         name:'Vaikom Muhammed Basheer',
    //         books:'Pathummayude Aadu ,Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Janmadinam , Anargha Nimisham ',
    //         about:'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man.The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story.',
    //         genre:'Drama, Short stories, Novel',
    //         img:'basheer.jpg'
            
    //     },
    
    //     {
            
    //         name:'Joseph Barbera',
    //         books:'Tom and Jerry, Cat and mouse series,Cubby Bear and Rainbow Parades etc..',
    //         about:'Joseph "Joe" Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, who co-founded the animation studio and production company Hanna-Barbera. Born to Italian immigrants in New York City, Barbera joined Van Beuren Studios in 1927 and subsequently Terrytoons in 1929.',
    //         genre:'Cartoon ,film',
    //         img:'joseph.jpg'
            
    //     },
    //     {
            
    //         name:'Benyamin',
    //         books:'Aadujeevitham, Jasmine Days(2018),Yellow Lights of Death(2015),Body and Blood(2020),Postman(2018),winner etc..',
    //         about:'Benyamin is an Indian novelist and short story writer in Malayalam from Njettur, Kulanada, near Pandalam of the south Indian state of Kerala. He lived in the Kingdom of Bahrain from 1992 to 2013, before returning to Kerala. His works appear regularly in Malayalam publications in Kerala.',
    //         genre:'Novel,Short Stories',
    //         img:'beny.jpg'
            
    //     },
    //     {
            
    //         name:'J K Rowling',
    //         books:'Harry Potter,Cormoran Strike,The lckabog',
    //         about:'Joanne Rowling , better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, and screenwriter. She is author of the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.',
    //         genre:'Fantasy,Crime Fiction ,young adult fiction,tragicomedy',
    //         img:'jk.jpg'
            
    //     }
    
    // ]
    
    
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Authors',
                authors
              });

        })
        
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
        
        });

        })
        
    });
    return authorsRouter;

}


module.exports = router;