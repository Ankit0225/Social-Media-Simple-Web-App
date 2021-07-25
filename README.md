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
src/
|-- controllers
|-- db
|-- public
|-- routes
```