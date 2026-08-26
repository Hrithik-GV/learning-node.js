const TodoItem=require('../models/todoItem');

exports.createTodoItem= async (req,res,next)=>{
    console.log(req.body);
    const{task,date}=req.body;
    const todoItem=new TodoItem({task,date});
    await todoItem.save();
    res.status(200).json(todoItem);
}
