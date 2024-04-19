import mongoose from "mongoose";

const EmployerCompanySchema = new mongoose.Schema({
    company_id: { type: String, required: [true,"Company ID is Required"], trim: true, unique:true},
    company_name:{type: String, required: [true,"Company Name is Required"], trim: true},
    company_email:{type: String, required: [true,"Company Email is Required"], trim: true, unique:true},
    company_mobile:{type: Number, required: [true,"Company Mobile Number is Required"], trim: true,minlength:10,maxlength:10},
    password:{type: String, required: [true,"Company Password is Required"], trim: true,minlength:10},
    company_sector:{type: String, required: [true,"Company Sector is Required"], trim: true},
    status:{type:String,default:"Pending",required:true,trim:true}

});

const EmployerCompanyModel = mongoose.model("EmployerCompany", EmployerCompanySchema);
export default EmployerCompanyModel; 


 

