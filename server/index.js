const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
 
const con=mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        password:"",
        database:"user1",
    }
)
app.post('/signup',(req,res)=>{
    const email= req.body.email;
    const password=req.body.password;
    con.query("INSERT INTO user(email,password)VALUES(?,?)",[email,password],
       (err,result)=>{
        if(result){
            res.send(result);
            console.log(result);
        }
        else{
           
            res.send({message:"Enter correct details"});
        }
       }
    )
})

app.post('/login',(req,res)=>{
    
    const email= req.body.email;
    const password=req.body.password;
    con.query("SELECT*from user WHERE email=? AND password=? ",[email,password],
       (err,result)=>{
        if(err){
            res.setEncoding({err:err});
        }
        else{
            if(result.length>0){
                res.send(result);
            }
            else{
                res.send({message:"Wrong Password "});
            }
            
        }
       }
    )
})
app.listen(4000,()=>{
    console.log("running");
})