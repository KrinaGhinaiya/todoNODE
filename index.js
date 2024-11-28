const express = require('express');
const app = express();
const port = 2612;


app.set('view engine' , 'ejs');
app.use(express.urlencoded());

let alltask=[
    {
        task:"Create a List"
    },
    {
        task:"read a List"
    },
]
let completedtask=[
    {
        task:"List"
    },
]

app.get("/",(req,res)=>{
    res.render("index",{alltask:alltask,completedtask:completedtask})
})
app.post("/addtodo",(req,res)=>{
    // console.log(req.body);
    let {task}= req.body
    let newtask= {
        task
    }
    alltask.push(newtask)
    // alltask.push(req.body)
    res.redirect("/")
})
app.get("/delete/:id",(req,res)=>{
    let index= req.params.id
    alltask =alltask.filter((val,i)=>{
        return i!=index
    })
    res.redirect("/")
})

app.get("/complete/:id",(req,res)=>{
    let index= req.params.id
    result = alltask.filter((val,i)=>{
        return i==index
    })
    completedtask.push(result[0])
    alltask= alltask.filter((val,i)=>{
        return i!=index
    })
    // completedtask.push(result[0])
    res.redirect("/")
})


app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(port,(err)=>{
    if(err){
        console.log('server not start');
    }else{
        console.log(`server is start at http://localhost:${port}`);
        
    }
})