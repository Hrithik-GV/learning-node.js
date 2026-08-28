const express=require('express')
const todoItemRouter=express.Router();

const todoItemController=require('../controllers/todoItemController');

todoItemRouter.get("/",todoItemController.getAllTodoItems);
todoItemRouter.post("/",todoItemController.createTodoItem);

todoItemRouter.delete("/:id",todoItemController.deleteTodoItem);
todoItemRouter.put("/:id/completed",todoItemController.updateTodoItem);

module.exports=todoItemRouter;