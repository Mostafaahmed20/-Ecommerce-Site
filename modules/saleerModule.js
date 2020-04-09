var mongoose  = require('mongoose')

var SallerModel = new mongoose.model('saller', new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    SallerName:{type:String , maxlength:100 , minlength:10},
    email:{type:String , required:true},
    addresss:{type:String , maxlength:100},
    phone:{type:String , maxlength:13 },
    password:{type:String , maxlength:15 , minlength:10},
    catgory:{type:mongoose.Schema.Types.ObjectId , ref:'catgory'}
    

}))

module.exports = SallerModel