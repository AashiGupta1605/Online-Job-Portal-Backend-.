import express from "express"; 
const UserRoute = express. Router()
import UserController from "../controllers/UserController.js";
import verifyToken from "../middleware/VerifyToken.js";

UserRoute.post("/register",UserController.UserRegistration);
UserRoute.post("/login",UserController.Userlogin);

// UserRoute.get("/UserData",verifyToken,UserController.getdata);
// UserRoute.get("/UserData",UserController.getdata);
UserRoute.get("/UserData/:username",verifyToken,UserController.getdatabyID);
 
UserRoute.put("/UserUpdate/:id",UserController.UserUpdate);
UserRoute.delete("/UserDelete",UserController.UserDelete);
UserRoute.delete("/UserDelete/:username",UserController.UserDeletebyID);

export default UserRoute; 