const {Router} = require('express')

const route = Router()


route.get('/', (req,res) => {
    res.send("All Posts Here")
})


module.exports = {
    PostsRoute :route
}