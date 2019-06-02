const express     = require('express')
const app         = express()
const bodyParser  = require('body-parser')

const adminRoutes = require('./routes/admin.js')
const shopRoutes  = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRoutes)
app.use(adminRoutes)



app.listen(5555)