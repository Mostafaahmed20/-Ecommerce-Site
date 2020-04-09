var mongoose = require('mongoose')
var CatgoryModel = new mongoose.model( 'catgory' , new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
CatgoryName:{type:String , maxlength:100 , minlength:20 , required:true},
Brand:{type:String , required:true },
Material:{type:String  , required:true},
Country_of_origin:{type:[String] , enum:['egy' , 'usa' , 'india']},
DESCRIPTION:{type:String , maxlength:100  , minlength:20},
item:[{type:mongoose.Schema.Types.ObjectId , ref:'item'}]
}))
module.exports = CatgoryModel