import { Router } from "express";
const loginRouter=Router();
import { compare } from 'bcrypt';
import { findOne } from "../model/userdata";

function router(nav)
{
    loginRouter.get('/',function(req,res){

    res.render('login',{
        nav,
        title:'Login'
    })
})
    loginRouter.post('/new',async function(req,res){
        let user=await findOne({email:req.body.email
    });
    if(!user){
        return res.status(404).send('Incorrect email or password');
    }
    const validpassword = await compare(req.body.pwd,user.pwd);
    if(!validpassword)
    {

        return res.status(400).send('incorrect password or email');
    }

   if(user.role ==="A"){
       res.redirect("../booksadmin");
   }else
   {
       res.redirect("../books");

   }

});

return loginRouter;
}

module.exports = router;

