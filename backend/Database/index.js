const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kc:Kc%40221836@cluster0.yv9pg.mongodb.net/todos")
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const Todo = mongoose.model('Todo', todoschema);
module.exports={
    Todo
}