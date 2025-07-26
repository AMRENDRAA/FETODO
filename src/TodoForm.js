import React ,{useState} from "react";
import axios from "axios";

function TodoForm(){


    const [task ,settask]=useState("");
    const [date,setdate]=useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(!task){
            return alert("Task is required ");
        }
        if(!date){
            return alert("Date is required ");
        }

        try{
            await axios.post("https://ormtodo.onrender.com/api/todos",{
                task,
                date,

        });
        settask("");  
            setdate("");


        }catch(err){

            console.log(err);
            alert("Failed to add todo");

        }
    }


    return(

        <form onSubmit={handleSubmit} style={{marginBottom :"20px"}}>
            <input type="text" placeholder="Enter task" value={task} onChange={(e)=>settask(e.target.value)}/>

            <input type="date" value={date} onChange={(e)=>setdate(e.target.value)}/>

               <button type="submit">Add Todo</button>

          










        </form>
    );



}


export default TodoForm;