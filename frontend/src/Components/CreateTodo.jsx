import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const  [description,setDescription]=useState("");
    return (
        <div className="add">
            <input type="text" placeholder="title" onChange={(e)=>{
                const value=e.target.value;
                setTitle(value);
            }}></input><br />
            <textarea placeholder="description" onChange={(e)=>{
                const value=e.target.value;
                setDescription(value);
            }}></textarea><br />
            <button onClick={()=>
                fetch("http://localhost:3000/todo",{method:'POST',body:
                JSON.stringify({
                    title:title,
                    description:description
                }),headers:{
                    "Content-type":"application/json"
                }})
                .then(async (res)=>{
                    await res.json()
                    alert("to-do created");
                })
            }>Add a todo</button>
        </div>
    )
}