const express =require("express");
const { Todo } = require("./Database");
const {createtodo,updatetodo}=require("./types");
const cors=require("cors")
const app=express();
app.use(cors());
app.use(express.json());
app.post("/todo",async (req,res)=>{
    const createplayload=req.body;
    const CTodo=createtodo.safeParse(createplayload);
    if(!CTodo.success){
        res.status(411).json({
            message:"wrong inputs"
        })
        return;
    }
    //const todo=CTodo.data;
    await Todo.create({
        title:createplayload.title,
        description:createplayload.description,
        completed:false
    });
    res.json({
        message:"to-do created"
    })
})
app.get("/todos",async (req,res)=>{
    const todos=await Todo.find().exec();
    res.json({todos:todos});

})
app.put("/completed", async (req,res)=>{
    const updateplayload=req.body;
    const UTodo=updatetodo.safeParse(updateplayload);
    if(!UTodo.success){
        res.status(411).json({
            message:"wrong inputs"
            })
            return;
            }
    await Todo.updateOne({
        _id:req.body.id
    },{completed:true})
    res.json({
        message:"to-do completed"
        })
})
app.listen(3000);