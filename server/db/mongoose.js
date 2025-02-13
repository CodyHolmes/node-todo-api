const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

module.exports = {
    mongoose
}