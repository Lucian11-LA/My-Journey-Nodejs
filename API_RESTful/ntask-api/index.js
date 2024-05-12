import express from "express";
const PORT = 3000;

const app = express();

app.get("/",(req,res)=>res.json({status:"its ok"}));

app.listen(PORT,()=>{
    console.log("Server on port "+PORT);
});