const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

const {SERVER_PORT} = process.env

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT}`)
})