import EmployerCompanyModel from "../models/EmployerCompanyModel.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const Registration = async (req, res) => {
    const {company_id,companyname,company_email,company_mobile,password,company_sector,repassword} = req.body;
    if (company_id&&companyname&&company_email&&company_mobile&&password&&company_sector&&repassword) {
        if (password === repassword) {
            try {
                const pswdkey = await bcryptjs.genSalt(12);
                req.body.password = await bcryptjs.hash(req.body.password,pswdkey);
                const doc = new EmployerCompanyModel(req.body);
                await doc.save();
                res.status(201).send({status:"Success",message:"Registered Successfully"});
            }
            catch(err){
                console.log(err);
                res.send({status:"Error",message:"Unable to Register"});
            }
        }
        else
        res.send({status:"Password Issue",message:"Re-entered Password is Incorrect"});
    }
    else
    res.send({status:"Registeration Unsuccessful",message:"Fill Registeration form Properly"});
}
 
const login = async(req,res)=>{
    const { company_email,password } = req.body;
    if (company_email&&password){
        const data = await EmployerCompanyModel.findOne({company_email}); 
        if(data!=null){
            const chkPswd=await bcryptjs.compare(password,data.password)
            if(company_email==data.company_email && chkPswd){
                if(data.status==="Active"){
                const jwtSecretKey="sdfghhuirkngfbmEmployerKey";
                const token = jwt.sign({company_email:data.company_email,company_name:data.company_name,password:data.password}, jwtSecretKey,{expiresIn:"1h"});
                res.send({status:"Login Successfully.......",token});
                }
                else
                res.send("You are not approved by admin..........");
            }
            else
            res.send("Incorrect ID/Password.....Re-enter Properly....");
        }
        else
        res.send("You are not Registered, register first.....");
    }
    else
    res.send({status:"Login Unsuccessful",message:"Fill Login form Properly"});
}


// const getdata = async(req,res)=>{
//     const result=jwt.verify(req.token,"sdfghhuirkngfbm");
//     console.log(result);
//     if(result){
//     const data=await UserModel.find(); 
//     res.send(data);}
//     else
//     res.send("You are not approved......");
// }
// const getdatabyID = async(req,res)=>{
//     const data=await UserModel.find({username:req.params.username}); 
//     if(data==[])
//     res.send(`Record of ${req.params.username} is NOT Found......Roll no. ${req.params.username} is not registered......`);
//     else
//     res.send(data);
// }
// const Update = async(req,res)=>{
//     const {username,firstname,lastname, email, mobile, password, rpassword,job_sector } = req.body;
//     if (username && firstname && lastname && email && mobile && password && rpassword&&job_sector) {
//     const data = await UserModel.findOne({username:req.params.id}); 
//     if(data==null)
//     res.send("Record not found.....");
//     else{
//     // data.email=email;
//     // data.mobile=mobile;//data.mobile=req.body.mobile;
//     data=req.body;
//     data.save();
//     res.send("Record updated......");
//     }
// }
// else
// res.send("New Data given to update is not proper........");
// }
// const DeletebyID= async(req,res)=>{
//     const data = await UserModel.findOne({username:req.params.username}); 
//     if(data==null)
//     res.send("Record not found.....");
//     else{
//     await UserModel.deleteOne({username:req.params.username}); 
//     res.send("Record Deleted Successfully.....");
//     }
// }
// const Delete= async(req,res)=>{
//     const data = await UserModel.find(); 
//     if(data==null)
//     res.send("No Records found.....EMPTY Student Collection........");
//     else{
//      await UserModel.deleteMany();   
//     res.send("All Records Deleted Successfully.....");
//     }
// }
// export default {Registration,Delete,DeletebyID,Update,login,getdata,getdatabyID}; 
export default {Registration,login};