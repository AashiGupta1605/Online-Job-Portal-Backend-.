import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const UserRegistration = async (req, res) => {
    const { username,firstname,lastname, email, mobile, password, rpassword,job_sector } = req.body;
    if (username && firstname && lastname && email && mobile && password && rpassword&&job_sector) {
        if (password === rpassword) {
            try {
                // const doc = new UserModel({
                //     username: username,
                //     firstname,
                //     lastname,
                //     email: email,
                //     mobile: mobile,
                //     password:password,
                //     job_sector
                // });
                const pswdkey = await bcryptjs.genSalt(12);
                req.body.password = await bcryptjs.hash(req.body.password,pswdkey);
                const doc = new UserModel(req.body);
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
 
const Userlogin = async(req,res)=>{
    const { username,email,password } = req.body;
    if (username&&email&&password){
        const data = await UserModel.findOne({username}); 
        if(data!=null){
            const chkPswd=await bcryptjs.compare(password,data.password)
            if(username==data.username&&email==data.email&&chkPswd){
                if(data.status==="Active"){
                const jwtSecretKey="sdfghhuirkngfbmUserKey";
                const token = jwt.sign({username:data.username,email:data.email,password:data.password}, jwtSecretKey,{expiresIn:"1h"});
                // const token = jwt.sign(data, jwtSecretKey);//error
                //const token = jwt.sign({username}, jwtSecretKey);
                console.log(token);
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
//     try{
//     const token=req.query.token||req.body.token||req.headers["authorization"].split(" ")[1]||req.token;
//     console.log("token : ",token);
//     try{
//     const result=jwt.verify(token,"sdfghhuirkngfeewmAdminKey");
//     console.log("token validity test result : ",result);
//     if(result){
//     const data=await UserModel.find({}); 
//     res.send(data);
//     console.log(data);
//     }
//     else
//     res.send("You are not approved......");
//     }catch(err){console.log("verify token error1 : ", err);}
    
//   }catch(err){console.log("verify token error2 : ", err);}
// }
const getdatabyID = async(req,res)=>{
    const data=await UserModel.find({username:req.params.username}); 
    if(data==[])
    res.send(`Record of ${req.params.username} is NOT Found......Roll no. ${req.params.username} is not registered......`);
    else
    res.send(data);
}
const UserUpdate = async(req,res)=>{
    const {username,firstname,lastname, email, mobile, password, rpassword,job_sector } = req.body;
    if (username && firstname && lastname && email && mobile && password && rpassword&&job_sector) {
    const data = await UserModel.findOne({username:req.params.id}); 
    if(data==null)
    res.send("Record not found.....");
    else{
    // data.email=email;
    // data.mobile=mobile;//data.mobile=req.body.mobile;
    data=req.body;
    data.save();
    res.send("Record updated......");
    }
}
else
res.send("New Data given to update is not proper........");
}
const UserDeletebyID= async(req,res)=>{
    const data = await UserModel.findOne({username:req.params.username}); 
    if(data==null)
    res.send("Record not found.....");
    else{
    await UserModel.deleteOne({username:req.params.username}); 
    res.send("Record Deleted Successfully.....");
    }
}
const UserDelete= async(req,res)=>{
    const data = await UserModel.find(); 
    if(data==null)
    res.send("No Records found.....EMPTY Student Collection........");
    else{
     await UserModel.deleteMany();   
    res.send("All Records Deleted Successfully.....");
    }
}
export default {UserRegistration,UserDelete,UserDeletebyID,UserUpdate,Userlogin,getdatabyID};
