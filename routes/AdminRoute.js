import express from "express"; 
const AdminRoute = express. Router();
import AdminController from "../controllers/AdminController.js";
import verifyToken from "../middleware/VerifyToken.js";

AdminRoute.post("/register",AdminController.Registration);
AdminRoute.post("/login",AdminController.login);
AdminRoute.get("/UserData",verifyToken,AdminController.displayAllUsers);

export default AdminRoute;