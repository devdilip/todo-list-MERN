const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    _id:{
        type:String,
        required:[true,"id is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    chk:{
        type:Boolean,
        required:[true,"ckecked is required"]
    }
})

Todos = mongoose.model('todos',TodosSchema);
module.exports = Todos


module.exports.getTotalTodos = function (callback) {
    Todos.find(callback)
}
