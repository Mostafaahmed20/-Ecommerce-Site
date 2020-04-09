var mongoose = require('mongoose')

var CatgoryModel = require('../modules/catagoryModule')

function CatgoryAPI(app){

function formatSid(sid){
return  sid.split(':')[1].split('.')[0]
}

function athuntcation(req , res , next){
    let sid = formatSid(req.cookies['connect.sid'])

    if(req.session.sealer && sid  === req.sessionID){
        next()
    }else{
        res.json({massage:'error athuntcation ....'})
    }

}

app.post('/insertCatgory', athuntcation,async(req , res)=>{
    const {CatgoryName , Brand , Material , Country_of_origin , DESCRIPTION } = req.body
    try{
        let Catgory1 = new CatgoryModel({
            _id:mongoose.Types.ObjectId(),
            CatgoryName,
            Brand,
            Material,
            Country_of_origin,
            DESCRIPTION
        })
        
        await Catgory1.save()
        res.json({massage:'sucsses' , Catgory1})
    }
    catch(error){
        console.log(error)
    }
    

})





app.post('/ubdateCatgory' , athuntcation , async (req , res)=>{
    const {_id , CatgoryName , Brand , Material , Country_of_origin , DESCRIPTION } = req.body
    try{

       let ubdate = await CatgoryModel.findByIdAndUpdate({_id:_id} , {CatgoryName , Brand , Material , Country_of_origin , DESCRIPTION }).exec()
       res.json({massage:'ubdated ...' , ubdate})
    }
    catch(error){
        console.log(error)
    }
    
})


app.post('/findByIdAndDelete' ,athuntcation , async  (req , res)=>{
    const{_id} = req.body
    try{
        let deleted = await  CatgoryModel.findByIdAndDelete({_id:_id}).exec()
        res.json({massage:'deleted sucssefuly ..' , deleted})
    }
    catch(error){
        res.json({massage:"error"})
    }

    
})

app.get('/getAllCatgory' ,athuntcation , async  (req , res)=>{
    try{
let catagoryALL = await CatgoryModel.find({}).exec()
res.json({massage:'sucsses' , catagoryALL})
    }
    catch(error){
        console.log(error)
    }
})



}
module.exports = CatgoryAPI


