const bcrypt = require('bcryptjs');

let password = 'abc123!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
        hashedPassword = hash;
    });
});

let hashedPassword = '$2a$10$mneqlURqixqyT5JEH7ejCeqEDWaW9Uer/pas/oLB.TupT83Pbuedm';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})