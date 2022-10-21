const express = require("express")
const router = express.Router()
const book = require("../../modules/book")

router.get('/books/:id',async(req,res)=>{
    const books = await book.find({"owner":req.params.id})
    res.json(books)
})

router.post('/create',async(req,res)=>{
    try{
        const newbook = new book({
            title:req.body.title,
            color:req.body.color,
            owner:req.body.owner,
        })
        await newbook.save()
        res.send('done')
    }catch(err){
        res.send(err)
    }

})

router.delete('/:id',async(req,res)=>{
    await book.findByIdAndDelete(req.params.id)
    res.send('done deleting')
})

router.put('/fav/:id',async(req,res)=>{
    const fav =await book.findById(req.params.id)
    await book.findByIdAndUpdate(req.params.id,{ $set: { isfav: !fav.isfav }})
    res.send('done')
})


module.exports=router