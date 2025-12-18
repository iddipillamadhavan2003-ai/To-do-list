import { useState } from "react";

function ToDoList(){
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(){
        setNewTask(event.target.value)

    }
    function handleAddButton(){
        if(newTask.trim()!=""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
      
    }
    function deleteTask(index){
        const updateTask=tasks.filter((_,i)=>index!==i);
        setTasks(updateTask)
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
            setTasks(updatedTask)
        }
        
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
            setTasks(updatedTask)
        }
        
    }


    
    return(
        <div className="to-do-list" >
            <h1>To-D0 List</h1>
            <div className="" 
            >
                <input 
                    type="text" 
                    placeholder="Enter You Task" 
                    value={newTask}
                    onChange={handleInputChange}
            />
            <button className="add-button"
                    onClick={handleAddButton}>
                    ADD

            </button>
        </div>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index} >
                      <span className="text" >{task}</span>  
                      <button className="delete-button"
                           onClick={()=>deleteTask(index)} >
                            Delete
                      </button>
                      <button className="move-up-button"
                           onClick={()=>moveTaskUp(index)} >
                            ⬆️
                      </button>
                      <button className="move-down-button"
                           onClick={()=>moveTaskDown(index)} >
                            ⬇️ 
                      </button>
                    </li>
            
                )}
                
            </ol>
                
            
            
            

        </div>
    );
}
export default ToDoList