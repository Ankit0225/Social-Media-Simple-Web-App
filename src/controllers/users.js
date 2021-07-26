
const {Users} = require('../db/models')
const { generateRandomUser } = require('../utils/username')

async function createAnnonymusUser() {

    const user = await Users.create({
        username: generateRandomUser()
    })

    return user
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