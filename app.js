const express = require('express')
const db = require('./db')
const app = express()
const port = 3000


var testRouter = require('./routes/test');

app.get('/', (req, res) => {
  res.send('Bijaya')
})

app.use('/nimai', testRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})