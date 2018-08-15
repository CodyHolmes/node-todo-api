const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to mongo server', err);
    }
    console.log('Connected to mongo server!');

    const db = client.db('TodoApp');

    db.collection('Todos').find({completed: false}).toArray().then((result)=> {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todo');
    });

    db.collection('Todos').count({completed: false}).then((count)=>{
        console.log(`Todo count: ${count}`);
    }, (err) => {
        console.log('Unable to count todo');
    });

    client.close();
})