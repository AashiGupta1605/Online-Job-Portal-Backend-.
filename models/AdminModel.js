import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    AdminName:{type: String, required: [true,"Company Name is Required"], trim: true,unique:true},
    AdminEmail:{type: String, required: [true,"Company Email is Required"], trim: true, unique:true},
    password:{type: String, required: [true,"Company Password is Required"], trim: true,minlength:10},
    status:{type:String,default:"Active",required:true,trim:true}

});

const AdminModel = mongoose.model("Admin", AdminSchema);
export default AdminModel; 




