var mongoose = require('mongoose')
var UserModel = require('../modules/UserModule')
var itemModel = require('../modules/Item_Module')

function UserAPI(app){
// s: <code>.0987654lkjhgf
function formateSid(sid){
    return sid.split(':')[1].split('.')[0]
}





function athuntcation(req , res , next){
let sid = formateSid(req.cookies['connect.sid'])
if(req.session.user && sid === req.sessionID){
next()
}else{
    res.json({massage:'unathurized '})
}
}







app.post('/register' , async (req , res)=>{
    const {UserName , email,  password ,country , phoneNumber}  = req.body
    try{

        let user1 = new UserModel({
            _id:mongoose.Types.ObjectId(),
            UserName , 
            email,
            password,
            country,
            phoneNumber,
    
        })
        await user1.save()
        res.json({massage:'sucsses' , user1})
    }

    catch(error){
        console.log(error)
    }

})


app.post('/login' , async (req ,res) =>{
    const {UserName , password } = req.body
    try{
        let user = await UserModel.findOne({UserName , password})
        if(user){
           req.session.user = user
        res.json({massage:`sucsses login : ${UserName}`}) 
        }else if(!user){
            res.json({massage:'unAthuraized ...'})
        }
        
    }

catch(error){
    console.log(error)
}   

})

app.post('/logout' , athuntcation ,  async (req , res)=>{
    try{

      await req.session.destroy()
    }


    catch(error){
        console.log(error)
    }

})

app.post('/findByIdAndUpdate' , athuntcation ,  async (req , res)=>{
        const { _id ,UserName , password ,country , phoneNumber}  = req.body
    try{
    
        let ubdate = await UserModel.findByIdAndUpdate({_id :_id} , {UserName , password ,  country , phoneNumber }).exec()
        res.json({massage:'sucsses ubdated' , ubdate}) 
    }
    catch(error){
        console.log(error)
    }
    
})


app.post('/deleteAccount' , athuntcation ,  async (req , res) =>{
    const { _id } = req.body
try{
     let userDelete = await UserModel.findOneAndRemove({_id : _id}).exec()
     res.json({massage:'removed sucssesfuly .' , userDelete})
}
catch(error){
    console.log(error)
}

})







app.post('/pickIteam' ,athuntcation ,  async (req , res)=>{
    try{
         let item =  await itemModel.findOne({_id:item_id})
         item.userCart.push(_id.Itemid)
         res.json({massage:'sucsses' , item})
    }
    catch(error){
        console.log(error)
    }

})
    

app.get('/getAllStudent' , async (req , res)=>{
    try{
         await UserModel.find({}).exec((err ,data)=>{
             err?
             res.json({massage:'error' , error})
             :
             res.json({massage:'sucsses' , data})
         })
        

    }
    catch(error){
        console.log(error)
    }
})



}

module.exports = UserAPI