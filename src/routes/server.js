const express = require('express')
const path = require('path')
const {db} = require('../db/models')
const app = express()

// db.sync({force: true})
db.sync()
.then(() => {
    console.log('Database Established');
    app.listen(3000,()=> {
                console.log('Server Started On http://localhost:3000')
    })
})
.catch((err) => {
   console.error('Unable to Connect Database')
   console.error(err);
})
