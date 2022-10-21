const express = require("express")
const router = express.Router()
const user = require('../../modules/user')

router.post('/',async(req,res)=>{
    user.findOne({"email":req.body.email})
        .then(resp=>resp.password==req.body.password? res.json(resp):res.json(null))
        .catch(err=>res.json(null))
})


router.post('/create',async(req,res)=>{
    const userusername =await user.findOne({"username":req.body.username})
    const useremail = await user.findOne({"email":req.body.email})
    const newuser = new user({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    if(useremail||userusername){
        res.json(null)
    }else{
        try{
            await newuser.save()
            res.json(newuser)
        }catch(err){
            res.json(null)
        }
    }
})



module.exports=router