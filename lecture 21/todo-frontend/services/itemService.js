

export const addItemToServer=async({task,date})=>{
    const response=await fetch("http://localhost:3001/api/todo",{
        method:"POST",
        headers:{  
            "content-type":"application/json"
            },
            body:JSON.stringify({task,date})
    });
    const item =await response.json();
    return mapServerItemToLocation(item)
}

export const getAllTodoItems=async()=>{
    const reposnse=await fetch("http://localhost:3001/api/todo");
    const items=await reposnse.json();
    return items.map(mapServerItemToLocation) 
}

export const updateTodoItem=async(id)=>{
    const response=await fetch(`http://localhost:3001/api/todo/${id}/completed`,{
        method:"PUT"
    });
    const item=await response.json();
    return mapServerItemToLocation(item);
}
export const deleteTodoItem=async(id)=>{
   await fetch(`http://localhost:3001/api/todo/${id}`,{
        method:"DELETE"
    });
    return id;
}

const mapServerItemToLocation=(serverItem)=>{
   return {
    id:serverItem._id,
    name:serverItem.task,
    duedate:serverItem.date,
    completed:serverItem.completed,
    createdAt:serverItem.createdAt,
    updatedAt:serverItem.updatedAt,
   }
}