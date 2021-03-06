var db=require("../models");

// get request
exports.getTodos= function(req,res){
    // res.send("hello from side routes");
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}
// post request
exports.createTodo= function(req,res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}
// get single request
exports.getTodo= function(req,res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}
// update single request
exports.updateTodo= function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
}
// delete single request
exports.deleteTodo= function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "You deleted it"});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports=exports;