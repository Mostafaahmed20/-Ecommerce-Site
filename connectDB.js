var mongoose = require('mongoose')

function coonectDB(){

mongoose.connect('mongodb+srv://dbuser:dbuser123@cluster0-cznac.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser: true } )
.then(()=>console.log('connected sucssesfuly ......'))
.catch(()=>console.log('error while coonecting to data base ......'))

}


module.exports = coonectDB