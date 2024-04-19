import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
username: { type: String, required: [true,"User Name is Required"], trim: true, unique:true},
firstname:{type: String, required: [true,"User First Name is Required"], trim: true},
lastname:{type: String, required: [true,"User Last Name is Required"], trim: true},
email:{type: String, required: [true,"User Email is Required"], trim: true, unique:true},
mobile:{type: Number, required: [true,"User Mobile Number is Required"], trim: true,minlength:10,maxlength:10},
password:{type: String, required: [true,"User Password is Required"], trim: true,minlength:10},
gender:{type: String, required:false, trim: true},
age:{type: Number, required:false, trim: true},
job_sector:{type: String, required: [true,"Choose a Job Sector is Required"], trim: true},
current_location:{type: String, required: false, trim: true},
state:{type: String, required:false, trim: true},
city:{type: String, required:false, trim: true},
status:{type:String,default:"Active",required:true,trim:true}
});
 
const UserModel = mongoose.model("User", UserSchema);
export default UserModel;

