import express from "express";
import cors from "cors";
import ConnectDB from "./config/ConnectDB.js";
import UserRoute from "./routes/UserRoute.js";
import JobApplyRoute from "./routes/JobApplyRoute.js";
import JobPostRoute from "./routes/JobPostRoute.js";
import UserJobProfileRoute from "./routes/UserJobProfileRoute.js"
import EmployerCompanyRoute from "./routes/EmployerCompanyRoute.js";
import EmployerProfileRoute from "./routes/EmployerProfileRoute.js";
import AdminRoute from "./routes/AdminRoute.js";

const app=express();
app.use(cors());

const port=8000;
const Database_URL="mongodb+srv://guptaaashi1605:aashi1+0=2@clusterdatasetcollectio.h6hnwqr.mongodb.net/?retryWrites=true&w=majority";
ConnectDB(Database_URL);
app.use(express.json());

//Load Routes
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/employer", EmployerCompanyRoute);
app.use("/api/v1/admin", AdminRoute);
app.use("/api/v1/userProfile", UserJobProfileRoute);
app.use("/api/v1/jobApply", JobApplyRoute);
app.use("/api/v1/jobPost", JobPostRoute);
app.use("/api/v1/employerProfile", EmployerProfileRoute);

 
app.listen(port,()=>console.log("Connected"));
