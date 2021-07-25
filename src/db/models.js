const Sequelize  = require('sequelize')

const {db} = require('./connectdb')
const DataTypes = Sequelize.DataTypes

const ID_DEFINE = {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
}
const USER_DEFINE = {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false
} 
const TITLE_DEFINE = {
    type: DataTypes.STRING(140),
    allowNull: false
} 
// By defining ID_DEFINE we don't have to define in many times
// in other tables
const Users = db.define('user', {
   id: ID_DEFINE,
   username: USER_DEFINE
})
const Posts = db.define('post', {
    id: ID_DEFINE,
    title: TITLE_DEFINE,
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
const Comments = db.define('comment', {
    id: ID_DEFINE,
    title: TITLE_DEFINE,
    body: {
        type: DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)


Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

// Due to hasMany and Belongs to Foreign Key will be established in database
module.exports = {
   db, Users, Posts, Comments
}