const {Router} = require('express')

const {showPosts, 
    CreateUserPost
} = require('../../controllers/posts')

const route = Router()


route.get('/', async (req,res) => {
    const posts = await showPosts() 
    res.status(200).send(posts)
})

route.post('/',  async (req, res) => {
    const { userId, title , body } = req.body

    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error: 'Need UserId, title and body to create Post'
        })
    }

    const post = await CreateUserPost(userId, title, body)
    res.status(201).send(post)
})

module.exports = {
    PostsRoute: route
}