import express from "express"; 
const JobApplyRoute = express. Router()
import JobApplyController from "../controllers/JobApplyController.js";

JobApplyRoute.post("/register",JobApplyController.a);

export default JobApplyRoute;