var mongoose = require('mongoose')
var ItemModel = require('../modules/Item_Module')
var catagoryModel = require('../modules/catagoryModule')
function ItemAPI(app){

function formatSid(sid){
    return sid.split(':')[1].split('.')[0]
}

function athuntcate(req , res , next){
    let sid = formatSid(req.cookies['connect.sid'])
    if(req.session.user && sid === req.sessionID){
        next()
    }else{
        res.json({massage:'unAthorized....'})
    }

}


app.post('/insertIteam' , athuntcate ,  async (req , res)=>{
    const {ItemName , Brand ,Material , Country_of_origin , DESCRIPTION , warranty , catgory_id} = req.body
    try{
        let item1 = new ItemModel({
            _id:mongoose.Types.ObjectId(),
            ItemName,
            Brand,
            Material,
            Country_of_origin,
            DESCRIPTION,
            warranty,
            catagory:catgory_id
        })
        await item1.save()
        let currntCtagory = await catagoryModel.findOne({_id:catagory})
        currntCtagory.item.push(item1._id)
        res.json({massage:'sucsses' , currntCtagory})

    }
    catch(error){
        console.log(error)
    }
})



app.post('/editItem' , athuntcate ,  async (req ,res)=>{
    const {_id ,  ItemName , Brand ,Material , Country_of_origin , DESCRIPTION , warranty , catgory_id} = req.body
    try{
       let itemEdit = await  ItemModel.findOneAndUpdate({_id:_id},{ItemName , Brand ,Material , Country_of_origin , DESCRIPTION , warranty})
       itemEdit.save()
       res.json({massage:'sucsses'})
    }
    catch(error){
        console.log(error)
    }
    
})

app.post('/deleteItem' , athuntcate ,  async (req , res)=>{
    const {_id} = req.body
    try{
let deletedItem = await ItemModel.findByIdAndDelete({_id}).exec()
res.json({massage:'deleted sucssesfuly ...' , deletedItem})
    }
    catch(error){
        console.log(error)
    }
    
})
}

module.exports = ItemAPI