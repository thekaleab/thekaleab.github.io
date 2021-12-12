const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
router.use((req,res,next)=>{
    fs.readFile(path.join("..","lab12","HTML","product.html"),(err,data)=>{
        if(err) throw err
        res.end(data)
    })
})

module.exports = router