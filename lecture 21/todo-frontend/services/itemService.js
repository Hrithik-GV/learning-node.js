

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