const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT}`)
})

massive(CONNECTION_STRING).then(db => {
    console.log('connected to database')
    app.set('db', db)
})