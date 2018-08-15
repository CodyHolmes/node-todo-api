const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to mongo server', err);
    }
    console.log('Connected to mongo server!');

    const db = client.db('TodoApp');

    // deleteMany
    db.collection('Todos').deleteMany({text: 'delete this'}).then((result) => {
        console.log(result);
    });

    // deleteOne
    db.collection('Todos').deleteOne({text: 'delete this'}).then((result) => {
        console.log(result);
    });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    client.close();
})