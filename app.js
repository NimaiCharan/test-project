const express = require('express')
const db = require('./db')
const app = express()
const port = 3000
var bodyParser = require('body-parser');

var testRouter = require('./routes/test');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Bijaya')
})

app.use('/nimai', testRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})