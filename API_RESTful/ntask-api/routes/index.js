module.exports = app=>{

    app.get("/",(req,res)=>res.json({status:"its ok"}));
    app.get("/tasks",(req,res)=>{
    res.json({
        tasks:[
            {title:"Programar API"},
            {title:"Estudar"}

        ]
        });
    });

}