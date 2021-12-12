const express = require('express')

const app = express()

const formUser = require('./Routers/formUser')
const formProduct = require('./Routers/fromProduct')
const user = require('./Routers/userRouter')
const product = require('./Routers/productRouter')

app.use('/formUser',formUser)
app.use('/formProduct',formProduct)
app.use('/users',user)
app.use('/products',product)



app.listen(9000)
