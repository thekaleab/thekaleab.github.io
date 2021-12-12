const express = require('express')

const router = express.Router()

router.use((req,res,next)=>{
    res.end("Form for user Submitted")
})

module.exports = router