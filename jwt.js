const jwt = require('jsonwebtoken')

const user = {
    name: "afrah",
    email: "afrah@gmail.com"
}

const secretKey = "mykey"

const token = jwt.sign(user,secretKey)

console.log(token);
