var mongoose=require("mongoose");
mongoose.set('debug',true);

// mongoose.connect("mongodb://localhost/todo-api");
mongoose.connect("mongodb://kk:kundan1@ds111072.mlab.com:11072/todoapi")

mongoose.Promise=Promise;

module.exports.Todo=require("./todo");