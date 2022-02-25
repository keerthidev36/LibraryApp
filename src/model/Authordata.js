//Accessing  Mongoose package
const  mongoose  =require('mongoose');
//Database connection
 mongoose.connect('mongodb://localhost:27017/library');
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.5ffz0.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//schema definition
const Schema = mongoose.Schema;
const AuthorSchema =new Schema({
    
    name:String,
    books:String,
    about:String,
    genre:String,
    image:String
});
//model creation
var Authordata= mongoose.model('authordata',AuthorSchema); 
module.exports = Authordata;


