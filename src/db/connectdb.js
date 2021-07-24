const Sequelize = require('sequelize')

const db = new Sequelize({
    database: 'socialmediadb',
    username: 'socialuser',
    password: 'socialpass',
    dialect: 'mysql',
    host: 'localhost',
})

db.sync()

.then(() => console.log('Database Established'))
.catch((err) => console.log('Unable to Fetch Database', err))

exports = module.exports = {
    db
}