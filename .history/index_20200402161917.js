const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.listen(SERVER_PORT, () => {
    console.log(`server listening on the port ${SERVER_PORT}`)
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db =>{
    app.set('db', db)
}).catch(err => console.log(err))

app.get('/api/products', getAll)
app.get('/api/products/:id', getOne)
app.put('/api/products/:id', update)
app.post('/api/products', create)
app.delete('/api/products/:id', delete)