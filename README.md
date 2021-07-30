# Social Media Web App

Installed Dependencies
```shell
express
mysql2
sequelize
```

Create Database with MySQL

```sql
create database socialmediadb;

create user socialuser identified by 'socialpass';

grant all privileges on socialmediadb.* to socialuser;

flush privileges;
```

### Working tree

```
src
├───controllers  # connecting routes to db operations
├───db           # DB connections and model files
├───public       # html,css and js files
├───routes       # express middlewares (routes files)
└───utils        # (random username files)
```

### Project Features
### Users

**Create Users**
 creating a new user with a random username

### Posts

 **Posts**
 lists existing posts, following filter support to Users

 - filter by username

 - filter by query contained in title (search by title)

 ### Comments

 ***show all comments (of a user)***

 ***show all comments (under a post)***

 ***add a comment***


 ### API Documentaton

### `Users`

1. `POST /users`
 
 This Creates a new User with random username and an userId

 2. `GET /users/{userid}` 

 Get a user with user id

 3 `GET /users/{username}`

 Get an user with a given username


### `Posts`

1. `GET /posts`

This will give all posts by everyone

2. `POST /posts`

This creates a new post.

Required Field is 
```
userId*
title*
body*
```

### Frontend

FrameWorks Used Are

```
Bootstrap
Semantic

jQuery
Popper.js
```
### Frontend Working Tree

```
public
├───app
├───components
├───css
└───js
```
