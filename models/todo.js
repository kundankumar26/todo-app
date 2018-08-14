var mongoose=require("mongoose");

var todoSchema=new mongoose.Schema({
    name:{
        type: 'string',
        required: 'please enter some name'
    },
    completed:{
        type: 'boolean',
        default: false
    },
    created_date:{
        type: 'Date',
        default: Date.now
    }
});

var Todo=mongoose.model('Todo',todoSchema);

module.exports=Todo;