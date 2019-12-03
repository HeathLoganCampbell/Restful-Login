# REST Login system
A REST login system.
as time goes on, we are getting introducted to new technology everyday, so it's getting a bit out of hand, 
so we need modular code.

## How it works
1. a user registers with their email and password
2. the password is encrypted and stored in a database
3. you then signin with your username and password which will return you with a JWT 
4. you now make requests with your header being the JWT

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

**Successful output**
```json
{
    "message": "successfully created new user",
    "version": "yeet"
}
```

<details><summary>Click for HTTP Request</summary>
<p>


```http
POST /api/user/signup HTTP/1.1
Host: localhost:3000
Content-Type: application/json
cache-control: no-cache

{
"email": "Akl@gmail.com",
"password": "asdas"
}
```
</p>
</details>

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

**Successful output**
```json
{
    "success": true,
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWF0IjoxNTc1Mzc4MzUyLCJleHAiOjE1NzUzOTYzNTJ9.OMi6iXhdqdFI0iFKJSyx0hLJPhnXTUVI6VW7l_C3n20"
}
```

<details><summary>Click for HTTP Request</summary>
<p>


```http
POST /api/user/signin HTTP/1.1
Host: localhost:3000
Content-Type: application/json
cache-control: no-cache

{
"email": "Akl@gmail.com",
"password": "asdas"
}
```
</p>
</details>

### Can Access
```
GET <url>/api/user/can-access
```

will return something if you're autherizied

**Successful output**
```json
{
    "Animal": "Dogs"
}
```

<details><summary>Click for HTTP Request</summary>
<p>


```http
GET /api/user/can-access HTTP/1.1
Host: localhost:3000
Authorization: JWT <YOUR TOKEN FROM /api/user/can-access here>
cache-control: no-cache


```
</p>
</details>


## Tools
- MySql (database)
- jwt (Json web tokens)
- sequelize (MySql ORM)
- express (http management tool)
- passport (Passport is authentication middleware)

## What I would do differently next time
* I would first formilize the return stucture of payloads, so it's less messy
* I would use another more structured language like java or C# (Maybe even typescript)

