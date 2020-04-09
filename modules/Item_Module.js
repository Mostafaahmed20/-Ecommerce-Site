var mongoose = require('mongoose')
var itemModel = new mongoose.model('item' , new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId , 
ItemName:{type:String , maxlength:100  , minlength:20},
Brand:{type:String  , required:true},
Material:{type:String , required:true},
Country_of_origin:{type:[String] , enum:['egy' , 'usa' , 'india']},
DESCRIPTION:{type:String , maxlength:100  , minlength:20},
warranty:{type:String},
catgory:{type:mongoose.Schema.Types.ObjectId , ref:'catgory'},
userCart:[{type:mongoose.Schema.Types.ObjectId , ref:'user'}]
}))

module.exports = itemModel
