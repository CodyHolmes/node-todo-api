const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to mongo server', err);
    }
    console.log('Connected to mongo server!');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'A todo list item',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
})