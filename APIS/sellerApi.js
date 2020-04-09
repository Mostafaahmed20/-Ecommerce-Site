var mongoose = require('mongoose')
var SellerModel = require('../modules/saleerModule')
var CatgoryModel = require('../modules/catagoryModule')
function SellerAPI(app){

    app.post('/registerSealer', async (req, res )=>{
        const {SallerName , email ,addresss , phone , password}=req.body
        try{
 let seller1 = new SellerModel({
            _id:mongoose.Types.ObjectId(),
                SallerName,
                email,
                addresss,
                phone,
                password,

        })

        let savedata = await seller1.save()
        res.json({massage:'sucsses'  , savedata})
        }
        catch(error){
            console.log(error)
        }
    })

app.post('/login' , async (req , res)=>{
    const{email , password } = req.body
    try{
        let sealer = await SellerModel.findOne({email , password })
        if(sealer){
            req.session.sealer = sealer
            res.json({massage:'logged in sucsses'})
        }else if(!sealer){
            res.json({massage:'unAthurized .....'})
        }
    }
    
catch(error){
    console.log(error)
}

app.post('/logout'  , async (req , res)=>{
    try{

         await req.session.destroy()
         res.json({massage:'looged out '})
    }
    catch(error){
        console.log(error)
    }
    
})
})

}
module.exports = SellerAPI