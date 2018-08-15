const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '5b7469a64798e4d30a507ec5';

Todo.find({
    _id: id
}).then((todos) => {
    if(todos.length === 0){
        return console.log('id not found');
    }
    console.log('Todos', todos);
})


Todo.findOne({
    _id: id
}).then((todo) => {
    if(!todo){
        return console.log('id not found');
    }
    console.log('Todo', todo);
})

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('id not found');
    }
    console.log('Todo by id', todo);
})