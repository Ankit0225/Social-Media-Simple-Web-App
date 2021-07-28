const express = require('express')
// const path = require('path')
const {db} = require('../db/models')
const {UsersRoute} = require('../routes/users')
const {PostsRoute} = require('../routes/posts')


const app = express()


// app.use(express.json())
// app.use(express.urlencoded({extended: true}))


app.use('/api/users', UsersRoute)
app.use('/api/posts', PostsRoute)
app.use('/', express.static(__dirname + '/public'))


// db.sync({force: true})
db.sync()
.then(() => {
    console.log('Database Established');
    setTimeout(() => {
        app.listen(5000,()=> {
            console.log('Server Started On http://localhost:5000')
        })
    },300)
})
.catch((err) => {
   console.error(new Error('Unable to Connect Database'))
   console.error(err);
})
