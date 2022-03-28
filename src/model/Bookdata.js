//Accessing  Mongoose package
const  mongoose  =require('mongoose');
//Database connection
//  mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.5ffz0.mongodb.net/libraryDb?retryWrites=true&w=majority');
//schema definition
const Schema = mongoose.Schema;
const BookSchema =new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});
//model creation
var Bookdata= mongoose.model('book',BookSchema); 
module.exports = Bookdata;


