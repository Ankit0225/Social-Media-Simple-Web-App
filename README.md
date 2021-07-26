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

**Create Users**
 creating a new user with a random username

 **Posts**
 lists existing posts, following filter support to Users

 - filter by username

 - filter by query contained in title (search by title)