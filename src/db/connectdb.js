const Sequelize = require('sequelize')

const db = new Sequelize('socialmediadb','socialuser','socialpass', {
    host: 'localhost',
    dialect: 'mysql',
    // pool: {
    //     min: 0,
    //     max: 5
    // }
})

db.sync()

.then(() => console.log('Database Established'))
.catch((err) => console.log('Unable to Fetch Database', err))

exports = module.exports = {
    db
}