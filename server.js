const express = require("express")
const dotenv = require("dotenv")
const app = express()
const morgan = require("morgan")
const bodyparser = require("body-parser")
const path = require("path")
const connectDB=require("./server/database/connection")
const connectDB1=require("./server/database/connection")

dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 3000

//console req
app.use(morgan("tiny"))

//mongo connection
connectDB()

//pass req to bodyparcer
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set('view engine','ejs')
//app.set("views","C:\Users\sooda\Desktop\Folders\Cprogfiles\web\Clinic_database\views")

//load assets
app.use('/css',express.static(path.resolve(__dirname,'Assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'Assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'Assets/js')))

app.use('/',require("./server/routes/router"))

app.listen(PORT)