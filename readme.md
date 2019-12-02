# REST Login system
A REST login system.

```
/signup
/login 
/signout
/user
```

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
