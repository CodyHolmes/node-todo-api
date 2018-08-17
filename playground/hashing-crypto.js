const {SHA256} = require('crypto-js');

// Send data to user
let data = {
    id: 1
}

let token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'SomeSecret').toString()
}

// Man in the middle attack tries to change the id and hash to trick us but they don't know the secret
token.data.id = 2;
token.hash = SHA256(JSON.stringify(token.data)).toString();

// Our server checks the returned data
let resultHash = SHA256(JSON.stringify(token.data) + 'SomeSecret').toString();
if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed... DO NOT TRUST!');
}