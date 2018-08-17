const jwt = require('jsonwebtoken');

// Send data to user
let data = {
    id: 10
}

let token = jwt.sign(data, 'SomeSecret');
console.log("Token:", token);

let decoded = jwt.verify(token, 'SomeSecret');
console.log("Decoded:", decoded);
