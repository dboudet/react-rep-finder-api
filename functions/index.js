const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const { createUser, getUser, updateUser } = require('./src/users')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users/:email', getUser)
app.patch('/users/:userId', updateUser)
app.post('/users', createUser)

exports.app = functions.https.onRequest(app)