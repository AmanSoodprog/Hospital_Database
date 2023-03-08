const axios = require("axios")

exports.Homescreen=(req,res)=>{
    res.render("front.ejs")
}
exports.InDoc=(req,res)=>{
    res.render("insert_doc.ejs")
}
exports.Deletedoc=(req,res)=>{
    res.render("delete_doc.ejs")
}
exports.Deletepat=(req,res)=>{
    res.render("delete_pat.ejs")
}
exports.InPat=(req,res)=>{
    res.render("insert_pat.ejs")
}
exports.ViewDoc=(req,res)=>{
    axios.get("http://localhost:3001/api/users")
        .then(function(response)
        {
            //console.log(response.data)
            res.render('view_doc.ejs',{ users: response.data })
        })
        .catch(err=>{
            res.send(err)
        })
    //res.render("view_doc.ejs",{users:})
}
exports.ViewPat=(req,res)=>{
    //res.render("view_pat.ejs")
    axios.get("http://localhost:3001/api/pats")
        .then(function(response)
        {
            //console.log(response.data)
            res.render('view_pat.ejs',{ pats: response.data })
        })
        .catch(err=>{
            res.send(err)
        })
}