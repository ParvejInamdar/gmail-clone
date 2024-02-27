import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    subject:String,
    body:String,
    date:{
        type:Date,
        required:true
    },
    image:String,
    name:{
        type:String,
        required:true
    },
    starred:{
        type:Boolean,
        required:true,
        default:false
    },
    bin:{
        type:Boolean,
        required:true,
        default:true
    },
    type:{
        type:String,
        required:true
    }
})

//here emails is a collection name with the type EmailSchema (In mysql its a table name)
const email = mongoose.model('emails',EmailSchema);

export default email;