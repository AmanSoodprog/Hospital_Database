var newData=require("../model/model")
var newData1=require("../model/model")

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"cannot be empty"})
        return
    }

    const doc=new newData({
        name:req.body.name,
        Organ:req.body.Organ,
        Type:true
    })

    doc
        .save(doc)
        .then(data=>
            {
                //res.send(data)
                res.redirect("/insert_doc")
            })
        .catch(err=>
            {
                res.status(500).send({
                    message:err.message || "some error"
                })
                
            })
}

exports.createpat=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({message:"cannot be empty"})
        return
    }

    const pat=new newData1({
        name:req.body.name,
        Organ:req.body.Organ,
        Type:false
    })

    pat
        .save(pat)
        .then(data=>
            {
                //res.send(data)
                res.redirect("/insert_pat")
            })
        .catch(err=>
            {
                res.status(500).send({
                    message:err.message || "some error"
                })
                
            })
}

exports.find = (req,res)=>
{
    if(req.query.id)
    {
        const id= req.query.id
        newData.findById(id)
            .then(data=>{
                if(!data)
                {
                    res.status(404).send({message:"error"})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>
                {
                    res.status(500).send({message:"error"})
                })
    }
    else
    {
    newData.find()
    .then(user=>
        {
            res.send(user)
        })
    .catch(err=>{
        res.status(500).send({message:"error"})
    })
    }
}

exports.findpat = (req,res)=>
{
    if(req.query.id)
    {
        const id= req.query.id
        newData1.findById(id)
            .then(data=>{
                if(!data)
                {
                    console.log("here")
                    res.status(404).send({message:"error"})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>
                {
                    res.status(500).send({message:"error"})
                })
    }
    else
    {
    newData1.find()
    .then(pat=>
        {
            res.send(pat)
        })
    .catch(err=>{
        res.status(500).send({message:"error"})
    })
    }
}

exports.update = (req,res)=>
{
    if(!req.body)
    {
        return res
            .status(500)
            .send({message:"error"})

    }
    
    const id=req.params.id
    newData.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data=>
            {
                if(!data)
                res.status(404).send({message:"error"})
                else{
                    res.send(data)
                }
            })
        .catch(err=>
            {
                res.status(500).send({message:"error"})
            })
        
}

exports.delete= (req,res)=>
{
    console.log("inside")
    console.log(req.body.name)
    //newData.findOneAndDelete(id)
    if(req.body.Organ==undefined)
    {
        newData.deleteOne({name:req.body.name})
        .then(data=>
            {
                if(!data)
                {
                    res.status(404).send({message:"error"})
                }
                else{
                    // res.send({message:"user deleted"})
                    res.redirect("/delete_doc")
                
            }
            })
        .catch(err=>
            {
                res.status(500).send({message:"error pass1"})
            })
        }
        else
        {
            newData.deleteOne({name:req.body.name},{Organ:req.body.Organ})
            .then(data=>
                {
                    if(!data)
                    {
                        res.status(404).send({message:"error"})
                    }
                    else{
                        // res.send({message:"user deleted"})
                        res.redirect("/delete_pat")
                    
                }
                })
            .catch(err=>
                {
                    res.status(500).send({message:"error pass2"})
                })
        }
}

// exports.delete_one= (req,res)=>
// {
//     console.log("inside")
//     const id = req.params.name
//     console.log("here")
//     //newData.findOneAndDelete(id)
//     newData.findOneAndDelete(id)
//         .then(data=>
//             {
//                 // if(!data)
//                 // {
//                 //     res.status(404).send({message:"error"})
//                 // }
//                 // else{
//                 //     // res.send({message:"user deleted"})
//                     res.redirect("/delete_pat")
//             //     }
//             // }
//             })
//         .catch(err=>
//             {
//                 res.status(500).send({message:"error pass1"})
//             })
// }

// exports.delete2= (req,res)=>
// {
//     const id = req.params.name
//     newData.findByIdAndDelete(id)
//         .then(data=>
//             {
//                 if(!data)
//                 {
//                     res.status(404).send({message:"error"})
//                 }
//                 else{
//                     // res.send({message:"user deleted"})
//                     res.redirect("/delete_pat")
//                 }
//             })
//         .catch(err=>
//             {
//                 res.status(500).send({message:"error"})
//             })
// }