const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/task_list_db');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting to db'));
//up and running
db.once('open',function(){
    console.log("Connected to database successfully");
});