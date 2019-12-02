/*
User factory (eh, kinda)

User
 - Id
 - Email
 - Password (Hash + Salt)
 - Creation Date
 - Active

SignUp
1. verify input
2. connect database
3. check if email already exists
4. if not create
  5.a. Hash password
  6.a. Save User
  7.a. Return "Successfully created user"
ELSE
  5.b. Return "User already  exisits"

Login
1. verify input
2. connect database
3. fetch user's entry based on email
4. Hash input password and match database entry
  5.a. return JWT {user.id}
ELSE
  5.b. return "Incorrect username or password"

Middleware
1. decoded = JWT Verify
2. connect to database
3. find user from database with id decoded.id
res.status(401).send({error:'Please authenticate!'})
*/
//We pass in tools we need
// export default function buildCreateUser() {
//   return function createUser(
//     {

//     } = {}) {
//     //Check if types are valid

//     //return object, use getters 
//     return Object.freeze({

//     })
//   }
// }