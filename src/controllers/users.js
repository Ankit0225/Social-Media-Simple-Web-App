
const {Users} = require('../db/models')
const { generateRandomUser } = require('../utils/username')

async function createAnnonymusUser() {

    const user = await Users.create({
        username: generateRandomUser()
    })

    return user
}

async function generateUserById(id) {
    return await Users.findOne({ where: { id } })
}
async function generateUserByUsername(username) {
    return await Users.findOne({ where: { username }  })
}

module.exports = {
    createAnnonymusUser,
    generateUserById,
    generateUserByUsername
}
// testing Code
// async function task () {
//     console.log(await createAnnonymusUser());
//     console.log('===============');
//     console.log(await createAnnonymusUser());
//     console.log('===============');
//     console.log(await createAnnonymusUser());
//     console.log('===============');
// }

// task()