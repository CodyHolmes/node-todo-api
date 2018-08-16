const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '5b7469a64798e4d30a507ec5';

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({
    _id: id
}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove({id}).then(() => {
    console.log(todo);
})