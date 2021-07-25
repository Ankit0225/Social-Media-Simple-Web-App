const Sequelize = require('sequelize')

const db = new Sequelize({
    database: 'socialmediadb',
    username: 'socialuser',
    password: 'socialpass',
    dialect: 'mysql',
    host: 'localhost',
})

exports = module.exports = {
    db
}