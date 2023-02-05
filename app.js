const express = require ('express');
const mongoose= require ('mongoose');
const bodyParser = require ('body-parser');
const homeRoutes= require ('./routers/home');   //homerouter from app.js

const app = express();
const port = process.env.port || 8081;


mongoose.connect("mongodb://0.0.0.0:27017/studentdetails", {useNewUrlParser: true})
mongoose.set('strictQuery', false);
const db= mongoose.connection

db.on('error',()=>{
    console.log("error")
} )
db.once('open', ()=>{
 console.log("connected")
})


app.set ('view engine', 'ejs');
app.use(express.static('public'))

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use ('/', homeRoutes);
app.listen(port)