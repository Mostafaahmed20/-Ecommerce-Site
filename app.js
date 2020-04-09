var server = require('express')
var app = server()
var body_parser = require('body-parser')
var express_session = require('express-session')
var coonectDB = require('./connectDB')
var cookie_parser = require('cookie-parser')
const { uuid } = require('uuidv4');
var UserAPI = require('./APIS/UserApi')
var sellerApi = require('./APIS/sellerApi')
var ItemAPI = require('./APIS/itemApi')
var CatgoryAPI = require('./APIS/CatagoryApi')

var port = process.env.port || 5000


app.use(body_parser.json())
app.use(cookie_parser())
app.use(express_session({
    resave:true,
    saveUninitialized:true,
genid:uuid,
secret:"catsession"
}))


coonectDB(app)
UserAPI(app)
sellerApi(app)
CatgoryAPI(app)
ItemAPI(app)

app.listen(port , ()=>console.log(`app is listen to ${port}`))