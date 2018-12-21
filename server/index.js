const express = require('express')
const massive = require('massive')
// const ctrl = require('./controller')
require('dotenv').config()

const{ session_secret, connection_string, server_port } = process.env

let app = express()

app.use(express.json())


// TEST ENDPOINT //
app.get('/api/test', (req, res) => {
  let db = req.app.get('db')
  db.test().then(reply => res.status(200).send(reply))
})

// FUNCTIONAL ENPOINTS //
app.post('/api/submit' , (req, res) => {
  res.status(200).send(req.body)
})



massive(connection_string).then((instance)=>{
  app.set('db', instance)
  console.log('Database Connection Established')
})

app.listen(server_port, () => {
  console.log('Server Online ' + server_port)
})