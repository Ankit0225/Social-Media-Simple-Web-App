const {Posts, Users} = require('../db/models')

async function CreateUserPost(userId, title, body) {
    const post = await Posts.create({
        title,
        body,
        userId
    })
  return post
}
/*
  * show Posts({username: ''})
  * show Posts({title: ''})
*/

async function showPosts(query) {
    // TODO Handle query Param
    const posts = await Posts.findAll({
        include: [Users]
    })

    return posts
}

module.exports = {
    showPosts, CreateUserPost
}

// test code 

// async function test () {
// console.log(
//     await CreateUserPost(
//         1,
//         'This is a sample Post',
//         'Body of this post will be here'
//     )
// ),
// console.log(
//     await CreateUserPost(
//         2,
//         'Another sample Post',
//         'Body of this post will be here'
//     )
// ),
// console.log(
//     await CreateUserPost(
//         3,
//         'This is a sample Post',
//         'Body of this post will be here'
//     )
// )
//  const posts = await showPosts()
//  for(let p of posts)
//  console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n============\n`);
// }
// test()