const {Router} = require('express')

const {createAnnonymusUser,
    generateUserByUsername,
    generateUserById,
} = require('../../controllers/users')
const route = Router()

route.get('/:id', async (req,res) => {
    let user;
    console.log(req.params.id);
    if(isNaN(parseInt(req.params.id))){
        // when param is username
        const user = await generateUserByUsername(req.params.id)
    }else{
        // when param is user id
        user = await generateUserById(req.params.id)
    }

    console.log(user);
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send({
            error: 'No such Username or Id'
        })
    }
})

route.post('/', async (req,res) => {
    const user = await createAnnonymusUser()
    res.status(201).send(user)
})

module.exports = {
    UsersRoute: route
}