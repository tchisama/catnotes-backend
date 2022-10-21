const express = require("express")
const router = express.Router()
const note = require("../../modules/note")


router.get('/notes/:id',async(req,res)=>{
    const books = await note.find({"book":req.params.id})
    res.json(books)
})

router.post('/create',async(req,res)=>{
    const newnote = new note({
        title:req.body.title,
        body:req.body.body,
        book:req.body.book,
    })
    await newnote.save()
    res.send('done')
})

router.delete('/:id',async(req,res)=>{
    await note.findByIdAndDelete(req.params.id)
    res.send('done deleting')
})

router.put('/fav/:id',async(req,res)=>{
    const fav =await note.findById(req.params.id)
    await note.findByIdAndUpdate(req.params.id,{ $set: { isfav: !fav.isfav }})
    res.send('done')
})

module.exports=router
