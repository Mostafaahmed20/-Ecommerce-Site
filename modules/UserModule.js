var mongoose = require('mongoose')
let UserModel = new mongoose.model( 'user' , new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
UserName:{type:String , maxlength:100 , minlength:10},
email:{type:String},
password:{type:String, required:true},
country:{type:[String] , enum:['egy' , 'ksa' , 'uae']},
phoneNumber:{type:String , maxlength:12},
created_on:{type:Date  , default:Date.now},
item:[{type:mongoose.Schema.Types.ObjectId , ref:'item'}]
}))



module.exports = UserModel