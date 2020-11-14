const mongoose=require('mongoose');
const path=require('path');
const signUpschema=new mongoose.Schema({
    date:{
        type:Date,
        required:true,
        unique:true
    },
    email:{
        type:String
        
    },
    name:{
        type:String
        
    },
    phone:{
        type:String
    },
    message:{
        type:String
        
    }
},{
    timestamps:true
});

const User=mongoose.model('User',signUpschema);
module.exports=User; 