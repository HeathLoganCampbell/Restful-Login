# REST Login system
A REST login system.
as time goes on, we are getting introducted to new technology everyday, so it's getting a bit out of hand, 
so we need modular code.

## Calls
### Sign up
```
POST <url>/api/user/signup

Body (json)
{
"email": "Akl@gmail.com",
"password": "asdas"
}
```
Create an account,
if there is any problems such as missing field, email incorrect format, you'll recieve a meaningful error

### Sign in
```
POST <url>/api/user/signin

Body (json)
{
"email": "Akl@gmail.com",
"password": "asdas"
}
```
Get your jwt token from the server


### Can Access
```
GET <url>/api/user/can-access
```

will return something if you're autherizied


## Tools
- MySql (database)
- jwt (Json web tokens)
- sequelize (MySql ORM)
- express (http management tool)
- passport (Passport is authentication middleware)

