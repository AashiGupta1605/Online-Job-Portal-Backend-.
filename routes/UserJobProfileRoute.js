import express from "express"; 
const UserJobProfileRoute = express. Router()
import UserJobProfileController from "../controllers/UserJobProfileController.js";

UserJobProfileRoute.post("/register",UserJobProfileController.a);

export default UserJobProfileRoute;