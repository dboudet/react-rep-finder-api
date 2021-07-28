const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const { createUser } = require('./src/users')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/users', createUser)

exports.app = functions.https.onRequest(app)