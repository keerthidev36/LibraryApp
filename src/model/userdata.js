const mongoose =require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;
const userSchema = new Schema({
    name:String,
    email:String,
    pwd:String,
    role:String
})
var userdata =mongoose.model("userdata",userSchema);
module.exports=userdata;
