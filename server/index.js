const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()
const cors = require('cors')

const{ session_secret, connection_string, server_port } = process.env

let app = express()

app.use(express.json())
app.use(cors())


app.get('/api/testing', (req, res) => {
  console.log('testing endpoint hit');
  res.status(200).send('wat');
})

// TEST ENDPOINT //
app.get('/api/test', (req, res) => {
  let db = req.app.get('db')
  db.test().then(reply => res.status(200).send(reply))
})

// FUNCTIONAL ENPOINTS //
app.post('/api/submit' , ctrl.submit)
app.get('/api/all' , ctrl.all)
app.delete('/api/delete/:id', ctrl.delete)



massive(connection_string).then((instance)=>{
  app.set('db', instance)
  console.log('Database Connection Established')
})

app.listen(server_port, () => {
  console.log('Server Online ' + server_port)
})