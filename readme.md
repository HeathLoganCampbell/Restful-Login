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
Create an account

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

## /SignUp
Post: [Email, Password]   

## /Login
Post: [Username, Password]

## /signout
Post: [Username, Password]

```
router.get('/signout', passport.authenticate('jwt', { session: false}), function(req, res) {
  req.logout();
  res.json({success: true, msg: 'Sign out successfully.'});
});
```

## /User
```
router.get('/book', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Book.find(function (err, books) {
      if (err) return next(err);
      res.json(books);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});
```
