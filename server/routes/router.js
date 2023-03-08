const express= require("express")
const route=express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")
var methodOverride = require('method-override')


route.get('/',services.Homescreen)

route.get('/insert_doc',services.InDoc)

route.get('/insert_pat',services.InPat)

route.get('/view_doc',services.ViewDoc)

route.get('/view_pat',services.ViewPat)

route.get('/front',services.Homescreen)

route.get('/delete_doc',services.Deletedoc)

route.get('/delete_pat',services.Deletepat)

//api route
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
//route.delete('/api/users/:name',controller.delete1)


route.post('/api/pats',controller.createpat)
route.get('/api/pats',controller.findpat)
route.put('/api/pats/:id',controller.update)
//route.delete('/api/pats/:name',controller.delete2)
//route.use(methodOverride('/api/pats/DELETE/:name'),controller.delete)
// route.post(methodOverride('/api/pats/DELETE/:name'),controller.delete_one)
route.post(methodOverride('/api/users/DELETE'),controller.delete)


module.exports=route