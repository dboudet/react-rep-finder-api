const admin = require('firebase-admin')
const credentials = require('../credentials.json')

function connectDb() {
    if (!admin.length) {
        admin.initializeApp({
            credential: admin.credential.cert(credentials)
        })
    }
    return admin.firestore()
}

exports.createUser = (req,res) => {
    if(!req.body) {
        res.status(401).send('Invalid Request')
        return
    }
    const db = connectDb()
    db.collection('users').add(req.body)
        .then( () => res.status(201).send({message: 'User created'}))
        .catch( err => res.status(500).send(err))
}