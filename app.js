const express= require('express');

const app=express();

    const nav= [
        {
            link:'/books',name:'Books'
        },
        {
            link:'/authors',name:'Authors'
        },
        {
            link:'/admin',name:'Add Book'
        },
        {
            link:'/addAuthor',name:'Add Author' 
        },
        {
            link:'/login',name:'Login'
        },
        {
            link:'/signup',name:'Sign Up'
        }
    ]
    
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)

const adminRouter = require('./src/routes/adminRoutes')(nav) 
const admin2Router=require('./src/routes/admin2Routes')(nav)

const loginRouter=require('./src/routes/loginRoutes')(nav)
 const signupRouter=require('./src/routes/signupRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');//either . or __dirname 
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.use('/admin',adminRouter);
app.use('/addAuthor',admin2Router);

 app.use('/login',loginRouter);
   app.use('/signup',signupRouter);


app.get('/',function(req,res){
// res.send("hello world!!");
// res.sendFile("C:/Users/Keerthi Dev/Desktop/LIBRARYAPP/src/views/index.html");
   res.render("index",
     {
       nav,
       title:'Library'
      });
});

app.listen(process.env.PORT || 5070);
