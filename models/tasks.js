const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const Tasks=mongoose.model('Task' ,taskSchema);
module.exports=Tasks;
