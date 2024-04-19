import express from "express"; 
const JobPostRoute = express. Router()
import JobPostController from "../controllers/JobPostController.js";

JobPostRoute.post("/register",JobPostController.a);

export default JobPostRoute;