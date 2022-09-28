const express=require('express');
const port=8000;
const app=express();
const path=require('path');
const db=require('./config/mongoose');
const Task=require('./models/tasks');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'));


app.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err)
        {
            console.log('Error in fetching tasks from Db',err);
            return;
        }
        return res.render('home',{
            title:'ToDo List',
             task_list:tasks
        });
    });
})

app.post('/create-list',function(req,res){
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,

    },function(err,newList){
        if(err){

            console.log(`Error in creating the tasklist ${err}`);
            return;
        }
        console.log("new task",newList);
        return res.redirect('back');
    })
})
app.get('/delete-list',function(req,res){

    let id=req.query.id;

    Task.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("error in deleting an object from database",err);
            return;
        }
    })
    
    return res.redirect('back');
});

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error came up ${err}`);
        return;
    }
    console.log(`Server running up on ${port}`);
})
