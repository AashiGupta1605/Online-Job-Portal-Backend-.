import AdminModel from "../models/AdminModel.js";
import UserModel from "../models/UserModel.js";

import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const Registration = async (req, res) => {
    const {AdminName,AdminEmail,password,rpassword} = req.body;
    if (AdminName && AdminEmail && password && rpassword) {
        if (password === rpassword) {
            try {
                const pswdkey = await bcryptjs.genSalt(12);
                req.body.password = await bcryptjs.hash(req.body.password,pswdkey);
                const doc = new AdminModel(req.body);
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
    const { AdminName,AdminEmail,password } = req.body;
    if (AdminEmail&&AdminName&&password){
        const data = await AdminModel.findOne({AdminName}); 
        if(data!=null){
            const chkPswd=await bcryptjs.compare(password,data.password)
            if(AdminName==data.AdminName && AdminEmail==data.AdminEmail && chkPswd){
                console.log(data.status);
                if(data.status=="Active"){
                const jwtSecretKey="sdfghhuirkngfeewmAdminKey";
                const token = jwt.sign({name:data.AdminName,email:data.AdminEmail,password:data.password}, jwtSecretKey,{expiresIn:"1h"});
                res.status(200).send({status:"Login Successfully.......",token});
                }
                else
                res.send("You are not approved..........");
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

const displayAllUsers = async(req,res)=>{
    try{
    const token=req.query.token||req.body.token||req.headers["authorization"].split(" ")[1]||req.token;
    console.log("token : ",token);
    const result=jwt.verify(token,"sdfghhuirkngfeewmAdminKey");
    console.log("token validity test result : ",result);
    if(result){
    const data=await UserModel.find(); 

    try{
    res.send({data});
    }catch(err){console.log("verify token error1 : ", err);}

    console.log(data);
    }
    else
    res.send("You are not approved......");
  }
  catch(err)
  {
    console.log("verify token error2 : ", err);
  }
}

export default {Registration,login,displayAllUsers};