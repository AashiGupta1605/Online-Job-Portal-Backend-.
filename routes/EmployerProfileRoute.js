import express from "express"; 
const EmployerProfileRoute = express. Router();
import EmployerProfileController from "../controllers/EmployerProfileController.js";

EmployerProfileRoute.post("/register",EmployerProfileController.a);

export default EmployerProfileRoute;