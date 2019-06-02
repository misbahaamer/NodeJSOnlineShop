const http    = require('http');
const express = require('express')
const app     = express()

app.use('/users', (req, res, next) => {
    console.log('in the middleware')
    res.send('<h1>bismillah hir rahmaanirraheem</h1>');
})
app.use('/', (req, res, next) => {
    console.log('in another middleware')
    res.send('<h1>bismillah</h1>');
})

app.listen(5555)